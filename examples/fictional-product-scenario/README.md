# Wayfinder Dispatch Recovery Workspace

This is a completely fictional public example for AAPOS version `1.0.0`.

It demonstrates how one ambiguous request moves through the four frozen AAPOS stages without allowing AI to make the Product decision:

1. Product Discovery
2. Product Recommendation
3. Engineering Planning
4. Executive Communication

Human approval records preserve the decisions made between stages.

## Scenario

Wayfinder is an invented commercial field-service company. Its dispatch team receives urgent repair requests through several channels, frequently with missing information. Leadership has asked whether AI should automatically assign technicians before the next seasonal demand increase.

The example tests a harder Product question than “Can we automate dispatch?” It asks which part of the workflow should change first, what evidence is still missing, and where human judgment must remain.

All organizations, people, evidence, numbers, systems, constraints, and decisions in this example were created solely for demonstration. They do not describe a real company, client, implementation, deployment, or measured result.

## End-to-End Artifacts

- [`scenario.md`](scenario.md): the ambiguous intake and fictional evidence packet
- [`stage-1-discovery-summary.md`](stage-1-discovery-summary.md): the Discovery Summary, including five decision-changing questions, their answers, and the human review gate
- [`stage-2-product-recommendation.md`](stage-2-product-recommendation.md): the Product plan, “What’s the VUED Risk?” analysis, prioritization, scope, and locked Product Owner decision
- [`stage-3-engineering-refinement-summary.md`](stage-3-engineering-refinement-summary.md): the canonical Engineering Refinement Package
- [`stage-3-engineering-refinement-workbook-map.md`](stage-3-engineering-refinement-workbook-map.md): the structured Engineering Refinement Workbook Map
- [`stage-4-engineering-readiness-review.md`](stage-4-engineering-readiness-review.md): the executive decision story
- [`approval-record.md`](approval-record.md): the separate human governance record

## Handoff Chain

| Stage | Primary Artifact | Human Gate | What Becomes Locked |
|---|---|---|---|
| Product Discovery | Discovery Summary | Approve, approve with notes, revise, defer, or reject | Problem framing, evidence, assumptions, gaps, risks, and decision-changing questions, not a solution |
| Product Recommendation | Approved Product Recommendation | Approve, approve with notes, return, or reject | Product intent, priority, scope, tradeoffs, and success definition |
| Engineering Planning | Canonical Engineering Refinement Package and Engineering Refinement Workbook Map | Confirm Product intent was preserved and both outputs are traceable | Engineering planning boundary, structured reference, and unresolved discovery |
| Executive Communication | Engineering Readiness Review | Product Owner gives final approval to the recommendation and decision request; leadership direction follows separately | Approved communication boundary, confidence language, and business decision request |

The approval record is intentionally separate from the readiness review. It preserves all four AAPOS human gates, including Product Owner Final Approval, while the subsequent leadership business decision remains separate from the framework gate sequence.
