---
aapos_core:
  name: "AAPOS Core"
  id: "aapos-core"
  version: "1.0.0"
  status: "Approved"
  owner: "AAPOS Core"
---

# AAPOS Core

AAPOS Core defines the frozen version `1.0.0` operating model for the AI-Assisted Product Operating System.

## Purpose

AAPOS exists to help Product Owners turn ambiguous product work into governed, engineering-ready decisions with AI assistance and explicit human accountability.

## Scope

AAPOS covers product discovery, product recommendation, engineering planning, and executive communication. It does not define software architecture, sprint planning, capacity management, implementation ownership, or downstream delivery management.

## Four-Stage Lifecycle

| Order | Stage ID | Stage Name | Primary Owner | Primary Artifact |
|---:|---|---|---|---|
| 1 | `product-discovery` | Product Discovery | Product Owner | Discovery Summary |
| 2 | `product-recommendation` | Product Recommendation | Product Owner | Approved Product Recommendation |
| 3 | `engineering-planning` | Engineering Planning | Product Owner, with Engineering review | Engineering Refinement Package and Workbook Map |
| 4 | `executive-communication` | Executive Communication | Product Owner | Engineering Readiness Review |

No additional stages are part of AAPOS v1.0.0.

## Required Human Gates

| Gate ID | Occurs After | Human Authority |
|---|---|---|
| `gate.product-discovery.discovery-review` | Product Discovery | Product Owner reviews discovery completeness and decides what stakeholder input is needed. |
| `gate.product-recommendation.product-approval` | Product Recommendation | Product Owner approves priority, intent, MVP scope, tradeoffs, assumptions, and success measures. |
| `gate.engineering-planning.engineering-review` | Engineering Planning | Engineering validates feasibility, dependencies, sequencing, and technical risk while Product confirms scope integrity. |
| `gate.executive-communication.final-approval` | Executive Communication | Product Owner approves the final recommendation, confidence statement, and decision request. |

## VUED Risk

Product Discovery and Product Recommendation use VUED Risk:

- Value
- Urgency
- Effort
- Dependencies
- Risk

Risk is always assessed separately and must include the risk of acting and the risk of not acting.

## Product Owner Accountability

The Product Owner remains accountable for product judgment, prioritization, scope, tradeoffs, stakeholder alignment, Engineering readiness, and final communication. AI may assist with analysis, drafting, organization, and translation, but AI does not own Product decisions.

## Artifact Ownership

Each primary artifact has one owner and one lifecycle stage:

- Product Discovery owns the Discovery Summary.
- Product Recommendation owns the Approved Product Recommendation.
- Engineering Planning owns the Engineering Refinement Package and Workbook Map.
- Executive Communication owns the Engineering Readiness Review.
- The Product Owner owns the Approval Record across gates.

Downstream artifacts may consume upstream artifacts, but they must not silently alter upstream Product decisions.

## Stage Entry Criteria

| Stage | Entry Criteria |
|---|---|
| Product Discovery | A product scenario, business problem, request, risk, or opportunity exists. |
| Product Recommendation | Discovery outputs and stakeholder responses are available or explicitly marked unknown. |
| Engineering Planning | The Product Recommendation has human approval and the Product Intent is locked. |
| Executive Communication | Engineering refinement outputs are available and Product confirms that scope has not drifted. |

## Stage Exit Criteria

| Stage | Exit Criteria |
|---|---|
| Product Discovery | Assumptions, risks, gaps, and decision-changing questions are visible and reviewed. |
| Product Recommendation | Product Intent, VUED Risk, MVP, out-of-scope boundaries, tradeoffs, and success measures are approved. |
| Engineering Planning | Epics, stories, dependencies, discovery, risks, deferred work, and readiness are traceable to approved Product intent. |
| Executive Communication | The final decision artifact is written for its audience, honest about uncertainty, and approved by the Product Owner. |

## Status Values

AAPOS v1.0.0 status values are:

- `Not Started`
- `In Progress`
- `Ready for Review`
- `Blocked`
- `Completed`

Status answers where the work is.

## Decision Values

AAPOS v1.0.0 decision values are:

- `Approved`
- `Approved With Notes`
- `Rejected`
- `Needs Revision`
- `Deferred`
- `Human Review Required`
- `Not Applicable`

Decision answers what was judged by the accountable human owner.

## Uncertainty Handling

AAPOS artifacts must separate facts, assumptions, open questions, dependencies, and risks. They must not invent estimates, regulations, architecture, stakeholder commitments, delivery dates, or production results.

When uncertainty could change priority, scope, MVP, sequencing, or risk response, it must be surfaced before commitment.

## Prohibited Behavior

AAPOS v1.0.0 prohibits:

- assigning Product judgment to AI
- allowing AI output to become a decision without human review
- changing Product Intent during Engineering planning
- treating Engineering discovery as Product reprioritization
- inventing estimates or delivery commitments
- presenting fictional examples as real outcomes
- exposing client, internal, or non-public material
- adding lifecycle stages without approved version governance

## Versioning

AAPOS uses semantic versioning.

- Major changes alter lifecycle, gates, required status or decision values, artifact ownership, or Product accountability.
- Minor changes add backward-compatible guidance, examples, or optional tooling.
- Patch changes clarify wording without changing behavior.

## Framework Freeze Rules

AAPOS v1.0.0 freezes the four-stage lifecycle, human gate model, VUED Risk decision lens, artifact ownership boundaries, and Product Owner accountability. Release packaging may improve documentation and validation, but it may not redesign the operating model.
