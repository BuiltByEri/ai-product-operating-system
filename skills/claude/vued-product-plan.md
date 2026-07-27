---
aapos_skill:
  name: "VUED Product Plan"
  id: "vued-product-plan"
  version: "1.0.0"
  specification_version: "1.0.0"
  compatible_aapos_versions: [">=1.0.0 <2.0.0"]
  skill_state: "Approved"
  automation_readiness: "assisted"
  capability: "product-recommendation"
  lifecycle_stage: { stage_id: "product-recommendation", stage_name: "Product Recommendation", order: 2 }
  primary_owner: "Product Owner"
  review_partners: ["Stakeholders"]
  description: "Apply VUED + Risk to discovery inputs and produce a Product-owned recommendation for human approval."
  depends_on_skills: ["vued-clarifying-questions"]
  consumes:
    - { artifact_id: "artifact.discovery_summary", required: true }
    - { artifact_id: "input.stakeholder_responses", required: false }
  produces:
    - { artifact_id: "artifact.product_recommendation", required: true }
    - { artifact_id: "artifact.approval_record", required: true }
  requires_human_gate: true
  human_gate:
    gate_id: "gate.product-recommendation.product-approval"
    gate_name: "Product Approval"
    approver_role: "Product Owner"
    blocks_next_stage: true
  permitted_status_values: ["Not Started", "In Progress", "Ready for Review", "Blocked", "Completed"]
  permitted_decision_values: ["Approved", "Approved With Notes", "Rejected", "Needs Revision", "Deferred", "Human Review Required", "Not Applicable"]
  next_skill: "engineering-refinement-planner"
  extensions: {}
---

# VUED Product Plan

## 1. Purpose

Support Product Recommendation by applying VUED + Risk to discovery inputs and producing a Product-owned recommendation that is ready for human approval.

## 2. When to Use

Use this skill after Product Discovery when the Product Owner has the original scenario, the Discovery Summary, and any stakeholder responses that materially affect priority, scope, MVP, sequencing, or risk response.

## 3. Inputs

Inputs include the Discovery Summary, stakeholder responses where available, Product Owner constraints, known dependencies, business goals, risks, and any required boundaries.

## 4. Required Reading

Read [`core/AAPOS_CORE.md`](../../core/AAPOS_CORE.md), [`docs/VUED_RISK_FRAMEWORK.md`](../../docs/VUED_RISK_FRAMEWORK.md), [`docs/ARTIFACT_MODEL.md`](../../docs/ARTIFACT_MODEL.md), and [`artifact-templates/product-recommendation-template.md`](../../artifact-templates/product-recommendation-template.md).

## 5. Execution Steps

1. Restate the use case and Product problem.
2. Capture stakeholder answers and unresolved assumptions.
3. Apply VUED + Risk with rationale.
4. Separate immediate mitigation, Engineering discovery, MVP, and full solution.
5. Recommend Product Intent and delivery sequence.
6. Define in-scope and out-of-scope boundaries.
7. Record success measures without inventing baselines or outcomes.
8. Identify tradeoffs, risks, dependencies, and deferred work.
9. Produce the Product Recommendation for human approval.

## 6. Human Gate

The Product Owner approves Product Intent, priority, MVP scope, out-of-scope boundaries, assumptions, success measures, and accepted tradeoffs before Engineering planning begins.

## 7. Outputs

Produce `artifact.product_recommendation` and update `artifact.approval_record` with:

- Product Intent
- VUED + Risk analysis
- MVP recommendation
- tradeoffs
- success measures
- dependencies
- deferred work
- approval decision

## 8. Status Values

Use only approved AAPOS status values from [`core/AAPOS_STATUS_MODEL.md`](../../core/AAPOS_STATUS_MODEL.md).

## 9. Decision Values

Use only approved AAPOS decision values from [`core/AAPOS_DECISION_MODEL.md`](../../core/AAPOS_DECISION_MODEL.md).

## 10. Guardrails

- Do not prioritize the loudest stakeholder by default.
- Do not treat AI output as final Product judgment.
- Do not invent estimates, delivery dates, regulations, or stakeholder commitments.
- Do not collapse mitigation, discovery, MVP, and full solution into one recommendation.
- Do not advance to Engineering Planning without Product Owner approval.

## 11. Exit Criteria

Exit when the Product Recommendation is complete, the Product Owner approval gate is recorded, and Product Intent is locked for Engineering Planning.

## 12. Version History

| Version | State | Notes |
|---|---|---|
| 1.0.0 | Approved | Initial public AAPOS release. |
