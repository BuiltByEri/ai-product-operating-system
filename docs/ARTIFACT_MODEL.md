# Artifact Model

Each stage produces a distinct artifact for a distinct audience.

| Artifact ID | Stage | Artifact | Primary Audience | Purpose |
|---|---|---|---|---|
| `artifact.discovery_summary` | Product Discovery | Discovery Summary | Product Owner and stakeholders | Clarify the problem, assumptions, risks, and decision-changing questions. |
| `artifact.product_recommendation` | Product Recommendation | Approved Product Recommendation | Product leadership and stakeholders | Define Product Intent, priority, MVP, tradeoffs, success measures, and approval. |
| `artifact.engineering_refinement_package` | Engineering Planning | Engineering Refinement Package | Engineering and Product | Translate locked Product strategy into epics, stories, discovery, dependencies, risks, and sequencing. |
| `artifact.engineering_refinement_workbook_map` | Engineering Planning | Engineering Refinement Workbook Map | Engineering and Product | Maintain structured implementation detail and traceability. |
| `artifact.engineering_readiness_review` | Executive Communication | Engineering Readiness Review | Mixed leadership and delivery audience | Communicate the recommendation, readiness, risks, sequencing, and requested decision. |
| `artifact.approval_record` | Cross-stage gates | Approval Record | Product Owner and reviewers | Preserve gate outcomes, approvals, notes, and unresolved risks. |

## Artifact Boundaries

### Discovery Summary

This is not a solution document. It identifies what is known, assumed, risky, or still missing.

### Approved Product Recommendation

This locks Product intent before Engineering decomposition begins. It should clearly state scope, exclusions, tradeoffs, and success measures.

### Engineering Refinement Package

This is the readable Engineering plan. It may expose feasibility questions and technical unknowns, but it may not redesign Product scope.

### Engineering Refinement Workbook Map

This is the structured implementation reference. Epic IDs, Story IDs, discovery IDs, risk tracking, acceptance intent, business rules, and readiness details belong here.

### Engineering Readiness Review

This is the story for a mixed business and delivery audience. It translates Engineering work into plain Product language.

### Approval Record

This records human gate outcomes. It must not be replaced by AI-generated confidence language.

## Boundary Rule

The package is research. The workbook map is reference. The readiness review is the story.
