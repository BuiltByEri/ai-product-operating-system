#!/usr/bin/env node
// Checks version consistency across selected AAPOS release files.
// This is a direct consistency check, not full package or CFF validation.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expectedVersion = "1.0.0";
const problems = [];

function read(relativePath) {
  const file = path.join(root, relativePath);
  if (!fs.existsSync(file)) {
    problems.push(`Missing versioned file: ${relativePath}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

function requireText(relativePath, text, expectedText) {
  if (!text.includes(expectedText)) {
    problems.push(`${relativePath} missing expected version text: ${expectedText}`);
  }
}

const versionText = read("VERSION").trim();
if (versionText !== expectedVersion) {
  problems.push(`VERSION expected ${expectedVersion} but found ${versionText || "empty"}`);
}

const packageText = read("package.json");
try {
  const packageJson = JSON.parse(packageText);
  if (packageJson.version !== expectedVersion) {
    problems.push(`package.json version expected ${expectedVersion} but found ${packageJson.version ?? "missing"}`);
  }
} catch (error) {
  problems.push(`package.json is not valid JSON: ${error.message}`);
}

requireText("README.md", read("README.md"), `version \`${expectedVersion}\``);
requireText("core/AAPOS_CORE.md", read("core/AAPOS_CORE.md"), `version: "${expectedVersion}"`);
requireText("CHANGELOG.md", read("CHANGELOG.md"), `## ${expectedVersion}`);
requireText("CITATION.cff", read("CITATION.cff"), `version: "${expectedVersion}"`);

for (const skillPath of [
  "skills/claude/vued-clarifying-questions.md",
  "skills/claude/vued-product-plan.md",
  "skills/codex/engineering-refinement-planner.md",
  "skills/claude/engineering-readiness-review.md"
]) {
  const text = read(skillPath);
  requireText(skillPath, text, `version: "${expectedVersion}"`);
  requireText(skillPath, text, `specification_version: "${expectedVersion}"`);
}

if (problems.length) {
  console.error("AAPOS version validation failed:");
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}

console.log(`AAPOS version validation passed for ${expectedVersion}.`);
