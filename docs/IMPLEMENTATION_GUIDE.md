# Implementation Guide

Use this guide to apply AAPOS to a product scenario.

## 1. Start With a Product Scenario

Capture the business problem, affected users or teams, known constraints, stakeholder pressure, and why the work matters.

## 2. Run Product Discovery

Use [`skills/claude/vued-clarifying-questions.md`](../skills/claude/vued-clarifying-questions.md) to identify assumptions, risks, and decision-changing questions. Limit questions to those that could change priority, scope, MVP, sequencing, delivery approach, or risk response.

## 3. Complete Discovery Review

The Product Owner reviews the discovery output, removes low-value questions, and decides which questions must be answered before Product Recommendation.

## 4. Create the Product Recommendation

Use [`skills/claude/vued-product-plan.md`](../skills/claude/vued-product-plan.md) to apply VUED Risk, recommend a sequence, distinguish MVP from full solution, and record tradeoffs.

## 5. Complete Product Approval

The Product Owner approves the Product Intent and scope before Engineering planning begins.

## 6. Create Engineering Refinement Outputs

Use [`skills/codex/engineering-refinement-planner.md`](../skills/codex/engineering-refinement-planner.md) to translate the approved Product Recommendation into epics, stories, discovery items, dependencies, risks, deferred work, and readiness.

## 7. Complete Engineering Review

Engineering validates feasibility and risk. Product confirms that Engineering planning did not change the approved Product Intent.

## 8. Create Executive Communication

Use [`skills/claude/engineering-readiness-review.md`](../skills/claude/engineering-readiness-review.md) to translate Product and Engineering work into a decision-ready story for a mixed audience.

## 9. Complete Final Approval

The Product Owner approves the final communication and records the decision.

## Guardrails

- Do not skip gates.
- Do not invent estimates, commitments, architecture, or measured outcomes.
- Do not let Engineering planning expand MVP scope without Product approval.
- Do not present draft AI-assisted work as approved direction.
- Do not include non-public or client-specific material in public examples.
