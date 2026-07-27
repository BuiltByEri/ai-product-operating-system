# Artifact Model

Each stage produces a distinct artifact for a distinct audience.

| Stage | Artifact | Primary audience | Purpose |
|---|---|---|---|
| Product Discovery | Discovery Summary | Product Owner and stakeholders | Clarify the problem, assumptions, risks, and decision-changing questions |
| Product Recommendation | Approved Product Recommendation | Product leadership and stakeholders | Define Product Intent, priority, MVP, tradeoffs, and success measures |
| Engineering Planning | Canonical Engineering Refinement Package | Engineering and Product | Translate locked Product strategy into epics, stories, discovery, dependencies, risks, and sequencing |
| Engineering Planning | Engineering Refinement Workbook | Engineering and Product | Maintain structured implementation detail and traceability |
| Executive Communication | Engineering Readiness Review | Mixed leadership and delivery audience | Communicate the recommendation, readiness, risks, sequencing, and requested decision |

## Artifact boundaries

### Discovery Summary

This is not a solution document. It identifies what is known, assumed, risky, or still missing.

### Approved Product Recommendation

This locks Product intent before Engineering decomposition begins. It should clearly state scope, exclusions, tradeoffs, and success measures.

### Engineering Refinement Package

This is the readable Engineering plan. It may expose feasibility questions and technical unknowns, but it may not redesign Product scope.

### Engineering Refinement Workbook

This is the structured implementation reference. Epic IDs, Story IDs, Discovery IDs, risk tracking, acceptance intent, business rules, and readiness details belong here.

### Engineering Readiness Review

This is the story for a mixed business and delivery audience. It translates Engineering work into plain Product language.

**The package is research. The workbook is reference. The presentation is the story.**