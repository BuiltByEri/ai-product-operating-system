#!/usr/bin/env node
// Validates selected structured contracts in the fictional end-to-end example.
// This protects exact workbook column names and lifecycle-status consistency; it
// does not determine whether the fictional Product decisions are correct.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workbookPath = "examples/fictional-product-scenario/stage-3-engineering-refinement-workbook-map.md";
const readinessPath = "examples/fictional-product-scenario/stage-4-engineering-readiness-review.md";
const allowedStatuses = new Set(["Not Started", "In Progress", "Ready for Review", "Blocked", "Completed"]);
const problems = [];

function read(relativePath) {
  const file = path.join(root, relativePath);
  if (!fs.existsSync(file)) {
    problems.push(`Missing example file: ${relativePath}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

function cells(line) {
  return line.split("|").slice(1, -1).map((cell) => cell.trim());
}

function tables(markdown) {
  const result = [];
  const lines = markdown.split("\n");
  for (let index = 0; index < lines.length - 1; index += 1) {
    if (!lines[index].startsWith("|") || !lines[index + 1].startsWith("|")) continue;
    const separator = cells(lines[index + 1]);
    if (!separator.length || !separator.every((cell) => /^:?-{3,}:?$/.test(cell))) continue;
    const header = cells(lines[index]);
    const rows = [];
    index += 2;
    while (index < lines.length && lines[index].startsWith("|")) {
      rows.push(cells(lines[index]));
      index += 1;
    }
    result.push({ header, rows });
    index -= 1;
  }
  return result;
}

function findTable(allTables, firstColumn) {
  return allTables.find((table) => table.header[0] === firstColumn);
}

const workbook = read(workbookPath);
const readiness = read(readinessPath);
const workbookTables = tables(workbook);
const readinessTables = tables(readiness);

const requiredHeaders = [
  ["Product Intent", "MVP Scope", "Out of Scope", "Product Assumption", "Engineering Assumption", "Source Artifact"],
  ["Epic ID", "Epic Name", "Business Goal", "Business Value", "Dependencies", "Risks", "Open Questions", "Refinement Status"],
  ["Story ID", "Epic ID", "User Story", "Acceptance Intent", "Business Rules", "Edge or Error Behavior", "Dependencies", "Refinement Status"],
  ["Discovery ID", "Related Epic ID", "Related Story ID", "Question", "Why It Matters", "Owner", "Status"],
  ["Dependency ID", "Related Epic ID", "Type", "Description", "Owner", "Status", "Why It Matters"],
  ["Risk ID", "Related Epic ID", "Risk", "Impact", "Likelihood", "Mitigation", "Owner", "Status"],
  ["Deferred ID", "Description", "Reason Deferred", "Related Product Boundary", "Revisit Trigger"],
  ["Area", "Status", "Evidence", "Blocker", "Next Action"]
];

for (const requiredHeader of requiredHeaders) {
  const match = workbookTables.some((table) => table.header.join("|") === requiredHeader.join("|"));
  if (!match) problems.push(`${workbookPath} missing exact structured header: ${requiredHeader.join(" | ")}`);
}

for (const table of workbookTables) {
  for (const statusColumn of ["Status", "Refinement Status"]) {
    const statusIndex = table.header.indexOf(statusColumn);
    if (statusIndex === -1) continue;
    for (const row of table.rows) {
      const value = row[statusIndex];
      if (!allowedStatuses.has(value)) {
        problems.push(`${workbookPath} uses unsupported ${statusColumn} value "${value}" in ${row[0] || "unnamed row"}`);
      }
    }
  }
}

const epicTable = findTable(workbookTables, "Epic ID");
const overviewTable = findTable(readinessTables, "Workstream");
const workstreamToEpic = new Map([
  ["Eligibility, data, and workflow discovery", "EPIC-001"],
  ["Guided request intake", "EPIC-002"],
  ["Governed recommendation workspace", "EPIC-003"],
  ["Exceptions and status", "EPIC-004"]
]);

if (!epicTable) {
  problems.push(`${workbookPath} missing Epics table`);
} else if (!overviewTable) {
  problems.push(`${readinessPath} missing Engineering Refinement Overview table`);
} else {
  const epicIdIndex = epicTable.header.indexOf("Epic ID");
  const epicStatusIndex = epicTable.header.indexOf("Refinement Status");
  const epicStatuses = new Map(epicTable.rows.map((row) => [row[epicIdIndex], row[epicStatusIndex]]));
  const workstreamIndex = overviewTable.header.indexOf("Workstream");
  const readinessStatusIndex = overviewTable.header.indexOf("Refinement Status");

  for (const row of overviewTable.rows) {
    const workstream = row[workstreamIndex];
    const epicId = workstreamToEpic.get(workstream);
    if (!epicId) continue;
    const stageThreeStatus = epicStatuses.get(epicId);
    const stageFourStatus = row[readinessStatusIndex];
    if (stageThreeStatus !== stageFourStatus) {
      problems.push(`${readinessPath} reports ${epicId} as "${stageFourStatus}" but Stage 3 reports "${stageThreeStatus}"`);
    }
  }
}

if (problems.length) {
  console.error("AAPOS fictional example validation failed:");
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}

console.log("AAPOS fictional example validation passed for workbook headers, statuses, and Stage 3/4 readiness alignment.");
