---
aapos_artifact:
  id: "artifact.engineering_refinement_workbook_map"
  name: "Engineering Refinement Workbook Map"
  version: "1.0.0"
  stage: "Engineering Planning"
  owner: "Product Owner"
---

# Engineering Refinement Workbook Map

The workbook map defines structured tables for Engineering refinement. It is a public template, not a required spreadsheet implementation.

## Tabs

| Tab | Purpose |
|---|---|
| Product Boundary | Preserve Product Intent, MVP scope, exclusions, and assumptions. |
| Epics | Track epic-level refinement. |
| Stories | Track story-level acceptance intent and dependencies. |
| Engineering Discovery | Track technical unknowns and decisions needed. |
| Dependencies | Track cross-team, system, vendor, data, and approval dependencies. |
| Risks | Track risk, impact, likelihood, mitigation, owner, and status. |
| Deferred Work | Keep future or full-solution work out of MVP scope. |
| Readiness | Summarize readiness, blockers, and review outcome. |

## Required Columns

### Product Boundary

- Product Intent
- MVP Scope
- Out of Scope
- Product Assumption
- Engineering Assumption
- Source Artifact

### Epics

- Epic ID
- Epic Name
- Business Goal
- Business Value
- Dependencies
- Risks
- Open Questions
- Refinement Status

### Stories

- Story ID
- Epic ID
- User Story
- Acceptance Intent
- Business Rules
- Edge or Error Behavior
- Dependencies
- Refinement Status

### Engineering Discovery

- Discovery ID
- Related Epic ID
- Related Story ID
- Question
- Why It Matters
- Owner
- Status

### Dependencies

- Dependency ID
- Related Epic ID
- Type
- Description
- Owner
- Status

### Risks

- Risk ID
- Related Epic ID
- Risk
- Impact
- Likelihood
- Mitigation
- Owner
- Status

### Deferred Work

- Deferred ID
- Description
- Reason Deferred
- Related Product Boundary
- Revisit Trigger

### Readiness

- Area
- Status
- Evidence
- Blocker
- Next Action

## Traceability Rule

Every epic, story, discovery item, dependency, risk, and deferred item must trace back to the Approved Product Recommendation.
