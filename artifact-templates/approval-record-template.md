---
aapos_artifact:
  id: "artifact.approval_record"
  name: "Approval Record"
  version: "1.0.0"
  stage: "Cross-stage gates"
  owner: "Product Owner"
---

# Approval Record Template

## Artifact Metadata

```text
Initiative:
AAPOS version:
Drafted with AI assistance:
Human reviewed:
Record owner:
```

## Gate Outcomes

| Gate ID | Gate Name | Artifact Reviewed | Decision | Reviewer | Date | Notes |
|---|---|---|---|---|---|---|
| `gate.product-discovery.discovery-review` | Discovery Review | Discovery Summary |  |  |  |  |
| `gate.product-recommendation.product-approval` | Product Approval | Approved Product Recommendation |  |  |  |  |
| `gate.engineering-planning.engineering-review` | Engineering Review | Engineering Refinement Package and Workbook Map |  |  |  |  |
| `gate.executive-communication.final-approval` | Final Approval | Engineering Readiness Review |  |  |  |  |

Use only approved AAPOS decision values. A gate outcome records human judgment; it is not a lifecycle status.

## Gate Review Details

Complete one review detail block for every gate outcome. Use the stage criteria in the [`Human Gate Review Guide`](../docs/HUMAN_GATE_REVIEW_GUIDE.md).

### Gate Review Detail

```text
Gate ID:
Decision rationale:
Evidence reviewed:
-
Review criteria satisfied:
-
Conditions:
- None
Return reason:
- Not applicable
Remaining blockers:
- None
Next action permitted:
Decision boundary:
```

Copy this block for each reviewed gate. Conditions, return reasons, and blockers must be explicit; use `None` or `Not applicable` rather than leaving the fields ambiguous.

## Open Assumptions

- TBD

## Open Risks

- TBD

## Deferred Decisions

- TBD

## Final Notes

Record any approval notes that should travel with the recommendation.
