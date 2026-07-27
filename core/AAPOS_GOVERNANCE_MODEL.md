# AAPOS Governance Model

AAPOS is AI-assisted and human-governed.

## Control Layer

Human judgment is the control layer. AI may assist with drafting, structuring, comparing, summarizing, and translating. AI must not approve scope, priority, readiness, stakeholder communication, or final decisions.

## Product Owner Authority

The Product Owner is accountable for:

- validating source information
- distinguishing facts from assumptions
- approving Product Intent
- choosing scope and tradeoffs
- confirming MVP boundaries
- accepting or rejecting recommendations
- protecting Product intent during Engineering planning
- approving executive communication

## Gate Model

| Gate | Human Review |
|---|---|
| Discovery Review | Confirms the problem is understood and decision-changing questions are useful. |
| Product Approval | Confirms Product Intent, priority, MVP, success measures, and tradeoffs. |
| Engineering Review | Confirms feasibility, dependencies, sequencing, and scope integrity. |
| Final Approval | Confirms the recommendation and stakeholder communication are ready. |

## AI Contribution Labeling

Artifacts should record:

```text
Drafted with AI assistance:
Human reviewed:
Approved by:
Approval date:
Open assumptions:
Open risks:
```

This prevents draft AI-assisted work from being mistaken for approved Product direction.

## Escalation

Unresolved high-risk questions, material dependency gaps, unclear scope boundaries, and conflicting stakeholder inputs must be escalated to the appropriate human owner before downstream commitment.
