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

## Human Gate Review Standard

At every gate, the accountable human must inspect the evidence, challenge the reasoning, decide within their authority, and record the resulting boundary.

| Gate | Governing Review Question |
|---|---|
| Discovery Review | Is the problem understood well enough to seek the right evidence or proceed with explicit assumptions? |
| Product Approval | Does the evidence justify the priority, Product Intent, MVP boundary, tradeoffs, and success definition? |
| Engineering Review | Is the Engineering plan feasible, traceable to approved Product Intent, explicit about failure and uncertainty, and free of scope drift? |
| Final Approval | Does the communication accurately represent the approved work, uncertainty, and decision request without implying unauthorized commitment? |

Every gate must state what approval permits, what it does not permit, why an artifact was returned or blocked, and which evidence supports the human decision.

Detailed inspection criteria and return conditions are defined in [`docs/HUMAN_GATE_REVIEW_GUIDE.md`](../docs/HUMAN_GATE_REVIEW_GUIDE.md).

## AI Contribution Labeling

Artifacts should record:

```text
Drafted with AI assistance:
Human reviewed:
Approved by:
Approval date:
Decision rationale:
Evidence reviewed:
Conditions:
Return reason:
Remaining blockers:
Next action permitted:
Open assumptions:
Open risks:
```

This prevents draft AI-assisted work from being mistaken for approved Product direction.

## Escalation

Unresolved high-risk questions, material dependency gaps, unclear scope boundaries, and conflicting stakeholder inputs must be escalated to the appropriate human owner before downstream commitment.
