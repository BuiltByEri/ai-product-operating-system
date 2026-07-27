# Stage 2: Product Recommendation

This artifact is fictional and demonstrates AAPOS Product Recommendation. It uses the approved Stage 1 evidence without treating assumptions as facts.

## Use Case Summary

Wayfinder was asked to automate technician dispatch with AI. Discovery showed that the proposed solution combines three problems: incomplete service requests, fragmented assignment evidence, and poor status visibility. The strongest current evidence supports improving request completeness and giving dispatchers a governed recommendation workspace. It does not support autonomous assignment.

The Product decision is whether to pursue a bounded, human-approved workflow and what must be proven before any implementation commitment.

## Primary Product Intent

Help dispatchers make faster, better-supported assignment decisions by collecting the required request information up front, presenting eligible technician recommendations with visible evidence and data-freshness warnings, and returning unresolved work to an accountable exception queue. A dispatcher or supervisor remains responsible for every assignment.

## What’s the VUED Risk?

The question is applied to each candidate work item rather than collapsing the initiative into one score.

| Candidate Work Item | Value | Urgency | Effort | Dependencies | Risk | Priority | Product Reasoning |
|---|---|---|---|---|---|---|---|
| Guided request intake and completeness checks | High | Near-Term | Medium | Medium | Low-Medium | 1 | Directly addresses the best-supported delay source and improves every later dispatch path. |
| Dispatcher recommendation workspace with human approval | High | Near-Term | High/Unknown | High | Medium-High | 2 | Could reduce fragmented decision work, but depends on data freshness, explainability, and operating-policy validation. |
| Exception queue and accountable fallback | High | Near-Term | Medium | Medium | Medium | 1 | Required to prevent unresolved work from disappearing and to make a controlled rollout possible. |
| Customer and account-team status visibility | Medium-High | Near-Term | Low-Medium | Medium | Low | 2 | Reduces status chasing and can deliver value without changing assignment ownership. |
| Autonomous technician assignment | Medium/Unproven | Later | High/Unknown | High | High | Deferred | Current evidence does not justify removing human approval, and critical data is not reliably current. |
| Dispatch analytics and optimization suite | Medium | Later | Medium-High | High | Low-Medium | Deferred | Useful after event definitions and baselines exist; premature in the MVP. |

### Value

**What outcome makes this worth pursuing?**

Fewer requests should reach dispatch without required information, dispatchers should see the evidence behind an eligible recommendation, unresolved work should remain visible, and customers should receive accurate status. These are proposed success outcomes, not claimed results.

### Urgency

**Why now?**

The fictional seasonal plan requires leadership direction in four weeks. That justifies a bounded Product and Engineering decision, not a production deadline.

### Effort

**What will it take?**

Guided intake appears bounded. Recommendation support remains unknown because certification freshness, eligibility rules, audit events, and integration behavior need Engineering discovery.

### Dependencies

**What must be true first?**

Wayfinder must define required request fields, confirm certification-data behavior, approve assignment eligibility rules, preserve the scheduling application as the system of record, and establish a visible exception path.

### Risk

**What could weaken the decision or outcome?**

The largest risk of acting is presenting a recommendation as safe when the evidence is stale or incomplete. The largest risk of not acting is continued clarification work, fragmented decisions, and poor status visibility. The recommended path reduces both by improving intake first and keeping humans accountable.

## Assumptions and Blind Spots

- The reviewed sample is useful for direction but is not a production baseline.
- The relationship between request completeness and assignment time has not been measured.
- Dispatcher trust in recommendation explanations is unknown.
- Certification freshness may require a process change, integration change, or both.
- Direct customer research on status visibility has not been completed.
- Delivery capacity has not been reserved.

## Decision-Changing Questions: Status

All five Stage 1 questions received sufficient answers to make a bounded Product recommendation. They did not resolve implementation feasibility.

| Question Area | Status | Remaining Work |
|---|---|---|
| Primary delay point | Answered for direction | Establish production baseline before outcome commitment. |
| Human approval boundary | Answered | Translate policy into testable eligibility and approval rules. |
| Data reliability | Partially answered | Determine whether certification freshness can support recommendations. |
| Failure and fallback | Answered at Product level | Engineer queue, ownership, retry, and audit behavior. |
| Deadline meaning | Answered | Communicate a four-week direction, not a delivery promise. |

## Revised Prioritization

| Priority | Work Item | Why Now | Tradeoff | Dependency | Confidence |
|---|---|---|---|---|---|
| 1 | Guided intake and completeness checks | Addresses the clearest evidenced source of avoidable delay. | Does not directly shorten the dispatcher’s decision step. | Required-field ownership and portal feasibility. | High |
| 1 | Exception queue and accountable fallback | Makes incomplete, rejected, and unavailable recommendations safe and visible. | Adds workflow work before recommendation automation. | Operations ownership and status model. | High |
| 2 | Governed dispatcher recommendation workspace | Supports the requested decision problem while preserving human accountability. | Stops short of autonomous assignment. | Certification freshness, eligibility rules, explanations, auditability. | Medium |
| 2 | External status visibility | Reduces status chasing without changing assignment ownership. | May expose only part of the end-to-end delay. | Safe status taxonomy and portal integration. | Medium-High |
| Deferred | Autonomous assignment | Current evidence and data quality do not support it. | Leadership does not receive the originally requested automation scope. | Reliable decision data, validated policy, demonstrated recommendation performance, separate Product approval. | Low |

## Recommended Delivery Sequence

1. **Immediate operating mitigation:** standardize the required request checklist and publish a safe external status taxonomy.
2. **Engineering discovery:** validate intake integration, certification freshness, recommendation eligibility, explanation needs, audit events, exception ownership, and scheduling-system boundaries.
3. **Conditional MVP:** guided intake, completeness validation, dispatcher recommendation workspace, required human approval, exception queue, and safe status visibility.
4. **Controlled learning period:** evaluate recommendation acceptance, overrides, exception reasons, data freshness failures, and operational usability against agreed baselines.
5. **Future decision:** consider broader recommendation coverage or automation only through a new Product approval gate.

## MVP Scope

- One guided intake path for the selected standard service categories.
- Required-field and completeness validation before recommendation eligibility.
- A dispatcher workspace showing eligible technician recommendations and the evidence used.
- Visible certification-data timestamp or freshness warning.
- Dispatcher approval for standard assignments.
- Supervisor approval for safety-sensitive and after-hours assignments.
- Exception reasons and a named manual queue for incomplete, conflicting, rejected, or unavailable recommendations.
- Audit events for recommendation, review, override, assignment, and exception outcomes.
- Customer-safe request status without internal safety or employee details.

## Explicitly Out of Scope

- Autonomous or silent technician assignment.
- Changes to the scheduling application’s system-of-record ownership.
- Recommendations based on unverified technician location.
- Optimization for travel time.
- Workforce performance scoring.
- A configurable rules administration product.
- A full dispatch analytics suite.
- Commitments to production dates or measured outcomes.

## Engineering Readiness

**Not ready for full implementation refinement.**

Guided intake, completeness validation, exception visibility, and status taxonomy are closest to refinement. The recommendation workspace requires bounded Engineering discovery before stories can be treated as build-ready. Autonomous assignment is not approved for refinement.

## Tradeoffs

- Human approval remains in the workflow, so the recommendation does not maximize automation.
- Intake improvements are prioritized even though leadership initially asked for assignment automation.
- The MVP supports only selected standard service categories, limiting early coverage.
- Data-freshness warnings may reduce recommendation availability, but they prevent false confidence.
- External status improves transparency without promising faster completion.
- Delivery scope remains conditional until Engineering verifies dependencies.

## Proposed Success Measures

Baselines must be established before targets are approved.

- Percentage of requests reaching dispatch with all required information.
- Number and reason distribution of clarification contacts.
- Time from complete request to human-approved assignment.
- Percentage of recommendations accepted, overridden, rejected, or unavailable.
- Frequency of stale-data warnings and certification conflicts.
- Number of requests without a visible owner or queue.
- Customer and account-team status inquiries.
- Safety-policy exceptions or control failures, with a target of zero once defined.

## Stakeholder Communication

- **Leadership:** recommend a governed dispatch-support MVP, not autonomous dispatch. Request authorization for bounded discovery and conditional refinement.
- **Operations:** the first release targets incomplete requests, fragmented decision evidence, and invisible exceptions. Dispatcher accountability remains.
- **Safety:** supervisor approval and certification evidence are hard gates. No recommendation may override policy.
- **Engineering:** Product intent and exclusions are locked; feasibility is needed for data freshness, integration, audit, exception handling, and observability.
- **Account Management:** status transparency is included, but no faster completion promise is approved.
- **Technicians:** the workflow should improve job completeness and must not introduce hidden performance scoring.

## Challenge Questions

1. **Why not deliver auto-dispatch if that is what leadership requested?** Because the strongest evidence points to incomplete intake, and the data required for safe automated assignment is not reliably current.
2. **Is a recommendation workspace just manual dispatch with a new screen?** It will be valuable only if it consolidates eligibility evidence, exposes freshness, reduces clarification, and makes exceptions accountable. Those outcomes must be validated.
3. **Why include status visibility in an operational MVP?** Status chasing is a separate evidenced problem that can be improved without weakening assignment controls.
4. **What prevents the system from nudging dispatchers toward unsafe choices?** Eligibility rules, freshness warnings, visible rationale, supervisor gates, overrides, and audit events are part of the Product scope.
5. **Why proceed without proven production baselines?** The recommendation authorizes discovery and conditional refinement, not an outcome claim or delivery commitment. Baseline creation is required before rollout approval.

## Product Owner Decision

- **Decision:** Approved With Notes.
- **Recommended priority:** guided intake and accountable exception handling first; governed recommendation support second.
- **Recommended MVP:** guided intake, completeness validation, human-approved recommendations for selected standard categories, supervisor gates for protected work, visible exceptions, auditability, and safe status.
- **Not approved:** autonomous assignment, location-based optimization, broad analytics, or delivery-date commitment.
- **What is ready for Engineering:** a bounded discovery package and refinement of the intake, status, and exception boundaries.
- **What still requires discovery:** certification freshness, recommendation eligibility, integration behavior, explanation needs, audit events, baselines, and controlled rollout design.
- **Primary risk:** creating false confidence from incomplete or stale eligibility evidence.
- **Confidence:** Medium. Product direction is clear; feasibility and measurement remain open.

The approved Product Recommendation is now locked for Engineering translation. Engineering may clarify implementation choices and expose feasibility concerns, but it may not add autonomous assignment or remove the human gates without returning to Product.
