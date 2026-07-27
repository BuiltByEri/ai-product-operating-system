---
aapos_skill:
  name: "Engineering Refinement Planner"
  id: "engineering-refinement-planner"
  version: "1.0.0"
  specification_version: "1.0.0"
  compatible_aapos_versions: [">=1.0.0 <2.0.0"]
  skill_state: "Approved"
  automation_readiness: "assisted"
  capability: "engineering-planning"
  lifecycle_stage: { stage_id: "engineering-planning", stage_name: "Engineering Planning", order: 3 }
  primary_owner: "Product Owner"
  review_partners: ["Engineering"]
  description: "Translate an approved Product Recommendation into an Engineering Refinement Package and Workbook Map without changing Product scope."
  depends_on_skills: ["vued-product-plan"]
  consumes:
    - { artifact_id: "artifact.product_recommendation", required: true }
    - { artifact_id: "artifact.approval_record", required: true }
  produces:
    - { artifact_id: "artifact.engineering_refinement_package", required: true }
    - { artifact_id: "artifact.engineering_refinement_workbook_map", required: true }
  requires_human_gate: true
  human_gate:
    gate_id: "gate.engineering-planning.engineering-review"
    gate_name: "Engineering Review"
    approver_role: "Engineering and Product Owner"
    blocks_next_stage: true
  permitted_status_values: ["Not Started", "In Progress", "Ready for Review", "Blocked", "Completed"]
  permitted_decision_values: ["Approved", "Approved With Notes", "Rejected", "Needs Revision", "Deferred", "Human Review Required", "Not Applicable"]
  next_skill: "engineering-readiness-review"
  extensions: {}
---

# Engineering Refinement Planner

## 1. Purpose

Convert a locked, approved Product Recommendation into Engineering planning artifacts without changing scope, reprioritizing work, or inventing Product requirements.

## 2. When to Use

Use this skill after Product Recommendation approval and before Executive Communication. Do not use it for Product Discovery or Product reprioritization.

## 3. Inputs

Inputs include the Approved Product Recommendation, approval record, Product Intent, MVP scope, out-of-scope boundaries, assumptions, success measures, known constraints, prioritization rationale, and VUED Risk analysis.

## 4. Required Reading

Read [`core/AAPOS_CORE.md`](../../core/AAPOS_CORE.md), [`docs/ARTIFACT_MODEL.md`](../../docs/ARTIFACT_MODEL.md), [`artifact-templates/engineering-refinement-package-template.md`](../../artifact-templates/engineering-refinement-package-template.md), and [`artifact-templates/engineering-refinement-workbook-map.md`](../../artifact-templates/engineering-refinement-workbook-map.md).

## 5. Execution Steps

1. Confirm the locked Product boundary.
2. Identify Product assumptions and Engineering assumptions separately.
3. Translate Product Intent into epics, stories, Engineering discovery, dependencies, risks, deferred work, and delivery strategy.
4. Use acceptance intent rather than detailed acceptance criteria unless exact criteria are supplied.
5. Preserve traceability between Product Intent and Engineering planning.
6. Create the Engineering Refinement Package.
7. Create the Engineering Refinement Workbook Map with the same work represented in structured form.
8. Validate scope integrity before review.

## 6. Human Gate

Engineering validates feasibility, dependencies, sequencing, and technical risk. Product confirms that Engineering planning has not changed approved Product Intent or expanded MVP scope.

## 7. Outputs

Produce:

- `artifact.engineering_refinement_package`
- `artifact.engineering_refinement_workbook_map`

The two outputs must contain the same work at different levels of structure.

## 8. Status Values

Use only approved AAPOS status values from [`core/AAPOS_STATUS_MODEL.md`](../../core/AAPOS_STATUS_MODEL.md).

## 9. Decision Values

Use only approved AAPOS decision values from [`core/AAPOS_DECISION_MODEL.md`](../../core/AAPOS_DECISION_MODEL.md).

## 10. Guardrails

- Preserve the approved Product Recommendation.
- Do not redesign Product scope.
- Do not expand the MVP.
- Do not reprioritize Product work.
- Do not estimate effort, velocity, story points, or dates unless supplied.
- Do not design architecture without sufficient Engineering input.
- Do not hide uncertainty.

## 11. Exit Criteria

Exit when the Engineering Refinement Package and Workbook Map are traceable to the approved Product Recommendation and the Engineering review gate is ready or completed.

## 12. Version History

| Version | State | Notes |
|---|---|---|
| 1.0.0 | Approved | Initial public AAPOS release. |
