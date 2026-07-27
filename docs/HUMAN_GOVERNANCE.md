# Human Governance

## Human Judgment Is the Control Layer

AI may accelerate analysis, drafting, organization, and translation. It does not own Product decisions.

No AI-generated output automatically becomes:

- a Product decision
- a requirement
- a backlog item
- an Engineering commitment
- a stakeholder message
- an executive recommendation

Every stage ends with a human review or approval gate.

## Human Review Standard

At every gate, the accountable human must:

1. **Inspect** the artifact, evidence, assumptions, risks, boundaries, and traceability.
2. **Challenge** unsupported claims, hidden uncertainty, scope drift, and AI-assisted inference.
3. **Decide** using an approved AAPOS decision value and explicit conditions.
4. **Record** the evidence reviewed, rationale, blockers, and next action permitted.

The reviewer is not approving the quality of the writing. The reviewer is determining whether the evidence justifies the next commitment.

See the [`Human Gate Review Guide`](HUMAN_GATE_REVIEW_GUIDE.md) for the inspection criteria, challenge questions, return conditions, and decision boundary at each stage.

## Review Gates

### Discovery Review

The Product Owner confirms:

- the problem is understood
- assumptions are visible
- questions are decision-changing
- risks and information gaps are explicit
- initial VUED Risk signals use defined rating scales
- blocking gaps and high-risk unknowns have owners
- approval is limited to Product Recommendation

### Product Approval

The Product Owner approves:

- Product Intent
- priority
- MVP scope
- out-of-scope boundaries
- tradeoffs
- success measures
- evidence and decision rationale
- human-control and return-decision boundaries
- the absence of invented Engineering or delivery commitments

### Engineering Validation

Engineering validates:

- feasibility
- dependencies
- technical assumptions
- sequencing
- platform and delivery risk
- business rules, failure behavior, and recovery
- open Engineering questions and discovery blockers

Product validates that Engineering planning has not changed Product intent, expanded MVP scope, introduced deferred work, or created conflicts between the package and Workbook Map.

### Final Approval

The Product Owner reviews and approves:

- the recommendation
- stakeholder messaging
- confidence statements
- decision request
- final communication
- honest confidence and uncertainty language
- separation between Product Owner approval and the audience's later business decision
- absence of confidential or unsupported claims

## Human Authorship and Accountability

AI contributes analysis and drafting. The human Product Owner remains the author, decision-maker, and accountable owner of the final work.

The Product Owner is responsible for:

- validating source information
- separating facts from assumptions
- accepting, editing, or rejecting AI-assisted recommendations
- resolving stakeholder conflict
- making priority and scope decisions
- approving Engineering readiness
- communicating the final recommendation
- remaining accountable for the outcome

## Responsible Use Requirements

- Label assumptions and unknowns.
- Do not present AI-generated inferences as stakeholder facts.
- Do not invent Engineering estimates, architecture, regulations, or commitments.
- Preserve traceability between Product intent and Engineering work.
- Escalate unresolved high-risk questions to the appropriate human owner.
- Require human approval before moving to the next stage.
- State what each approval permits and does not permit.
- Return or block an artifact when the required evidence is missing.

## Recommended Artifact Metadata

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

This metadata makes review status visible and prevents draft AI-assisted output from being mistaken for approved direction.
