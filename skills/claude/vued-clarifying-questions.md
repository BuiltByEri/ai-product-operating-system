---
aapos_skill:
  name: "VUED Clarifying Questions"
  id: "vued-clarifying-questions"
  version: "1.0.0"
  specification_version: "1.0.0"
  compatible_aapos_versions: [">=1.0.0 <2.0.0"]
  skill_state: "Approved"
  automation_readiness: "assisted"
  capability: "product-discovery"
  lifecycle_stage: { stage_id: "product-discovery", stage_name: "Product Discovery", order: 1 }
  primary_owner: "Product Owner"
  review_partners: ["Stakeholders"]
  description: "Turn an ambiguous product scenario into a structured discovery summary with decision-changing clarifying questions."
  depends_on_skills: []
  consumes:
    - { artifact_id: "input.product_scenario", required: true }
  produces:
    - { artifact_id: "artifact.discovery_summary", required: true }
  requires_human_gate: true
  human_gate:
    gate_id: "gate.product-discovery.discovery-review"
    gate_name: "Discovery Review"
    approver_role: "Product Owner"
    blocks_next_stage: true
  permitted_status_values: ["Not Started", "In Progress", "Ready for Review", "Blocked", "Completed"]
  permitted_decision_values: ["Approved", "Approved With Notes", "Rejected", "Needs Revision", "Deferred", "Human Review Required", "Not Applicable"]
  next_skill: "vued-product-plan"
  extensions: {}
---

# VUED Clarifying Questions

## 1. Purpose

Support Product Discovery by turning an ambiguous product scenario into a problem breakdown, visible assumptions, initial risks, information gaps, and no more than five decision-changing clarifying questions.

## 2. When to Use

Use this skill first when a Product Owner has a business problem, stakeholder request, production concern, operational pain point, compliance or fraud risk, revenue pressure, technical debt concern, or product opportunity that is not yet ready for recommendation.

## 3. Inputs

Inputs include the product scenario, affected users or teams, known constraints, stakeholder pressure, desired business outcome, available evidence, and any known risks.

## 4. Required Reading

Read [`core/AAPOS_CORE.md`](../../core/AAPOS_CORE.md), [`docs/VUED_RISK_FRAMEWORK.md`](../../docs/VUED_RISK_FRAMEWORK.md), and [`docs/HUMAN_GOVERNANCE.md`](../../docs/HUMAN_GOVERNANCE.md).

## 5. Execution Steps

1. Restate the product problem in plain language.
2. Identify known facts, assumptions, unknowns, and risk signals.
3. Apply early VUED Risk thinking without making a final priority recommendation.
4. Generate no more than five clarifying questions.
5. For each question, explain why it matters and what decision it could change.
6. Identify the top three questions if time or stakeholder access is limited.
7. Produce a Discovery Summary for Product Owner review.

## 6. Human Gate

The Product Owner applies the Discovery Review criteria in the [`Human Gate Review Guide`](../../docs/HUMAN_GATE_REVIEW_GUIDE.md).

### Human Review Checklist

- Confirm the problem is separated from the proposed solution.
- Distinguish source-backed facts, stakeholder claims, assumptions, inferences, unknowns, dependencies, and risks.
- Verify initial Value, Urgency, Effort, Dependencies, and Risk signals use defined rating scales and explain uncertainty.
- Retain no more than five questions, each capable of changing priority, scope, MVP, sequencing, feasibility, or risk response.
- Identify the three highest-leverage questions when stakeholder access or time is limited.
- Confirm information gaps and high-risk unknowns have an owner or escalation path.
- Verify the artifact does not recommend final scope or imply downstream commitment.

### Return or Block When

Return or block the artifact when the problem remains solution-led, facts and assumptions are mixed, questions are not decision-changing, material evidence or risks are missing, or a high-risk unknown lacks an owner.

### Decision Boundary

Approval permits Product Recommendation using the reviewed evidence and explicit assumptions. Approval does not permit final priority, MVP commitment, Engineering planning, estimates, budget, or implementation.

### Record

Record the evidence reviewed, questions retained or removed, stakeholder answers required, accepted assumptions, open risks, conditions, remaining blockers, and next action permitted.

## 7. Outputs

Produce `artifact.discovery_summary` with:

- scenario summary
- problem breakdown
- known facts
- assumptions
- decision-changing questions
- initial VUED Risk signals
- information gaps
- human review metadata

## 8. Status Values

Use only approved AAPOS status values from [`core/AAPOS_STATUS_MODEL.md`](../../core/AAPOS_STATUS_MODEL.md).

## 9. Decision Values

Use only approved AAPOS decision values from [`core/AAPOS_DECISION_MODEL.md`](../../core/AAPOS_DECISION_MODEL.md).

## 10. Guardrails

- Do not recommend final scope.
- Do not assign final priority.
- Do not invent stakeholder answers.
- Do not ask questions that would not change priority, scope, MVP, sequencing, delivery approach, or risk response.
- Do not make AI the decision owner.

## 11. Exit Criteria

Exit when the Discovery Summary is complete, the Product Owner has reviewed the questions, and unresolved blockers are documented.

## 12. Version History

| Version | State | Notes |
|---|---|---|
| 1.0.0 | Approved | Initial public AAPOS release. |
