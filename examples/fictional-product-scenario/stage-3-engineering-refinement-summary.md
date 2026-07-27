# Stage 3: Canonical Engineering Refinement Package

This artifact is fictional and demonstrates AAPOS Engineering Planning. It translates the locked Product Recommendation into an Engineering decision package without changing Product priority or scope. Its structured companion is the [`Engineering Refinement Workbook Map`](stage-3-engineering-refinement-workbook-map.md).

## 1. Locked Product Recommendation

Proceed with bounded Engineering discovery and conditional refinement for a governed dispatch-support MVP.

The approved Product Recommendation is locked:

- Improve guided request intake and accountable exception handling first.
- Add a dispatcher recommendation workspace only for selected standard service categories that pass eligibility and data-freshness gates.
- Keep a human dispatcher accountable for every assignment.
- Require supervisor approval for safety-sensitive and after-hours work.
- Show the evidence and freshness behind each recommendation.
- Return incomplete, conflicting, rejected, or unavailable recommendations to a visible queue with a reason and owner.
- Preserve the existing scheduling application as the assignment system of record.
- Include customer-safe status visibility without exposing internal safety notes or employee data.
- Defer autonomous assignment, location optimization, workforce scoring, broad analytics, and configurable rule administration.

This package may expose unknowns and propose implementation choices for review. It may not reprioritize the initiative, remove human approval, add automation scope, invent delivery dates, assign unconfirmed owners, or claim production outcomes.

## 2. Source Context

- The initial request asked Product to automate technician dispatch with AI.
- Fictional discovery separated the request into incomplete intake, fragmented assignment evidence, and poor status visibility.
- A review of 120 invented requests found 46 required at least one clarification before assignment.
- Missing access windows and equipment identifiers appeared most frequently in the reviewed delays.
- Current shift availability exists in the scheduling application.
- Technician certification data is synchronized nightly.
- Technician location is optional and is not approved as recommendation evidence.
- Safety-sensitive and after-hours work requires dispatch-supervisor approval.
- Every unresolved request must return to a visible manual queue.
- Leadership needs a direction in four weeks for internal planning; this is not a delivery deadline.
- No implementation budget, capacity reservation, or production date is approved.

## 3. Engineering Readiness

**Status: Not Ready for Full MVP Implementation Refinement.**

The guided intake, completeness, external status, and exception-accountability boundaries are ready for Engineering review. The recommendation workspace is ready only for bounded discovery until the team validates certification freshness, eligibility rules, explanation requirements, audit events, system-of-record behavior, and operational fallback.

Autonomous assignment is not ready for discovery as delivery scope because Product has explicitly deferred it.

## 4. Delivery Objective

Create an Engineering-ready path that can support a leadership direction within four weeks without turning that deadline into a production commitment.

If the discovery gates pass, the conditional MVP will:

- collect required request information for selected standard service categories;
- prevent incomplete requests from appearing recommendation-ready;
- show dispatchers eligible technician recommendations with supporting evidence and freshness;
- require explicit human approval before the scheduling application records an assignment;
- require supervisor approval for protected work;
- route unresolved work to a visible exception queue;
- preserve a traceable audit history; and
- publish a customer-safe request status.

## 5. Scope Guardrails

### In Scope for Engineering Discovery

- Intake field ownership, validation rules, and portal integration for selected categories.
- Service-category eligibility for recommendation support.
- Certification-data source, synchronization behavior, age, and failure states.
- Scheduling-system availability and assignment interfaces.
- Recommendation rationale and freshness presentation.
- Dispatcher and supervisor approval behavior.
- Exception reasons, queue ownership, retry, and reassignment behavior.
- Audit-event requirements for recommendations, reviews, overrides, assignments, and exceptions.
- Customer-safe status taxonomy and information boundaries.
- Baseline and observability design.

### Conditionally In Scope After Discovery Gates

- Guided request intake and completeness validation.
- Dispatcher recommendation workspace for approved standard categories.
- Human approval and protected-work supervisor gates.
- Visible data-freshness warnings.
- Accountable exception queue.
- Audit events and customer-safe status updates.

### Out of Scope

- Autonomous or silent assignment.
- Removing dispatcher accountability.
- Replacing the scheduling application as system of record.
- Recommendations based on optional technician location.
- Travel-time optimization.
- Workforce performance scoring.
- Automated approval of safety-sensitive or after-hours work.
- Configurable rule administration.
- Full dispatch analytics.
- Unapproved delivery dates, budgets, team capacity, or production outcomes.

## 6. Epics and Stories

### EPIC-001: Eligibility, Data, and Workflow Discovery

**Business goal:** determine whether the governed recommendation concept can be made safe, current, explainable, and operationally usable.

**User or operational problem:** dispatchers currently assemble assignment evidence from multiple sources, but the freshness and decision boundaries are not sufficiently defined for a product recommendation.

**Business value:** resolves the largest feasibility and governance uncertainties before build commitment.

**Refinement status:** Ready for Discovery.

**Key dependencies:** Operations, Safety, technician data, scheduling interfaces, portal capabilities, and audit requirements.

**Primary risks:** stale evidence appears current; eligibility rules are ambiguous; the requested workflow duplicates rather than improves dispatcher work.

| Story | Story Summary | Acceptance Intent | Refinement Status | Discovery Needed | Key Dependency | Primary Risk |
|---|---|---|---|---|---|---|
| ST-001 | Define recommendation-eligible service categories | Identify which standard categories may receive recommendations and which require protected handling. | Ready for Discovery | Category rules, exclusions, escalation conditions. | Operations and Safety policy review. | Unsafe or ambiguous work becomes eligible. |
| ST-002 | Validate technician evidence and freshness | Document availability, certification, and approved evidence sources with timestamps and failure behavior. | Ready for Discovery | Source ownership, sync timing, missing/stale states. | Technician data and scheduling interfaces. | Stale data produces false eligibility. |
| ST-003 | Validate dispatcher decision and explanation needs | Determine what evidence dispatchers need to accept, override, or reject a recommendation. | Ready for Discovery | Workflow observation, explanation content, override reasons. | Dispatcher participation. | A new screen adds work without improving decisions. |
| ST-004 | Define audit and baseline model | Establish required events and the pre-rollout measures needed to evaluate the workflow. | Ready for Discovery | Audit retention, event ownership, baseline definitions. | Product, Engineering, Operations, Safety. | Outcome claims cannot be supported. |

### EPIC-002: Guided Request Intake and Completeness

**Business goal:** reduce preventable clarification before dispatch.

**User or operational problem:** service requests frequently arrive without the access, equipment, urgency, or safety information needed to evaluate assignment.

**Business value:** addresses the strongest fictional evidence and improves both manual and recommendation-supported dispatch.

**Refinement status:** Ready for Review; category details require discovery.

**Key dependencies:** selected categories, portal integration, field ownership, customer-safe language.

**Primary risks:** required fields become burdensome; dynamic requirements are incorrectly generalized; existing portal data is duplicated.

| Story | Story Summary | Acceptance Intent | Refinement Status | Discovery Needed | Key Dependency | Primary Risk |
|---|---|---|---|---|---|---|
| ST-005 | Present category-specific required information | Requesters see the information required for the selected service category before submission. | Ready for Review | Final field set and conditional rules. | ST-001 and portal capability. | Intake becomes longer without improving completeness. |
| ST-006 | Validate completeness before recommendation eligibility | An incomplete request cannot appear ready for a technician recommendation. | Ready for Review | Validation timing, draft behavior, exception rules. | Field ownership and status model. | Validation blocks legitimate urgent work. |
| ST-007 | Reuse existing request information safely | Available information is reused without asking the requester to enter it again. | Needs Discovery | Source-of-truth and conflict handling. | Portal and account data access. | Old information is silently reused. |

### EPIC-003: Governed Dispatcher Recommendation Workspace

**Business goal:** consolidate the evidence needed for a human assignment decision without transferring accountability to AI.

**User or operational problem:** dispatchers compare fragmented availability and certification evidence while handling time-sensitive requests.

**Business value:** may reduce decision friction while preserving safety and operating controls.

**Refinement status:** Candidate MVP, Gated by Discovery.

**Key dependencies:** EPIC-001, current evidence, scheduling integration, human-role model, audit events.

**Primary risks:** recommendation bias, stale certification, unclear rationale, automation pressure, and incorrect assignment state.

| Story | Story Summary | Acceptance Intent | Refinement Status | Discovery Needed | Key Dependency | Primary Risk |
|---|---|---|---|---|---|---|
| ST-008 | Display eligible technician recommendations | A dispatcher sees only candidates who satisfy the approved Product and Safety eligibility rules. | Gated by Discovery | Matching inputs and exclusion logic. | ST-001 and ST-002. | Ineligible technicians are recommended. |
| ST-009 | Explain recommendation evidence and freshness | Each recommendation shows the relevant availability, certification, category match, and data age. | Gated by Discovery | Explanation design and stale thresholds. | ST-002 and ST-003. | Dispatcher assumes confidence that the evidence does not support. |
| ST-010 | Require dispatcher approval | No standard assignment is recorded until a dispatcher explicitly approves it. | Ready for Review | Role mapping and scheduling write behavior. | Scheduling interface and audit model. | Recommendation is mistaken for assignment. |
| ST-011 | Require supervisor approval for protected work | Safety-sensitive and after-hours work cannot be assigned without the required supervisor action. | Ready for Review | Protected-category rules and escalation. | Safety policy and role model. | A protected job bypasses review. |
| ST-012 | Capture override and rejection reasons | Dispatchers can reject or override a recommendation and record a structured reason. | Gated by Discovery | Reason taxonomy and free-text boundaries. | ST-003 and audit model. | Overrides are hidden or used as employee scoring. |

### EPIC-004: Exceptions, Status, and Operational Recovery

**Business goal:** keep every unresolved request visible, owned, and understandable.

**User or operational problem:** incomplete or conflicting work can require manual coordination, while customers and internal teams cannot see why a request is waiting.

**Business value:** creates the control layer needed for safe recommendation support and reduces avoidable status chasing.

**Refinement status:** Ready for Review; queue integration requires discovery.

**Key dependencies:** Operations ownership, status taxonomy, portal behavior, audit events, information-boundary review.

**Primary risks:** orphaned requests, internal details exposed externally, duplicate queues, and unclear recovery ownership.

| Story | Story Summary | Acceptance Intent | Refinement Status | Discovery Needed | Key Dependency | Primary Risk |
|---|---|---|---|---|---|---|
| ST-013 | Route unresolved work to an exception queue | Incomplete, conflicting, rejected, unavailable, or failed recommendations remain visible with a reason and owner. | Ready for Review | Queue platform, ownership, deduplication, retry. | Operations workflow. | Work disappears or exists in two queues. |
| ST-014 | Publish safe request status | Customers and account teams see a clear status without internal safety notes or employee information. | Ready for Review | External taxonomy and portal mapping. | Information-boundary approval. | Sensitive or misleading status is exposed. |
| ST-015 | Recover from recommendation or integration failure | When recommendation data or scheduling writes fail, the request returns to a manual path without appearing assigned. | Gated by Discovery | Failure semantics, retry, idempotency, alerts. | Scheduling and recommendation interfaces. | False assignment state or duplicate work. |
| ST-016 | Record end-to-end decision history | Authorized reviewers can trace recommendation, evidence age, human action, override, assignment, and exception outcome. | Gated by Discovery | Event model, storage, access, retention. | ST-004. | The decision cannot be audited. |

## 7. Delivery Sequence

| Phase | Epics Included | Objective | Entry Condition | Exit Decision |
|---|---|---|---|---|
| Phase 1: Leadership direction, then bounded discovery | EPIC-001 plus discovery for EPIC-002 and EPIC-004 | Leadership provides direction within four weeks. If approved, Engineering then confirms Product boundaries, data feasibility, human-control rules, audit needs, queue ownership, and the baseline plan without a predetermined work duration. | Locked Product Recommendation approved and leadership direction recorded. | Proceed with conditional MVP refinement, narrow scope, extend discovery, or defer. |
| Phase 2: Intake and operational control foundation | EPIC-002 and EPIC-004 foundation | Improve completeness, status, and accountable exception handling independent of recommendation availability. | Required fields, status taxonomy, and queue ownership approved. | Foundation ready for controlled use or returned for revision. |
| Phase 3: Conditional recommendation workspace | EPIC-003 and remaining EPIC-004 controls | Introduce human-approved recommendations for eligible standard categories. | Data freshness, eligibility, explanations, audit, fallback, and scheduling behavior validated. | Controlled rollout approved, narrowed, or stopped. |
| Phase 4: Evidence-based future decision | Deferred scope only | Evaluate whether broader categories or automation deserve a new Product decision. | Baselines and controlled-use evidence reviewed by humans. | Open a new Product Discovery cycle or retain current scope. |

## 8. Work Breakdown

| ID | Priority | Type | Title | Status |
|---|---|---|---|---|
| WI-001 | P0 | Discovery | Define recommendation-eligible and protected service categories | Ready for Discovery |
| WI-002 | P0 | Discovery | Validate certification, availability, and evidence freshness | Ready for Discovery |
| WI-003 | P0 | Discovery | Validate dispatcher explanation and override needs | Ready for Discovery |
| WI-004 | P0 | Discovery | Define audit events and pre-rollout baselines | Ready for Discovery |
| WI-005 | P0 | Product/Engineering Refinement | Define guided intake fields and completeness rules | Ready for Review |
| WI-006 | P0 | Operational | Define exception taxonomy, ownership, and manual recovery | Ready for Review |
| WI-007 | P1 | Feature | Implement guided intake for approved categories | Gated by Refinement |
| WI-008 | P1 | Feature | Implement customer-safe request status | Gated by Refinement |
| WI-009 | Candidate P1 | Feature | Implement dispatcher recommendation workspace | Gated by Discovery |
| WI-010 | Candidate P1 | Control | Implement dispatcher and supervisor approval gates | Gated by Discovery |
| WI-011 | Candidate P1 | Control | Implement audit and failure recovery | Gated by Discovery |
| WI-012 | Deferred | Product Scope | Autonomous technician assignment | Deferred |
| WI-013 | Deferred | Product Scope | Travel optimization, workforce scoring, and broad analytics | Deferred |

## 9. Conditional MVP Acceptance Criteria

These criteria apply only if the relevant discovery and approval gates pass.

- Given a requester selects an approved service category, when required information is missing, then the request identifies what is needed and does not appear recommendation-ready.
- Given an eligible, complete request, when a recommendation is available, then the dispatcher sees the candidate, supporting eligibility evidence, and data-freshness information.
- Given technician evidence exceeds the approved freshness threshold, when the workspace evaluates eligibility, then it does not present the recommendation as decision-ready and routes the request to the approved manual path.
- Given a standard request has a recommendation, when no dispatcher has approved it, then the scheduling application does not record an assignment.
- Given a protected request, when a dispatcher attempts assignment without the required supervisor approval, then the assignment is blocked.
- Given a dispatcher overrides or rejects a recommendation, when the decision is saved, then the approved reason and human actor are recorded.
- Given recommendation data is missing, conflicting, rejected, or unavailable, when processing ends, then the request appears in the named exception queue with a reason and owner.
- Given a scheduling write fails or times out, then the request does not appear assigned and returns to an auditable recovery state.
- Given an external viewer checks status, then the displayed value is accurate and excludes internal safety notes and employee information.
- Given any recommendation-supported assignment attempt, then authorized reviewers can trace the evidence age, recommendation, human decision, assignment result, and exception outcome.
- Given autonomous assignment or location-based optimization is requested, then it remains outside this MVP and requires a new Product decision.

## 10. Technical Design Outline

This outline frames discovery; it is not an implementation commitment.

- **Intake contract:** define category-specific required fields, conditional validation, drafts, and safe reuse of existing values.
- **Eligibility service boundary:** separate approved Product/Safety rules from presentation logic and return explicit eligible, ineligible, or indeterminate results.
- **Evidence freshness:** attach source and timestamp to availability and certification evidence; define stale, missing, and conflicting states.
- **Recommendation presentation:** show ranked or unranked candidates only if supported by approved evidence; do not display unsupported confidence.
- **Human decision state:** represent recommendation, dispatcher approval, supervisor approval, override, rejection, assignment, and exception as distinct events.
- **Scheduling integration:** keep the scheduling application authoritative and prevent a recommendation from appearing as a completed assignment.
- **Exception workflow:** provide idempotent routing, named ownership, visible reasons, and recovery without duplicate work.
- **External status projection:** map internal workflow states to a smaller customer-safe taxonomy.
- **Audit and observability:** capture decision evidence, human actions, failures, freshness, queue state, and scheduling outcomes with access controls.

## 11. Validation Plan

### Discovery Validation

- Review selected categories with dispatchers and the Safety Lead.
- Inspect source ownership, freshness, missing values, and synchronization failures for technician evidence.
- Observe fictional workflow walkthroughs for normal, protected, incomplete, conflicting, rejected, and unavailable cases.
- Confirm scheduling read/write behavior, duplicate prevention, and failure semantics.
- Approve external status language and internal-information boundaries.
- Establish baseline definitions before approving outcome targets.

### Conditional MVP Validation

- Unit checks for intake rules, eligibility states, approval gates, freshness thresholds, status mapping, and audit payloads.
- Contract checks for scheduling reads, writes, retries, timeouts, and duplicate prevention.
- Scenario checks for incomplete input, stale certification, protected work, rejected recommendations, unavailable services, and failed assignments.
- Role checks proving only authorized dispatchers and supervisors can perform their actions.
- Accessibility and usability review of intake, rationale, warnings, and exception handling.
- Operational review proving every unresolved request has a visible reason and owner.
- Privacy review proving external status excludes internal safety and employee details.

### Controlled Rollout Evidence

- Recommendation availability and unavailability reasons.
- Acceptance, override, and rejection patterns without using them for employee scoring.
- Freshness failures and certification conflicts.
- Requests without an owner or visible recovery state.
- Scheduling write failures and duplicate attempts.
- Clarification contacts, assignment-decision time, and status inquiries against approved baselines.
- Safety-policy exceptions, with any confirmed control failure triggering review.

## 12. Rollout and Rollback

There is no rollout commitment during discovery.

If approved, rollout should begin with selected standard categories, named dispatcher groups, visible support ownership, and a feature-disable mechanism. Protected work retains supervisor review throughout.

### Stop or Disable Triggers

- A protected assignment bypasses required approval.
- A recommendation uses evidence older than the approved threshold without a visible warning or manual gate.
- A request appears assigned before the scheduling system confirms it.
- An unresolved request lacks a visible queue, reason, or owner.
- External status exposes restricted internal information.
- Audit history cannot reconstruct the human decision.
- Duplicate assignments or material scheduling inconsistencies occur.

### Recovery Path

- Disable recommendation presentation for affected categories.
- Keep guided intake and safe status available only if independently validated.
- Route open work to the named manual queue.
- Preserve audit events and affected evidence for review.
- Return assignment decisions to the existing dispatcher workflow.
- Require human review before re-enablement.

## 13. Risks

| ID | Related Epic | Impact | Risk | Mitigation or Response | Status |
|---|---|---|---|---|---|
| RISK-001 | EPIC-001/003 | High | Nightly certification data may be too stale for decision-ready recommendations. | Define freshness gates and manual fallback before refinement. | Open |
| RISK-002 | EPIC-003 | High | Recommendation presentation creates automation bias or implied confidence. | Show rationale, freshness, uncertainty, and require explicit human action. | Open |
| RISK-003 | EPIC-003 | High | Protected work bypasses supervisor approval. | Treat protected-category and role checks as hard release gates. | Open |
| RISK-004 | EPIC-004 | High | A failed scheduling write appears as a completed assignment. | Separate recommendation, approval, and confirmed assignment states. | Open |
| RISK-005 | EPIC-004 | Medium-High | Unresolved work becomes orphaned or duplicated across queues. | Approve one recovery owner, idempotent routing, and queue observability. | Open |
| RISK-006 | EPIC-002 | Medium | Required intake fields increase abandonment or delay urgent work. | Test category-specific fields and define an approved urgent exception path. | Open |
| RISK-007 | EPIC-004 | Medium-High | External status exposes restricted details or overpromises completion. | Use an approved customer-safe projection with privacy review. | Open |
| RISK-008 | All | Medium | Four-week planning pressure becomes an unsupported delivery promise. | Communicate decision, discovery, and delivery commitments separately. | Open |
| RISK-009 | Future Scope | Medium-High | Early recommendation evidence is used to justify autonomous assignment prematurely. | Require a new Product Discovery and approval cycle for any automation expansion. | Open |

## 14. Dependencies

| ID | Related Epic | Dependency | Why It Matters | Status |
|---|---|---|---|---|
| DEP-001 | EPIC-001/003 | Approved eligible and protected service categories | Determines when recommendation support may be used. | Required |
| DEP-002 | EPIC-001/003 | Technician certification source and freshness behavior | Determines whether eligibility evidence is decision-ready. | Required |
| DEP-003 | EPIC-002 | Portal field and validation capability | Determines guided-intake feasibility. | Required |
| DEP-004 | EPIC-003/004 | Scheduling application interfaces and confirmation semantics | Preserves system-of-record assignment state. | Required |
| DEP-005 | EPIC-003 | Dispatcher and supervisor role model | Enforces human accountability and protected-work approval. | Required |
| DEP-006 | EPIC-004 | Operations exception owner and queue platform | Prevents orphaned work. | Required |
| DEP-007 | EPIC-004 | Approved internal-to-external status mapping | Protects information boundaries and status accuracy. | Required |
| DEP-008 | All | Audit, baseline, and observability definitions | Supports governance and any later outcome evaluation. | Required |

## 15. Assumptions

| ID | Related Epic | Assumption | Validation Approach | Status |
|---|---|---|---|---|
| ASM-001 | EPIC-002 | The selected service categories can use a stable required-field set. | Category and workflow review. | Unvalidated |
| ASM-002 | EPIC-003 | Current availability can be read without changing scheduling ownership. | Interface discovery. | Unvalidated |
| ASM-003 | EPIC-003 | Certification freshness can be improved or safely gated. | Data-source and synchronization review. | Unvalidated |
| ASM-004 | EPIC-003 | Dispatchers can evaluate a recommendation without increasing decision burden. | Workflow testing with dispatchers. | Unvalidated |
| ASM-005 | EPIC-004 | One operational queue can own all unresolved recommendation cases. | Operations process review. | Unvalidated |
| ASM-006 | All | Leadership can provide direction within four weeks without committing the duration of bounded discovery, refinement, or delivery. | Leadership planning confirmation. | Validated for Product direction |

## 16. Decisions and Open Questions

### Locked Decisions

- Intake completeness and accountable fallback are the first priorities.
- Recommendation support is conditional and human-approved.
- Protected work requires supervisor approval.
- The scheduling application remains the assignment system of record.
- Recommendation evidence and freshness must be visible.
- Unresolved work requires a reason, owner, and manual path.
- Autonomous assignment and location optimization are deferred.
- No delivery date, budget, capacity, or outcome is approved.

### Open Questions

| ID | Related Epic | Related Story | Question | Why It Matters | Status |
|---|---|---|---|---|---|
| OQ-001 | EPIC-001 | ST-001 | Which exact standard categories are recommendation-eligible? | Defines the safe MVP boundary. | Needs Discovery |
| OQ-002 | EPIC-001 | ST-002 | What freshness threshold makes certification evidence usable? | Prevents stale eligibility. | Needs Discovery |
| OQ-003 | EPIC-001 | ST-003 | Which rationale and uncertainty cues do dispatchers need? | Reduces automation bias and supports judgment. | Needs Discovery |
| OQ-004 | EPIC-002 | ST-005 | Which fields are required by category and who owns them? | Determines intake rules and change governance. | Needs Discovery |
| OQ-005 | EPIC-003 | ST-010/011 | How are dispatcher and supervisor roles represented in current systems? | Enables enforceable human gates. | Needs Discovery |
| OQ-006 | EPIC-003/004 | ST-010/015 | What confirms that the scheduling system accepted an assignment? | Prevents false assignment state. | Needs Discovery |
| OQ-007 | EPIC-004 | ST-013 | Which team and queue own each exception reason? | Prevents orphaned or duplicated work. | Needs Discovery |
| OQ-008 | EPIC-004 | ST-014 | Which internal states can be projected externally? | Protects privacy and status accuracy. | Needs Discovery |
| OQ-009 | All | ST-004 | What baselines and observation period support a later outcome decision? | Prevents unsupported success claims. | Needs Discovery |

## 17. Deferred Work

| Item | Why Deferred | Revisit Trigger |
|---|---|---|
| Autonomous technician assignment | Human accountability is required and decision data is not reliably current. | New Product Discovery after governed recommendations demonstrate safe, measurable value. |
| Technician-location routing | Location is optional and unreliable in the fictional scenario. | Separate consent, data-quality, privacy, and Product review. |
| Travel-time optimization | The MVP addresses completeness, evidence, and control first. | Reliable location and routing data plus a validated value case. |
| Workforce performance scoring | Not part of the Product problem and creates employment-governance risk. | Separate approved Product intent and governance review. |
| Configurable rules administration | Eligibility rules must be understood before creating an administration product. | Stable rules, ownership, audit needs, and change-volume evidence. |
| Full dispatch analytics | Baselines and event definitions do not yet exist. | Validated event model and approved decision use cases. |
| Expansion to all service categories | Category risk and evidence needs may differ. | Controlled MVP evidence and separate category approval. |

## 18. Stakeholder Notes

### Leadership

The recommended commitment is bounded discovery and conditional MVP refinement. It is not approval for autonomous dispatch or a production deadline.

### Operations and Dispatch

The workflow should reduce incomplete requests, consolidate decision evidence, and make unresolved work accountable. Dispatchers remain decision owners.

### Safety

Protected categories, certification freshness, supervisor approval, and auditability are release gates. No recommendation may override policy.

### Engineering

Product scope is locked. Engineering should test feasibility, propose implementation choices, identify constraints, and return any scope-changing decision to Product.

### Account Management and Customers

The MVP may provide clearer status, but it does not approve faster-completion promises. External status must remain accurate and limited.

### Technicians

Recommendation evidence is used to support assignment decisions, not to create hidden worker rankings or performance scores.

## 19. Workbook Handoff and Stage 3 Exit

The required [`Engineering Refinement Workbook Map`](stage-3-engineering-refinement-workbook-map.md) was produced from this approved package after human review confirmed that the package:

- preserves the locked Product Recommendation;
- keeps autonomous assignment out of scope;
- represents human approval gates correctly;
- separates known facts, assumptions, dependencies, and open questions; and
- is an approved source of truth for structured planning.

The package and workbook map represent the same Product boundary, epics, stories, discovery needs, dependencies, risks, assumptions, deferred work, and open Engineering questions at different levels of structure. Both trace to the [`Approved Product Recommendation`](stage-2-product-recommendation.md).

**Stage 3 exit status in this fictional run:** Both required outputs exist and are traceable. Engineering Review is Approved With Notes for progression to Executive Communication. Implementation commitment remains blocked by the open discovery items, estimates, capacity, budget, and a required return decision.
