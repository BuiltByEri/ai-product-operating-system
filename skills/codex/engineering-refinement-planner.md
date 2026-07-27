---
name: engineering-refinement-planner
description: Use when the user provides an approved product recommendation, PRD, or Claude product recommendation and wants Codex to convert it into an engineering refinement plan plus workbook-ready structured data covering epics, stories, dependencies, discovery, risks, sequencing, and readiness. Do not use for product discovery or reprioritization.
---

# Engineering Refinement Planner

## Overview

Use this skill after product discovery is complete and the product recommendation is already approved. Convert the locked product decision into engineering-ready planning artifacts without changing scope, reprioritizing, or inventing product requirements.

The skill produces two synchronized outputs:

1. **Canonical Engineering Refinement Package**: readable engineering plan.
2. **Workbook Population Dataset**: structured tables for a refinement workbook.

## Inputs

Expect one product-level input, usually from Claude or a product lead:

- Problem statement
- Business goal
- Approved recommendation
- MVP / near-term scope
- Out of scope
- Constraints
- Assumptions
- Success measures
- Prioritization rationale, if available

Treat the input as locked. If a missing product decision would fundamentally change the product boundary, stop and ask only the blocking questions. Otherwise proceed using the narrowest reasonable assumptions and state them clearly.

## Workflow

### 1. Confirm Product Boundary

Before decomposing the work, identify:

- Locked MVP scope
- Explicit exclusions
- Required controls or constraints
- Product assumptions
- Engineering assumptions
- Any unresolved boundary questions

Do not reopen prioritization unless the user explicitly asks.

### 2. Produce the Engineering Refinement Package

Create a readable engineering plan with these sections:

1. Engineering Planning Summary
2. Epic Inventory
3. Epic Details
4. Story Inventory
5. Story Details
6. Engineering Discovery
7. Deferred Backlog
8. Risk Register
9. Delivery Strategy
10. Engineering Readiness Statement

For each epic include business goal, user problem, business value, major features, dependencies, risks, open engineering questions, and refinement status.

For each story include user story, acceptance intent, business rules, edge/error behavior, dependencies, and refinement status. Use **acceptance intent**, not detailed acceptance criteria, unless the product input already provides exact criteria.

### 3. Produce the Workbook Population Dataset

Immediately after the engineering package, create structured workbook-ready tables. Read `references/workbook-schema.md` when producing this dataset or when the user asks for an actual workbook file.

The dataset must contain the same engineering work as the package. Do not introduce new work, remove work, or summarize away stories.

### 4. Validate Traceability

Before finalizing, check:

- Every epic in the plan appears in the workbook dataset.
- Every story appears exactly once in the story inventory and once under its epic.
- Every discovery item has a related epic and, when applicable, a related story.
- Deferred work is clearly separated from MVP scope.
- Risks include mitigation and owner when known.
- Delivery strategy sequences discovery, refinement, build, validation, and future backlog.

## Rules

Do:

- Preserve the approved product recommendation.
- State assumptions clearly.
- Separate product decisions from engineering discovery.
- Prefer clear engineering handoff language.
- Leave unknown workbook cells blank or mark them unknown rather than inventing.

Do not:

- Redesign product scope.
- Expand the MVP.
- Reprioritize work.
- Estimate effort, velocity, story points, or dates unless supplied.
- Design architecture.
- Create sprint commitments.
- Promote operational workarounds into product epics unless explicitly approved.
- Hide uncertainty.

## Output Format

Return exactly two top-level outputs:

```markdown
# Output 1: Canonical Engineering Refinement Package

...

# Output 2: Workbook Population Dataset

...
```

If the user asks for a workbook file, create it from Output 2 using the workbook schema and preserve the same information.