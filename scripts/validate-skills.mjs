#!/usr/bin/env node
// Validates the expected AAPOS 1.0.0 skill set and selected lifecycle
// metadata. This is not a general-purpose YAML parser or JSON Schema engine.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const expectedSkills = [
  {
    file: "skills/claude/vued-clarifying-questions.md",
    id: "vued-clarifying-questions",
    name: "VUED Clarifying Questions",
    stageId: "product-discovery",
    stageName: "Product Discovery",
    order: "1",
    next: "vued-product-plan",
    gate: "gate.product-discovery.discovery-review",
    produces: ["artifact.discovery_summary"]
  },
  {
    file: "skills/claude/vued-product-plan.md",
    id: "vued-product-plan",
    name: "VUED Product Plan",
    stageId: "product-recommendation",
    stageName: "Product Recommendation",
    order: "2",
    next: "engineering-refinement-planner",
    gate: "gate.product-recommendation.product-approval",
    produces: ["artifact.product_recommendation", "artifact.approval_record"]
  },
  {
    file: "skills/codex/engineering-refinement-planner.md",
    id: "engineering-refinement-planner",
    name: "Engineering Refinement Planner",
    stageId: "engineering-planning",
    stageName: "Engineering Planning",
    order: "3",
    next: "engineering-readiness-review",
    gate: "gate.engineering-planning.engineering-review",
    produces: ["artifact.engineering_refinement_package", "artifact.engineering_refinement_workbook_map"]
  },
  {
    file: "skills/claude/engineering-readiness-review.md",
    id: "engineering-readiness-review",
    name: "Engineering Readiness Review",
    stageId: "executive-communication",
    stageName: "Executive Communication",
    order: "4",
    next: null,
    gate: "gate.executive-communication.final-approval",
    produces: ["artifact.engineering_readiness_review", "artifact.approval_record"]
  }
];

const requiredSections = [
  "Purpose",
  "When to Use",
  "Inputs",
  "Required Reading",
  "Execution Steps",
  "Human Gate",
  "Outputs",
  "Status Values",
  "Decision Values",
  "Guardrails",
  "Exit Criteria",
  "Version History"
];

const expectedStatusValues = ["Not Started", "In Progress", "Ready for Review", "Blocked", "Completed"];
const expectedDecisionValues = ["Approved", "Approved With Notes", "Rejected", "Needs Revision", "Deferred", "Human Review Required", "Not Applicable"];
const expectedGates = new Set(expectedSkills.map((skill) => skill.gate));
const expectedSkillFiles = expectedSkills.map((skill) => skill.file).sort();
const problems = [];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function scalar(yaml, key) {
  const match = yaml.match(new RegExp(`^\\s*${key}:\\s*(?:"([^"]*)"|(null)|([^\\n#]+))`, "m"));
  if (!match) return undefined;
  if (match[2] === "null") return null;
  return (match[1] ?? match[3]).trim();
}

function inlineScalar(yaml, key) {
  const match = yaml.match(new RegExp(`\\b${key}:\\s*(?:"([^"]*)"|(null)|([^,}\\n]+))`, "m"));
  if (!match) return undefined;
  if (match[2] === "null") return null;
  return (match[1] ?? match[3]).trim();
}

function listLine(yaml, key) {
  const match = yaml.match(new RegExp(`^\\s*${key}:\\s*\\[([^\\]]*)\\]`, "m"));
  if (!match) return [];
  return match[1]
    .split(",")
    .map((item) => item.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);
}

function blockBetween(yaml, start, end) {
  const match = yaml.match(new RegExp(`^\\s*${start}:\\n([\\s\\S]*?)^\\s*${end}:`, "m"));
  return match ? match[1] : "";
}

function artifactIds(block) {
  return [...block.matchAll(/artifact_id:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function readSkill(expected) {
  const file = path.join(root, expected.file);
  if (!fs.existsSync(file)) {
    problems.push(`Missing skill file: ${expected.file}`);
    return null;
  }
  const text = fs.readFileSync(file, "utf8");
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatter) {
    problems.push(`Missing YAML front matter: ${expected.file}`);
    return null;
  }
  return { file, text, yaml: frontmatter[1] };
}

function checkSections(skill, expected) {
  const headings = [...skill.text.matchAll(/^##\s+\d+\.\s+(.+)$/gm)].map((match) => match[1].trim());
  requiredSections.forEach((section, index) => {
    if (headings[index] !== section) {
      problems.push(`${expected.file} section ${index + 1} expected "${section}" but found "${headings[index] ?? "missing"}"`);
    }
  });
}

function checkNoAiOwnership(skill, expected) {
  const blockedPatterns = [
    /\bAI\s+(approves|decides|owns|authorizes|commits|prioritizes)\b/i,
    /\bAI\s+is\s+the\s+(approver|decision-maker|owner)\b/i,
    /\bAI-generated\s+output\s+automatically\s+becomes\b/i
  ];
  for (const pattern of blockedPatterns) {
    if (pattern.test(skill.text)) {
      problems.push(`${expected.file} contains unsupported AI decision ownership wording: ${pattern}`);
    }
  }
}

function checkSkill(expected) {
  const skill = readSkill(expected);
  if (!skill) return;

  if (!skill.yaml.includes("aapos_skill:")) problems.push(`${expected.file} front matter missing aapos_skill root`);
  if (scalar(skill.yaml, "id") !== expected.id) problems.push(`${expected.file} metadata id mismatch`);
  if (scalar(skill.yaml, "name") !== expected.name) problems.push(`${expected.file} metadata name mismatch`);
  if (scalar(skill.yaml, "version") !== "1.0.0") problems.push(`${expected.file} version must be 1.0.0`);
  if (scalar(skill.yaml, "specification_version") !== "1.0.0") problems.push(`${expected.file} specification_version must be 1.0.0`);
  if (!skill.yaml.includes("compatible_aapos_versions: [\">=1.0.0 <2.0.0\"]")) problems.push(`${expected.file} compatible_aapos_versions mismatch`);
  if (scalar(skill.yaml, "skill_state") !== "Approved") problems.push(`${expected.file} skill_state must be Approved`);
  if (inlineScalar(skill.yaml, "stage_id") !== expected.stageId) problems.push(`${expected.file} stage_id mismatch`);
  if (inlineScalar(skill.yaml, "stage_name") !== expected.stageName) problems.push(`${expected.file} stage_name mismatch`);
  if (String(inlineScalar(skill.yaml, "order")) !== expected.order) problems.push(`${expected.file} lifecycle order mismatch`);
  if (scalar(skill.yaml, "primary_owner") !== "Product Owner") problems.push(`${expected.file} primary_owner must be Product Owner`);
  if (scalar(skill.yaml, "requires_human_gate") !== "true") problems.push(`${expected.file} must require a human gate`);
  if (scalar(skill.yaml, "gate_id") !== expected.gate) problems.push(`${expected.file} gate_id mismatch`);
  if (scalar(skill.yaml, "next_skill") !== expected.next) problems.push(`${expected.file} next_skill expected ${expected.next ?? "null"}`);

  const statuses = listLine(skill.yaml, "permitted_status_values");
  const decisions = listLine(skill.yaml, "permitted_decision_values");
  if (statuses.join("|") !== expectedStatusValues.join("|")) problems.push(`${expected.file} status values differ from AAPOS Core`);
  if (decisions.join("|") !== expectedDecisionValues.join("|")) problems.push(`${expected.file} decision values differ from AAPOS Core`);

  const produces = artifactIds(blockBetween(skill.yaml, "produces", "requires_human_gate"));
  for (const artifact of expected.produces) {
    if (!produces.includes(artifact)) problems.push(`${expected.file} missing produced artifact ${artifact}`);
  }

  checkSections(skill, expected);
  checkNoAiOwnership(skill, expected);
}

function findSkillFiles() {
  const files = [];
  for (const provider of ["claude", "codex"]) {
    const dir = path.join(root, "skills", provider);
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(path.join("skills", provider, entry.name));
      }
    }
  }
  return files.sort();
}

const actualSkillFiles = findSkillFiles();
if (actualSkillFiles.join("|") !== expectedSkillFiles.join("|")) {
  problems.push(`Skill file set differs. Expected ${expectedSkillFiles.join(", ")} but found ${actualSkillFiles.join(", ")}`);
}

for (const expected of expectedSkills) checkSkill(expected);

const coreFile = path.join(root, "core", "AAPOS_CORE.md");
const coreText = fs.existsSync(coreFile) ? fs.readFileSync(coreFile, "utf8") : "";
for (const gate of expectedGates) {
  if (!coreText.includes(gate)) problems.push(`AAPOS Core missing required gate ${gate}`);
}

for (const stage of ["Product Discovery", "Product Recommendation", "Engineering Planning", "Executive Communication"]) {
  if (!coreText.includes(stage)) problems.push(`AAPOS Core missing stage ${stage}`);
}

if (problems.length) {
  console.error("AAPOS skill validation failed:");
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}

console.log(`AAPOS skill validation passed for ${expectedSkills.length} skills.`);
