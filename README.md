# AAPOS

## AI-Assisted Product Operating System

Turning ambiguous product work into governed, engineering-ready decisions.

AAPOS is a practical Product Ownership framework for using AI across discovery, prioritization, engineering planning, and executive communication while keeping human judgment, approval, and accountability as the control layer.

This repository contains AAPOS version `1.0.0`.

## What AAPOS Is

AAPOS is a vendor-neutral operating model for Product Owners who need to move ambiguous product work into clear, reviewable, engineering-ready decisions. It defines a four-stage lifecycle, artifact boundaries, human review gates, and reusable skill contracts for AI-assisted product work.

AAPOS is not a prompt collection. The skills in this repository are reference implementations of the broader methodology.

## The Problem AAPOS Solves

AI can make product work faster, but speed without governance creates risk: unclear scope, hidden assumptions, premature commitments, unsupported estimates, and stakeholder messages that sound more certain than the evidence allows.

AAPOS creates a repeatable path from an ambiguous business problem to a Product-owned recommendation, an Engineering-ready refinement package, and an executive communication artifact that is honest about scope, risk, dependencies, and open decisions.

## Who It Is For

AAPOS is designed for:

- Product Owners and Product Managers turning ambiguous work into decisions.
- Product leaders reviewing scope, priority, tradeoffs, and readiness.
- Engineering leaders who need stable Product intent before refinement.
- Operations, Risk, Compliance, Sales, and customer-facing partners who need clear product reasoning.
- Teams using AI assistance while preserving human accountability.

## Design Principles

- AI accelerates. Humans decide.
- Discovery comes before commitment.
- Product intent locks before Engineering planning.
- Product drives Engineering.
- Translate, do not transcribe.
- Every artifact serves one audience.
- Make uncertainty and dependencies visible.
- Separate mitigation, discovery, MVP, and full solution.
- Avoid false precision.
- Keep the framework vendor-neutral.

See [`docs/DESIGN_PRINCIPLES.md`](docs/DESIGN_PRINCIPLES.md).

## Four-Stage Operating Model

```text
Business Problem
  -> Product Discovery
  -> Human Review Gate
  -> Product Recommendation
  -> Human Approval Gate
  -> Engineering Planning
  -> Human + Engineering Review Gate
  -> Executive Communication
  -> Human Final Approval
```

| Stage | Purpose | Reference implementation | Primary artifact |
|---|---|---|---|
| 1. Product Discovery | Turn ambiguity into a structured understanding of the problem | `skills/claude/vued-clarifying-questions.md` | Discovery Summary |
| 2. Product Recommendation | Apply VUED Risk and produce an approved Product plan | `skills/claude/vued-product-plan.md` | Approved Product Recommendation |
| 3. Engineering Planning | Translate locked Product strategy into engineering-ready planning | `skills/codex/engineering-refinement-planner.md` | Engineering Refinement Package and Workbook Map |
| 4. Executive Communication | Translate Product and Engineering work into a business-audience decision artifact | `skills/claude/engineering-readiness-review.md` | Engineering Readiness Review |

See [`docs/OPERATING_MODEL.md`](docs/OPERATING_MODEL.md).

## VUED Risk

AAPOS evaluates product work through five lenses:

- Value: user impact, revenue, retention, operational efficiency, strategic alignment, and scale.
- Urgency: deadlines, production impact, escalation, cost of delay, and whether the problem is worsening.
- Effort: delivery complexity and unknowns, without inventing estimates.
- Dependencies: systems, teams, controls, vendors, sequencing constraints, and approvals.
- Risk: a required overlay covering both the risk of acting and the risk of not acting.

Risk remains separate because valuable or urgent work can still be unsafe, and low-effort work can still create unacceptable exposure.

See [`docs/VUED_RISK_FRAMEWORK.md`](docs/VUED_RISK_FRAMEWORK.md).

## Human Governance

No AI-generated output automatically becomes a decision, requirement, backlog item, Engineering commitment, stakeholder message, or executive recommendation.

The Product Owner remains accountable for discovery quality, prioritization, scope, tradeoffs, stakeholder alignment, Engineering readiness, final communication, and the outcome.

See [`docs/HUMAN_GOVERNANCE.md`](docs/HUMAN_GOVERNANCE.md) and [`core/AAPOS_GOVERNANCE_MODEL.md`](core/AAPOS_GOVERNANCE_MODEL.md).

## Core Concepts

- Product Intent: the approved product direction that Engineering planning must preserve.
- VUED Risk: the product decision lens used to reason about priority and sequence.
- Human Gate: the review or approval boundary between lifecycle stages.
- Discovery Summary: the artifact that records what is known, assumed, risky, or missing.
- Approved Product Recommendation: the Product-owned decision artifact that locks scope before Engineering planning.
- Engineering Refinement Package: the Engineering-ready plan derived from approved Product intent.
- Engineering Readiness Review: the executive communication artifact for decision makers.

## Outputs

AAPOS produces:

- Discovery Summary
- Approved Product Recommendation
- Engineering Refinement Package
- Engineering Refinement Workbook Map
- Engineering Readiness Review
- Approval Record

The artifact model is documented in [`docs/ARTIFACT_MODEL.md`](docs/ARTIFACT_MODEL.md). Templates are available in [`artifact-templates/`](artifact-templates/).

## Fictional Example

[`examples/fictional-product-scenario/`](examples/fictional-product-scenario/) contains the fictional Northstar Vendor Onboarding Platform scenario. It demonstrates the AAPOS lifecycle without using real client material, production outcomes, adoption claims, or measured business results.

## Repository Structure

```text
core/                 AAPOS Core, governance, status, and decision models
docs/                 Public framework documentation
skills/               Approved AAPOS reference skill contracts
artifact-templates/   Public artifact templates
examples/             Fictional public examples
schemas/              Reference metadata schemas
scripts/              Release validation scripts
tests/                Validation notes
```

## Getting Started

1. Read [`docs/AAPOS_OVERVIEW.md`](docs/AAPOS_OVERVIEW.md).
2. Review the lifecycle in [`docs/OPERATING_MODEL.md`](docs/OPERATING_MODEL.md).
3. Use the skill contracts in [`skills/`](skills/) when working through a product scenario.
4. Use the templates in [`artifact-templates/`](artifact-templates/) to keep outputs auditable.
5. Review the fictional example to see the artifacts together.

## Validation Scripts

Validation scripts live in [`scripts/`](scripts/).

- `npm run validate:skills` checks expected skill files, metadata, lifecycle routing, artifact ownership, human gates, required sections, and unsupported AI decision ownership.
- `npm run validate:links` checks local Markdown file links. It skips anchors, external URLs, generated files, and semantic correctness.
- `npm run validate:safety` checks known publication-risk terms, local machine paths, non-public repository references, and secret-like assignments. It reduces risk but cannot guarantee confidentiality.
- `npm run validate:version` checks version consistency across the repository.
- `npm run validate` and `npm test` run the full validation set.

## Project Status

AAPOS v1.0.0 is frozen as an operating model. Current work focuses on public documentation, release packaging, examples, and validation safeguards. Future changes must not alter the four-stage lifecycle or assign Product judgment to AI without a major-version governance decision.

## Roadmap

See [`ROADMAP.md`](ROADMAP.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Citation

Citation metadata is available in [`CITATION.cff`](CITATION.cff).

## License

SPDX-License-Identifier: Apache-2.0

AAPOS is licensed under the Apache License 2.0. See [`LICENSE`](LICENSE).
