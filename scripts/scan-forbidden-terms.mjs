#!/usr/bin/env node
// Scans for known publication-risk terms, local path patterns,
// non-public repository references, and secret-like assignments.
// This reduces risk but cannot guarantee that every sensitive term is absent.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const blockedTermParts = [
  ["PT", "TC"],
  ["New England ", "PT", "TC"],
  ["Great Lakes ", "PT", "TC"],
  ["Cor", "pay"],
  ["/", "Users", "/"],
  ["file", "://"],
  ["private ", "repository"],
  ["inter", "view"]
];

const blockedTerms = [
  ...blockedTermParts.map((parts) => parts.join("")),
  ...process.argv.slice(2)
];

const secretPatterns = [
  { name: "email address", pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i },
  { name: "absolute user path", pattern: /\/Users\/[^\s)"']+/ },
  { name: "file URL", pattern: /file:\/\//i },
  { name: "secret-like assignment", pattern: /\b(api[_-]?key|secret|token|password|credential)\b\s*[:=]\s*["']?[A-Za-z0-9_.-]{16,}/i }
];

const ignoredDirectories = new Set([".git", "node_modules"]);
const ignoredFiles = new Set([".DS_Store"]);
const textFileExtensions = new Set(["", ".cff", ".json", ".md", ".mjs", ".txt", ".yaml", ".yml"]);
const findings = [];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!entry.isFile()) continue;
    if (ignoredFiles.has(entry.name)) {
      findings.push({ file: fullPath, issue: "disallowed file name", value: entry.name });
      continue;
    }
    const extension = path.extname(entry.name);
    if (!textFileExtensions.has(extension)) continue;
    const text = fs.readFileSync(fullPath, "utf8");
    scanText(fullPath, text);
  }
}

function scanText(file, text) {
  for (const term of blockedTerms) {
    const pattern = new RegExp(escapeRegExp(term), "i");
    if (pattern.test(text)) {
      findings.push({ file, issue: "blocked term", value: term });
    }
  }

  for (const { name, pattern } of secretPatterns) {
    if (pattern.test(text)) {
      findings.push({ file, issue: name, value: pattern.toString() });
    }
  }
}

walk(root);

if (findings.length) {
  console.error("AAPOS public-safety scan failed:");
  for (const finding of findings) {
    console.error(`- ${path.relative(root, finding.file)}: ${finding.issue} (${finding.value})`);
  }
  process.exit(1);
}

console.log("AAPOS public-safety scan passed.");
