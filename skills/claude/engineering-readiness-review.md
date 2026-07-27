---
aapos_skill:
  name: "Engineering Readiness Review"
  id: "engineering-readiness-review"
  version: "1.0.0"
  specification_version: "1.0.0"
  compatible_aapos_versions: [">=1.0.0 <2.0.0"]
  skill_state: "Approved"
  automation_readiness: "assisted"
  capability: "executive-communication"
  lifecycle_stage: { stage_id: "executive-communication", stage_name: "Executive Communication", order: 4 }
  primary_owner: "Product Owner"
  review_partners: ["Engineering", "Leadership"]
  description: "Translate approved Product and Engineering planning artifacts into an executive-ready decision artifact."
  depends_on_skills: ["engineering-refinement-planner"]
  consumes:
    - { artifact_id: "artifact.product_recommendation", required: true }
    - { artifact_id: "artifact.engineering_refinement_package", required: true }
    - { artifact_id: "artifact.engineering_refinement_workbook_map", required: true }
    - { artifact_id: "artifact.approval_record", required: true }
  produces:
    - { artifact_id: "artifact.engineering_readiness_review", required: true }
    - { artifact_id: "artifact.approval_record", required: true }
  requires_human_gate: true
  human_gate:
    gate_id: "gate.executive-communication.final-approval"
    gate_name: "Final Approval"
    approver_role: "Product Owner"
    blocks_next_stage: true
  permitted_status_values: ["Not Started", "In Progress", "Ready for Review", "Blocked", "Completed"]
  permitted_decision_values: ["Approved", "Approved With Notes", "Rejected", "Needs Revision", "Deferred", "Human Review Required", "Not Applicable"]
  next_skill: null
  extensions: {}
---

# Engineering Readiness Review

## 1. Purpose

Translate the Approved Product Recommendation, Engineering Refinement Package, and Engineering Refinement Workbook Map into a business-audience decision artifact.

## 2. When to Use

Use this skill after Engineering Planning when Product and Engineering have reviewed the refinement outputs and a mixed audience needs a clear recommendation, risk framing, readiness summary, and decision request.

## 3. Inputs

Inputs include the Approved Product Recommendation, Engineering Refinement Package, Engineering Refinement Workbook Map, approval record, dependencies, risks, open Engineering questions, deferred work, and Product Owner confidence statement.

## 4. Required Reading

Read [`core/AAPOS_CORE.md`](../../core/AAPOS_CORE.md), [`docs/ARTIFACT_MODEL.md`](../../docs/ARTIFACT_MODEL.md), and [`artifact-templates/engineering-readiness-review-template.md`](../../artifact-templates/engineering-readiness-review-template.md).

## 5. Execution Steps

1. Identify the audience and decision needed.
2. Translate Product Intent into plain business language.
3. Summarize Engineering readiness without exposing internal planning identifiers.
4. Explain VUED + Risk, dependencies, tradeoffs, deferred work, and open questions.
5. State confidence honestly.
6. Provide stakeholder communication guidance.
7. Create the final decision artifact.
8. Prepare the approval record for Product Owner final approval.

## 6. Human Gate

The Product Owner reviews the final artifact, verifies that Engineering detail has been translated into plain language, confirms the recommendation, and approves the final communication.

## 7. Outputs

Produce `artifact.engineering_readiness_review` and update `artifact.approval_record` with:

- executive summary
- problem and Product Intent
- VUED + Risk summary
- Engineering readiness summary
- dependencies and open questions
- risks and tradeoffs
- deferred work
- decision requested
- final approval metadata

## 8. Status Values

Use only approved AAPOS status values from [`core/AAPOS_STATUS_MODEL.md`](../../core/AAPOS_STATUS_MODEL.md).

## 9. Decision Values

Use only approved AAPOS decision values from [`core/AAPOS_DECISION_MODEL.md`](../../core/AAPOS_DECISION_MODEL.md).

## 10. Guardrails

- Translate. Do not transcribe.
- Do not reproduce detailed acceptance criteria or internal Engineering identifiers.
- Do not reinterpret source artifacts.
- Do not redesign Product scope.
- Do not invent epics, stories, outcomes, or commitments.
- Do not present AI as acting alone.

## 11. Exit Criteria

Exit when the Engineering Readiness Review is complete, uncertainty is represented honestly, and the Product Owner final approval gate is recorded.

## 12. Version History

| Version | State | Notes |
|---|---|---|
| 1.0.0 | Approved | Initial public AAPOS release. |
