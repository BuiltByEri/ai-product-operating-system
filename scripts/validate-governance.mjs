#!/usr/bin/env node
// Validates the presence and cross-file consistency of the AAPOS human gate
// review standard. This is a focused documentation contract check, not a
// substitute for accountable human review or full JSON Schema validation.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];

function read(relativePath) {
  const file = path.join(root, relativePath);
  if (!fs.existsSync(file)) {
    problems.push(`Missing governance file: ${relativePath}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

function requireText(relativePath, text, expectedText) {
  if (!text.includes(expectedText)) {
    problems.push(`${relativePath} missing required governance text: ${expectedText}`);
  }
}

const guidePath = "docs/HUMAN_GATE_REVIEW_GUIDE.md";
const guide = read(guidePath);

for (const heading of [
  "## The Human Review Standard",
  "## Universal Review Questions",
  "## Decision and Status Separation",
  "## Gate 1: Discovery Review",
  "## Gate 2: Product Approval",
  "## Gate 3: Engineering Review",
  "## Gate 4: Final Approval",
  "## Approval Record Standard",
  "## Escalation"
]) {
  requireText(guidePath, guide, heading);
}

for (const action of ["**Inspect:**", "**Challenge:**", "**Decide:**", "**Record:**"]) {
  requireText(guidePath, guide, action);
}

for (const gateId of [
  "gate.product-discovery.discovery-review",
  "gate.product-recommendation.product-approval",
  "gate.engineering-planning.engineering-review",
  "gate.executive-communication.final-approval"
]) {
  requireText(guidePath, guide, gateId);
}

for (const heading of ["### Inspect", "### Challenge", "### Return or Block When", "### Decision Boundary", "### Record"]) {
  const count = guide.split(heading).length - 1;
  if (count !== 4) problems.push(`${guidePath} expected 4 occurrences of ${heading} but found ${count}`);
}

const skillPaths = [
  "skills/claude/vued-clarifying-questions.md",
  "skills/claude/vued-product-plan.md",
  "skills/codex/engineering-refinement-planner.md",
  "skills/claude/engineering-readiness-review.md"
];

for (const skillPath of skillPaths) {
  const skill = read(skillPath);
  requireText(skillPath, skill, "../../docs/HUMAN_GATE_REVIEW_GUIDE.md");
  for (const heading of ["### Human Review Checklist", "### Return or Block When", "### Decision Boundary", "### Record"]) {
    requireText(skillPath, skill, heading);
  }
  requireText(skillPath, skill, "Approval permits");
  requireText(skillPath, skill, "Approval does not");
  requireText(skillPath, skill, "next action permitted");
}

for (const relativePath of [
  "README.md",
  "core/AAPOS_CORE.md",
  "core/AAPOS_GOVERNANCE_MODEL.md",
  "docs/APPROVAL_GATES.md",
  "docs/HUMAN_GOVERNANCE.md"
]) {
  const text = read(relativePath);
  requireText(relativePath, text, "HUMAN_GATE_REVIEW_GUIDE.md");
}

const templatePath = "artifact-templates/approval-record-template.md";
const template = read(templatePath);
for (const field of [
  "Decision rationale:",
  "Evidence reviewed:",
  "Review criteria satisfied:",
  "Conditions:",
  "Return reason:",
  "Remaining blockers:",
  "Next action permitted:",
  "Decision boundary:"
]) {
  requireText(templatePath, template, field);
}

const schemaPath = "schemas/approval-record.schema.json";
const schemaText = read(schemaPath);
try {
  const schema = JSON.parse(schemaText);
  const gateProperties = schema.properties?.gate_outcomes?.items?.properties ?? {};
  for (const property of [
    "decision_rationale",
    "evidence_reviewed",
    "review_criteria_satisfied",
    "conditions",
    "return_reason",
    "remaining_blockers",
    "next_action_permitted",
    "decision_boundary"
  ]) {
    if (!gateProperties[property]) problems.push(`${schemaPath} missing gate outcome property ${property}`);
  }
} catch (error) {
  problems.push(`${schemaPath} is not valid JSON: ${error.message}`);
}

const examplePath = "examples/fictional-product-scenario/approval-record.md";
const example = read(examplePath);
for (const heading of ["### Discovery Review", "### Product Approval", "### Engineering Review", "### Final Approval"]) {
  requireText(examplePath, example, heading);
}
for (const field of [
  "**Decision rationale:**",
  "**Evidence reviewed:**",
  "**Review criteria satisfied:**",
  "**Conditions:**",
  "**Return reason:**",
  "**Remaining blockers:**",
  "**Next action permitted:**",
  "**Decision boundary:**"
]) {
  const count = example.split(field).length - 1;
  if (count !== 4) problems.push(`${examplePath} expected 4 occurrences of ${field} but found ${count}`);
}

if (problems.length) {
  console.error("AAPOS governance validation failed:");
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}

console.log("AAPOS human gate governance validation passed for 4 gates and 4 skills.");
