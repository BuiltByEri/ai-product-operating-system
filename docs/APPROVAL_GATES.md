# Approval Gates

AAPOS requires human gates between lifecycle stages.

A human gate is a decision control, not a proofreading checkpoint. The accountable reviewer must inspect the evidence, challenge the reasoning, make a bounded decision, and record what the decision permits. Detailed criteria are defined in the [`Human Gate Review Guide`](HUMAN_GATE_REVIEW_GUIDE.md).

| Gate ID | Name | Timing | Required Human Authority | Blocks Next Stage |
|---|---|---|---|---|
| `gate.product-discovery.discovery-review` | Discovery Review | After Product Discovery | Product Owner | Yes |
| `gate.product-recommendation.product-approval` | Product Approval | After Product Recommendation | Product Owner | Yes |
| `gate.engineering-planning.engineering-review` | Engineering Review | After Engineering Planning | Engineering and Product Owner | Yes |
| `gate.executive-communication.final-approval` | Final Approval | After Executive Communication | Product Owner | Yes |

## Discovery Review

The Product Owner confirms that the problem is separated from the proposed solution, facts and assumptions are distinguishable, initial VUED Risk signals are valid, questions are decision-changing, and material information gaps have owners.

Approval permits Product Recommendation. It does not approve priority, MVP scope, Engineering planning, or implementation.

## Product Approval

The Product Owner confirms that Product Intent and priority are evidence-backed; mitigation, discovery, MVP, and future scope are separated; tradeoffs and exclusions are explicit; and success measures do not invent outcomes or commitments.

Approval locks Product direction for Engineering translation. It does not approve estimates, architecture, capacity, dates, or implementation.

## Engineering Review

Engineering validates feasibility, assumptions, dependencies, business rules, failure behavior, sequencing, discovery needs, and technical risk. Product confirms scope integrity, upstream traceability, and agreement between the package and Workbook Map.

Approval permits Executive Communication and any explicitly approved bounded discovery. It does not authorize implementation or expand Product scope.

## Final Approval

The Product Owner confirms that the final communication matches approved upstream artifacts, identifies its audience and decision request, represents confidence and uncertainty honestly, and does not confuse final approval with a later leadership business decision.

Approval permits the reviewed communication to be shared. It does not record the audience's decision or authorize implementation.

## Approval Evidence

Every approval should record:

- artifact reviewed
- decision value
- reviewer name or role
- approval date
- decision rationale
- evidence reviewed
- review criteria satisfied
- approval conditions
- return reason when revision is required
- remaining blockers
- next action permitted
- notes
- open assumptions
- open risks

Use the [`Approval Record Template`](../artifact-templates/approval-record-template.md) to preserve this evidence consistently.
