# Stage 3: Engineering Refinement Workbook Map

This artifact is fictional and demonstrates the structured reference output required by AAPOS Engineering Planning.

It maps the same approved work represented in the [`Canonical Engineering Refinement Package`](stage-3-engineering-refinement-summary.md). It is a planning artifact, not implementation authorization. It contains no estimate, capacity reservation, budget approval, sprint commitment, delivery date, or production outcome.

## 1. Source and Traceability

| Source Artifact | Relationship | Traceability Rule |
|---|---|---|
| [`Discovery Summary`](stage-1-discovery-summary.md) | Establishes the fictional evidence, assumptions, human-control boundary, and unresolved discovery. | Questions and uncertainty remain visible; they are not converted into facts. |
| [`Approved Product Recommendation`](stage-2-product-recommendation.md) | Locks Product intent, priority, MVP scope, exclusions, tradeoffs, and success definition. | Every Engineering item must preserve this boundary. |
| [`Canonical Engineering Refinement Package`](stage-3-engineering-refinement-summary.md) | Provides the readable Engineering plan. | IDs, statuses, risks, dependencies, and deferred work must match this map. |
| [`Human Approval Record`](approval-record.md) | Preserves the Product and Engineering review decisions. | This map cannot authorize work independently of the recorded human gates. |

## 2. Product Boundary Tab

| Field | Structured Value | Source |
|---|---|---|
| Product Intent | Help dispatchers make better-supported assignment decisions through complete intake, visible eligibility evidence, required human approval, accountable exceptions, and safe status. | Approved Product Recommendation |
| First Priority | Guided request intake and accountable exception handling. | Approved Product Recommendation |
| Conditional MVP | Human-approved recommendations for selected standard categories after data, eligibility, audit, and fallback gates pass. | Approved Product Recommendation |
| Human Control | A dispatcher remains accountable for standard assignments; protected work requires supervisor approval. | Approved Product Recommendation |
| System of Record | The existing scheduling application remains authoritative for assignments. | Approved Product Recommendation |
| Explicit Exclusions | Autonomous assignment, location optimization, workforce scoring, broad analytics, configurable rule administration, and unsupported commitments. | Approved Product Recommendation |
| Product Assumptions | Selected categories can use stable intake rules; the recommendation workflow may reduce fragmented decision work. | Engineering Refinement Package |
| Engineering Assumptions | Current availability can be read; certification freshness can be improved or safely gated; scheduling confirmation can be represented distinctly. | Engineering Refinement Package |
| Commitment Boundary | Discovery and refinement are authorized only after the relevant human decision. Duration, capacity, estimates, budget, and delivery timing are uncommitted. | Approval Record |

## 3. Epics Tab

| Epic ID | Epic Name | Business Goal | Business Value | Refinement Status | Key Dependencies | Primary Risks |
|---|---|---|---|---|---|---|
| EPIC-001 | Eligibility, Data, and Workflow Discovery | Determine whether governed recommendations can be safe, current, explainable, and usable. | Resolves the largest feasibility and governance unknowns before build commitment. | Ready for Discovery | Operations, Safety, technician data, scheduling interfaces, audit requirements | Stale evidence, ambiguous eligibility, duplicated dispatcher effort |
| EPIC-002 | Guided Request Intake and Completeness | Reduce preventable clarification before dispatch. | Addresses the strongest fictional evidence and improves manual and supported dispatch. | Ready for Review; category details require discovery | Approved categories, portal capability, field ownership | Burdensome intake, overgeneralized rules, stale reused data |
| EPIC-003 | Governed Dispatcher Recommendation Workspace | Consolidate assignment evidence without transferring accountability to AI. | May reduce decision friction while preserving human and safety controls. | Candidate MVP; gated by discovery | EPIC-001, role model, scheduling integration, audit events | Automation bias, stale certification, unclear rationale, false assignment state |
| EPIC-004 | Exceptions, Status, and Operational Recovery | Keep every unresolved request visible, owned, and understandable. | Creates the control layer for safe recommendation support and reduces status chasing. | Ready for Review; integration discovery required | Queue ownership, status taxonomy, portal behavior, audit events | Orphaned work, duplicate queues, exposed internal details |

## 4. Stories Tab

| Story ID | Epic ID | Story Summary | Acceptance Intent | Refinement Status | Key Dependency |
|---|---|---|---|---|---|
| ST-001 | EPIC-001 | Define recommendation-eligible service categories. | Approved standard categories and protected exclusions are explicit. | Ready for Discovery | Operations and Safety policy review |
| ST-002 | EPIC-001 | Validate technician evidence and freshness. | Availability, certification, source, timestamp, and failure states are documented. | Ready for Discovery | Technician data and scheduling interfaces |
| ST-003 | EPIC-001 | Validate dispatcher decision and explanation needs. | Required rationale, warnings, approvals, and override evidence are understood. | Ready for Discovery | Dispatcher participation |
| ST-004 | EPIC-001 | Define audit and baseline model. | Required events and pre-rollout measures are approved before outcome targets. | Ready for Discovery | Product, Engineering, Operations, and Safety review |
| ST-005 | EPIC-002 | Present category-specific required information. | Requesters see required information for the selected category. | Ready for Review | ST-001 and portal capability |
| ST-006 | EPIC-002 | Validate completeness before recommendation eligibility. | Incomplete work cannot appear recommendation-ready. | Ready for Review | Field ownership and status model |
| ST-007 | EPIC-002 | Reuse existing request information safely. | Existing values are reused only when source and conflict behavior are approved. | Needs Discovery | Portal and account data access |
| ST-008 | EPIC-003 | Display eligible technician recommendations. | Only candidates satisfying approved eligibility rules are presented. | Gated by Discovery | ST-001 and ST-002 |
| ST-009 | EPIC-003 | Explain recommendation evidence and freshness. | Dispatchers can see relevant evidence, source, age, and uncertainty. | Gated by Discovery | ST-002 and ST-003 |
| ST-010 | EPIC-003 | Require dispatcher approval. | No standard assignment is recorded without explicit dispatcher action. | Ready for Review | Scheduling interface and audit model |
| ST-011 | EPIC-003 | Require supervisor approval for protected work. | Protected work cannot be assigned without the required supervisor action. | Ready for Review | Safety policy and role model |
| ST-012 | EPIC-003 | Capture override and rejection reasons. | Human overrides and rejections retain an approved reason and actor. | Gated by Discovery | ST-003 and audit model |
| ST-013 | EPIC-004 | Route unresolved work to an exception queue. | Every unresolved request has a visible reason, owner, and manual path. | Ready for Review | Operations workflow |
| ST-014 | EPIC-004 | Publish safe request status. | External viewers see accurate status without restricted internal details. | Ready for Review | Information-boundary approval |
| ST-015 | EPIC-004 | Recover from recommendation or integration failure. | Failed work returns to a manual path without appearing assigned. | Gated by Discovery | Scheduling and recommendation interfaces |
| ST-016 | EPIC-004 | Record end-to-end decision history. | Authorized reviewers can trace evidence, recommendation, human action, assignment, and exception outcome. | Gated by Discovery | ST-004 |

## 5. Engineering Discovery Tab

| Discovery ID | Related Epic | Related Stories | Question | Why It Matters | Owner | Status |
|---|---|---|---|---|---|---|
| DISC-001 | EPIC-001 | ST-001 | Which standard categories are recommendation-eligible and which remain protected? | Defines the safe MVP boundary. | Product, Operations, Safety | Ready for Discovery |
| DISC-002 | EPIC-001 | ST-002 | What certification source and freshness threshold are acceptable? | Prevents stale eligibility evidence. | Engineering and Safety | Ready for Discovery |
| DISC-003 | EPIC-001 | ST-003 | Which rationale and uncertainty cues support dispatcher judgment? | Reduces automation bias and unnecessary workflow burden. | Product and Operations | Ready for Discovery |
| DISC-004 | EPIC-001 | ST-004 | Which events and baselines are required before rollout targets? | Prevents unsupported success claims. | Product and Engineering | Ready for Discovery |
| DISC-005 | EPIC-002 | ST-005, ST-006, ST-007 | Which fields are required by category and which system owns each value? | Determines intake rules, reuse, and change governance. | Product and Engineering | Ready for Discovery |
| DISC-006 | EPIC-003 | ST-010, ST-011 | How are dispatcher and supervisor roles enforced? | Makes human approval testable. | Engineering and Safety | Ready for Discovery |
| DISC-007 | EPIC-003, EPIC-004 | ST-010, ST-015 | What confirms scheduling acceptance and how are failures recovered? | Prevents false or duplicate assignment state. | Engineering | Ready for Discovery |
| DISC-008 | EPIC-004 | ST-013 | Which queue and team own each exception reason? | Prevents orphaned or duplicated work. | Operations | Ready for Discovery |
| DISC-009 | EPIC-004 | ST-014 | Which internal states may be projected externally? | Protects privacy and status accuracy. | Product and Account Management | Ready for Discovery |

## 6. Dependencies Tab

| Dependency ID | Related Epic | Type | Description | Why It Matters | Owner | Status |
|---|---|---|---|---|---|---|
| DEP-001 | EPIC-001, EPIC-003 | Policy | Approved eligible and protected categories | Determines where recommendation support may operate. | Product and Safety | Required |
| DEP-002 | EPIC-001, EPIC-003 | Data | Certification source and freshness behavior | Determines whether eligibility evidence is decision-ready. | Engineering and Safety | Required |
| DEP-003 | EPIC-002 | System | Portal validation capability | Determines guided-intake feasibility. | Engineering | Required |
| DEP-004 | EPIC-003, EPIC-004 | System | Scheduling read, write, and confirmation behavior | Preserves authoritative assignment state. | Engineering | Required |
| DEP-005 | EPIC-003 | Access Control | Dispatcher and supervisor role model | Enforces human accountability and protected-work approval. | Engineering and Safety | Required |
| DEP-006 | EPIC-004 | Operations | Named exception owner and queue platform | Prevents unresolved work from becoming orphaned. | Operations | Required |
| DEP-007 | EPIC-004 | Information Governance | Approved internal-to-external status mapping | Protects restricted details and status accuracy. | Product and Account Management | Required |
| DEP-008 | All | Measurement and Audit | Approved event, baseline, access, and retention definitions | Supports governance and later outcome evaluation. | Product and Engineering | Required |

## 7. Risks Tab

| Risk ID | Related Epic | Risk | Impact | Likelihood | Mitigation or Response | Human Owner | Status |
|---|---|---|---|---|---|---|---|
| RISK-001 | EPIC-001, EPIC-003 | Nightly certification data may be too stale for decision-ready recommendations. | High | Medium-High | Define freshness gates and manual fallback before refinement. | Engineering and Safety | Open |
| RISK-002 | EPIC-003 | Recommendation presentation creates automation bias. | High | Medium | Show rationale, freshness, uncertainty, and require explicit human action. | Product and Operations | Open |
| RISK-003 | EPIC-003 | Protected work bypasses supervisor approval. | High | Low-Medium | Treat category and role checks as hard release gates. | Safety | Open |
| RISK-004 | EPIC-004 | Failed scheduling work appears as a completed assignment. | High | Medium | Separate recommendation, approval, and confirmed assignment states. | Engineering | Open |
| RISK-005 | EPIC-004 | Unresolved work becomes orphaned or duplicated. | Medium-High | Medium | Approve one recovery owner, idempotent routing, and queue observability. | Operations | Open |
| RISK-006 | EPIC-002 | Required intake fields increase abandonment or delay urgent work. | Medium | Medium | Test category-specific fields and define an approved urgent path. | Product and Operations | Open |
| RISK-007 | EPIC-004 | External status exposes restricted details or overpromises completion. | Medium-High | Low-Medium | Use an approved external projection with privacy review. | Product | Open |
| RISK-008 | All | The four-week decision deadline becomes an unsupported work-duration promise. | Medium-High | Medium | Separate leadership direction timing from discovery, refinement, and delivery timing. | Product Owner and Leadership | Open |
| RISK-009 | Deferred Scope | Early evidence is used to justify autonomous assignment prematurely. | Medium-High | Medium | Require a new Product Discovery and approval cycle for expansion. | Product Owner | Open |

## 8. Assumptions Tab

| Assumption ID | Related Epic | Assumption | Validation Approach | Status |
|---|---|---|---|---|
| ASM-001 | EPIC-002 | Selected categories can use stable required-field sets. | Category and workflow review. | Unvalidated |
| ASM-002 | EPIC-003 | Current availability can be read without changing scheduling ownership. | Interface discovery. | Unvalidated |
| ASM-003 | EPIC-003 | Certification freshness can be improved or safely gated. | Data-source and synchronization review. | Unvalidated |
| ASM-004 | EPIC-003 | Dispatchers can evaluate recommendations without increased burden. | Dispatcher workflow testing. | Unvalidated |
| ASM-005 | EPIC-004 | One operational queue can own unresolved recommendation cases. | Operations process review. | Unvalidated |
| ASM-006 | All | Leadership can provide direction within four weeks without committing the duration of subsequent work. | Leadership planning confirmation. | Validated for Product direction |

## 9. Deferred Work Tab

| Deferred ID | Description | Reason Deferred | Product Boundary | Revisit Trigger |
|---|---|---|---|---|
| DEF-001 | Autonomous technician assignment | Human accountability is required and decision evidence is not reliably current. | Explicitly out of scope | New Product Discovery after governed recommendations demonstrate safe, measurable value. |
| DEF-002 | Technician-location routing | Location data is optional and unreliable in the fictional scenario. | Explicitly out of scope | Separate consent, privacy, quality, and Product review. |
| DEF-003 | Travel-time optimization | The approved problem focuses on completeness, evidence, and control. | Explicitly out of scope | Reliable routing data and a validated value case. |
| DEF-004 | Workforce performance scoring | Not part of the approved Product problem and creates separate governance risk. | Explicitly out of scope | Separate Product intent and workforce-governance review. |
| DEF-005 | Configurable rules administration | Eligibility rules are not stable enough to productize. | Full-solution direction only | Stable rules, ownership, audit needs, and change-volume evidence. |
| DEF-006 | Full dispatch analytics | Baselines and event definitions are not approved. | Full-solution direction only | Validated event model and approved decision use cases. |
| DEF-007 | Expansion to all service categories | Risk and evidence requirements may vary by category. | Outside conditional MVP | Controlled evidence and separate category approval. |

## 10. Open Engineering Questions Tab

| Open Question ID | Related Epic | Related Story | Question | Decision Affected | Status |
|---|---|---|---|---|---|
| OQ-001 | EPIC-001 | ST-001 | Which exact categories are recommendation-eligible? | MVP boundary | Needs Discovery |
| OQ-002 | EPIC-001 | ST-002 | What evidence-freshness threshold is acceptable? | Recommendation availability and safety | Needs Discovery |
| OQ-003 | EPIC-001 | ST-003 | Which rationale and uncertainty cues do dispatchers require? | Recommendation presentation | Needs Discovery |
| OQ-004 | EPIC-002 | ST-005 | Which fields are required by category and who owns them? | Intake rules and governance | Needs Discovery |
| OQ-005 | EPIC-003 | ST-010, ST-011 | How are dispatcher and supervisor roles represented? | Human approval enforcement | Needs Discovery |
| OQ-006 | EPIC-003, EPIC-004 | ST-010, ST-015 | What confirms scheduling acceptance? | Assignment state and recovery | Needs Discovery |
| OQ-007 | EPIC-004 | ST-013 | Which queue owns each exception reason? | Operational recovery | Needs Discovery |
| OQ-008 | EPIC-004 | ST-014 | Which internal states may be shown externally? | Customer-safe status | Needs Discovery |
| OQ-009 | All | ST-004 | Which baselines and observation period support a later decision? | Success targets and rollout review | Needs Discovery |

## 11. Readiness Tab

| Area | Status | Evidence | Blocker | Next Action |
|---|---|---|---|---|
| Product Boundary | Approved With Notes | Approved Product Recommendation | Open assumptions remain documented. | Preserve the boundary during discovery. |
| Guided Intake | Ready for Review | EPIC-002 and ST-005 through ST-007 | Category fields and ownership are open. | Run DISC-005. |
| Recommendation Workspace | Gated by Discovery | EPIC-003 and ST-008 through ST-012 | Eligibility, freshness, explanation, roles, and scheduling behavior. | Complete DISC-001 through DISC-003, DISC-006, and DISC-007. |
| Exceptions and Status | Ready for Review; integration discovery required | EPIC-004 and ST-013 through ST-016 | Queue ownership, external mapping, and failure behavior. | Complete DISC-007 through DISC-009. |
| Audit and Measurement | Ready for Discovery | ST-004, DEP-008, and risk controls | Events, baselines, access, and retention are unapproved. | Complete DISC-004. |
| Implementation Authorization | Not Approved | Approval Record | Discovery, estimates, capacity, budget, and return decision remain open. | Return for a human decision after discovery. |

## 12. Stage 3 Exit Confirmation

The Engineering Planning stage has both required outputs:

1. [`Canonical Engineering Refinement Package`](stage-3-engineering-refinement-summary.md)
2. [`Engineering Refinement Workbook Map`](stage-3-engineering-refinement-workbook-map.md)

The two artifacts represent the same Product boundary, epics, stories, discovery needs, dependencies, risks, assumptions, deferred work, and open Engineering questions at different levels of structure. Both trace to the [`Approved Product Recommendation`](stage-2-product-recommendation.md).

**Stage 3 status:** Approved With Notes for progression to Executive Communication.

**Not authorized:** Implementation, estimates, capacity, budget, sprint commitments, delivery dates, or production claims.
