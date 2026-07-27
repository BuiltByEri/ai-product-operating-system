# Stage 1: Discovery Summary

This artifact is fictional and demonstrates AAPOS Product Discovery.

## Scenario Summary

Northstar has a vendor onboarding flow with rising abandonment, inconsistent compliance review, manual Operations follow-up, and pressure from Sales to shorten activation time.

## Problem Breakdown

The problem is not only onboarding speed. It includes incomplete vendor submissions, unclear review routing, manual operational recovery, and tension between fast activation and risk control.

## Known Facts

- Vendors submit onboarding information through fragmented intake steps.
- Operations manually follows up when vendor data is missing.
- Compliance review is not consistently triggered by the same signals.
- Sales wants shorter activation time.
- Engineering estimates and architecture are not available.

## Assumptions

- Abandonment may be caused by unclear steps, repeated data entry, missing status visibility, or slow review.
- Manual Operations work may be driven by avoidable data-quality issues.
- Some compliance checks can be routed more consistently without removing human review.
- Faster onboarding may increase risk if high-risk cases are not identified early.

## Initial VUED + Risk Signals

| Lens | Initial Signal | Notes |
|---|---|---|
| Value | High | The problem affects vendor activation, Operations capacity, Sales expectations, and risk control. |
| Urgency | Near-Term | Stakeholder pressure is rising, but no hard launch date is supplied. |
| Effort | Unknown | Engineering discovery is required. |
| Dependencies | High | Product, Engineering, Operations, Risk, Sales, and data flows are involved. |
| Risk | High | Faster activation without controlled review could increase compliance or operational exposure. |

## Decision-Changing Clarifying Questions

| Question | Why It Matters | Decision Influenced |
|---|---|---|
| Where do vendors abandon onboarding most often? | Identifies whether the MVP should focus on intake clarity, data reuse, status visibility, or review routing. | MVP scope |
| Which vendor attributes require human compliance review? | Determines whether the flow can route low-risk cases differently while preserving human oversight for higher-risk cases. | Risk response and controls |
| What manual Operations tasks are most repetitive? | Helps separate workflow automation from full process redesign. | Delivery sequence |
| Which Sales commitments are time-sensitive? | Clarifies urgency without letting stakeholder pressure override risk. | Priority and sequencing |
| What systems own vendor profile, document, and review data? | Exposes integration and data dependencies. | Engineering discovery |

## Top Three Questions

1. Where do vendors abandon onboarding most often?
2. Which vendor attributes require human compliance review?
3. What systems own vendor profile, document, and review data?

## Information Gaps

- Actual abandonment points are unknown.
- Compliance routing criteria are not fully documented.
- System ownership and data contracts need Engineering discovery.
- No delivery estimate is available.

## Human Review Metadata

```text
Drafted with AI assistance: Yes
Human reviewed: Yes
Reviewed by: Fictional Product Owner
Review date: 2026-07-27
Open assumptions: Abandonment cause, review routing rules, data ownership
Open risks: Risk-control drift if speed is prioritized without gating
```
