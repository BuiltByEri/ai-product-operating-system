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

| Product Intent | MVP Scope | Out of Scope | Product Assumption | Engineering Assumption | Source Artifact |
|---|---|---|---|---|---|
| Help dispatchers make better-supported assignment decisions through complete intake, visible eligibility evidence, required human approval, accountable exceptions, and safe status. | Guided category-specific intake; required-field and completeness validation; human-approved technician recommendations for selected standard categories after discovery gates pass; visible evidence and freshness warnings; dispatcher approval for standard assignments; supervisor approval for protected work; accountable exception reasons and a named manual queue; audit events; customer-safe request status; the scheduling application remains the assignment system of record. | Autonomous or silent assignment; removal of dispatcher accountability; recommendations based on unverified location; travel optimization; workforce scoring; automated approval of protected work; configurable rule administration; full dispatch analytics; broader service-category expansion; unapproved dates, budgets, capacity, or production outcomes. | Selected standard categories can use stable intake rules; improving completeness may reduce preventable clarification; a governed recommendation workspace may reduce fragmented decision work without transferring accountability. | Current availability can be read; certification freshness can be improved or safely gated; approved roles can be enforced; scheduling acceptance and failure can be represented distinctly; one accountable queue can own unresolved work. | [`Approved Product Recommendation`](stage-2-product-recommendation.md); [`Canonical Engineering Refinement Package`](stage-3-engineering-refinement-summary.md); [`Human Approval Record`](approval-record.md) |

**Commitment boundary:** Discovery and refinement proceed only after the relevant human decision. Duration, capacity, estimates, budget, delivery timing, and implementation remain uncommitted.

## 3. Epics Tab

| Epic ID | Epic Name | Business Goal | Business Value | Dependencies | Risks | Open Questions | Refinement Status |
|---|---|---|---|---|---|---|---|
| EPIC-001 | Eligibility, Data, and Workflow Discovery | Determine whether governed recommendations can be safe, current, explainable, and usable. | Resolves the largest feasibility and governance unknowns before build commitment. | DEP-001, DEP-002, DEP-004, DEP-008 | RISK-001, RISK-002, RISK-003, RISK-008 | OQ-001, OQ-002, OQ-003, OQ-009 | In Progress |
| EPIC-002 | Guided Request Intake and Completeness | Reduce preventable clarification before dispatch. | Addresses the strongest fictional evidence and improves manual and supported dispatch. | DEP-001, DEP-003, DEP-008 | RISK-006 | OQ-004, OQ-009 | Ready for Review |
| EPIC-003 | Governed Dispatcher Recommendation Workspace | Consolidate assignment evidence without transferring accountability to AI. | May reduce decision friction while preserving human and safety controls. | DEP-001, DEP-002, DEP-004, DEP-005, DEP-008 | RISK-001, RISK-002, RISK-003, RISK-004, RISK-009 | OQ-001, OQ-002, OQ-003, OQ-005, OQ-006, OQ-009 | Blocked |
| EPIC-004 | Exceptions, Status, and Operational Recovery | Keep every unresolved request visible, owned, and understandable. | Creates the control layer for safe recommendation support and reduces status chasing. | DEP-004, DEP-006, DEP-007, DEP-008 | RISK-004, RISK-005, RISK-007 | OQ-006, OQ-007, OQ-008, OQ-009 | Ready for Review |

## 4. Stories Tab

| Story ID | Epic ID | User Story | Acceptance Intent | Business Rules | Edge or Error Behavior | Dependencies | Refinement Status |
|---|---|---|---|---|---|---|---|
| ST-001 | EPIC-001 | As a Product Owner, I want recommendation-eligible and protected service categories defined so the MVP has a safe boundary. | Approved standard categories and protected exclusions are explicit. | Only approved standard categories may enter recommendation support; protected categories require the approved human path. | Unknown, conflicting, or newly introduced categories remain in manual handling until reviewed. | Operations and Safety policy review | In Progress |
| ST-002 | EPIC-001 | As a dispatcher, I want technician evidence to show its source and freshness so I can judge whether it is reliable. | Availability, certification, source, timestamp, and failure states are documented. | Evidence must come from an approved source and meet the approved freshness threshold before it supports eligibility. | Missing, stale, delayed, or conflicting evidence blocks the recommendation and routes the request to manual review. | Technician data and scheduling interfaces | In Progress |
| ST-003 | EPIC-001 | As a dispatcher, I want recommendation rationale and uncertainty made visible so I can make an accountable decision. | Required rationale, warnings, approvals, and override evidence are understood. | The interface must show decision-relevant evidence without representing the recommendation as a final assignment. | Insufficient rationale or unresolved uncertainty prevents recommendation-ready status and preserves the manual path. | Dispatcher participation | In Progress |
| ST-004 | EPIC-001 | As a governance reviewer, I want an audit and baseline model so later claims can be evaluated against approved evidence. | Required events and pre-rollout measures are approved before outcome targets. | Events, owners, access, retention, and baseline definitions require human approval before outcome reporting. | Missing events or baselines block performance claims but must not hide operational failures. | Product, Engineering, Operations, and Safety review | In Progress |
| ST-005 | EPIC-002 | As a requester, I want category-specific guidance so I can provide the information dispatch needs the first time. | Requesters see required information for the selected category. | Required fields and conditional prompts must trace to an approved category rule and use customer-safe language. | If the category is unknown or changes mid-entry, the system must re-evaluate requirements without silently discarding entered information. | ST-001 and portal capability | Ready for Review |
| ST-006 | EPIC-002 | As a dispatcher, I want completeness checked before recommendation support so incomplete requests are not presented as ready. | Incomplete work cannot appear recommendation-ready. | All approved required fields must be valid before recommendation eligibility; urgent handling follows a separately approved path. | Validation failures keep the request editable and visible with specific reasons rather than dropping or falsely advancing it. | Field ownership and status model | Ready for Review |
| ST-007 | EPIC-002 | As a requester, I want approved existing information reused so I do not re-enter reliable data. | Existing values are reused only when source and conflict behavior are approved. | Reused values must show their authoritative source and may not silently overwrite newer user-confirmed information. | Missing, stale, or conflicting values require confirmation or re-entry before they influence eligibility. | Portal and account data access | In Progress |
| ST-008 | EPIC-003 | As a dispatcher, I want to see only eligible technician recommendations so unsafe candidates are excluded. | Only candidates satisfying approved eligibility rules are presented. | Every candidate must satisfy approved category, availability, certification, freshness, and protected-work rules. | If no candidate qualifies or eligibility cannot be confirmed, show no recommendation and route the request to the named manual queue. | ST-001 and ST-002 | Blocked |
| ST-009 | EPIC-003 | As a dispatcher, I want recommendation evidence and freshness explained so I can assess confidence. | Dispatchers can see relevant evidence, source, age, and uncertainty. | Explanations must distinguish known evidence from assumptions and may not imply unsupported certainty. | Stale or incomplete evidence displays a warning and prevents recommendation-ready status when it violates the approved threshold. | ST-002 and ST-003 | Blocked |
| ST-010 | EPIC-003 | As a dispatcher, I want assignment to require my explicit approval so accountability remains human. | No standard assignment is recorded without explicit dispatcher action. | A recommendation is never an assignment; only an authorized dispatcher action may initiate the scheduling write. | A missing, duplicate, expired, or failed approval leaves the request unassigned and returns it to the manual recovery path. | Scheduling interface and audit model | Ready for Review |
| ST-011 | EPIC-003 | As a supervisor, I want protected work to require my approval so safety controls cannot be bypassed. | Protected work cannot be assigned without the required supervisor action. | Safety-sensitive and after-hours categories require an authorized supervisor decision in addition to dispatcher action. | Missing role permission, expired approval, or category conflict blocks assignment and records the reason. | Safety policy and role model | Ready for Review |
| ST-012 | EPIC-003 | As a dispatcher, I want to override or reject a recommendation with a reason so human judgment remains visible. | Human overrides and rejections retain an approved reason and actor. | Override and rejection records must capture actor, time, recommendation context, and an approved reason without creating employee scoring. | Unavailable reason codes allow an approved free-text fallback; audit failure blocks completion of the action. | ST-003 and audit model | Blocked |
| ST-013 | EPIC-004 | As an Operations owner, I want unresolved work routed to one accountable queue so it cannot disappear. | Every unresolved request has a visible reason, owner, and manual path. | Each unresolved state maps to one named owner and queue with deduplication and retry rules. | Routing failure, duplicate delivery, or an unavailable owner keeps the request visible, alerts Operations, and preserves the original reason. | Operations workflow | Ready for Review |
| ST-014 | EPIC-004 | As a customer or account partner, I want an accurate safe status so I understand progress without seeing restricted details. | External viewers see accurate status without restricted internal details. | External status must use the approved projection and never expose safety notes, employee data, recommendation detail, or unsupported completion promises. | Unmapped or conflicting internal states fall back to an approved neutral status and trigger internal review. | Information-boundary approval | Ready for Review |
| ST-015 | EPIC-004 | As a dispatcher, I want failed recommendation or scheduling actions to return safely to manual work so false assignments cannot occur. | Failed work returns to a manual path without appearing assigned. | Assignment is confirmed only after the system of record acknowledges the write; retries must be idempotent. | Timeout, rejection, partial failure, duplicate request, or conflicting update keeps the request unassigned and alerts the named queue owner. | Scheduling and recommendation interfaces | Blocked |
| ST-016 | EPIC-004 | As an authorized reviewer, I want the complete decision history so recommendations and human actions are auditable. | Authorized reviewers can trace evidence, recommendation, human action, assignment, and exception outcome. | Audit events must retain approved actors, timestamps, evidence references, decisions, outcomes, access controls, and retention rules. | Event-write failure blocks completion where required, preserves operational state, and alerts the audit owner without exposing restricted data. | ST-004 | Blocked |

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
| RISK-008 | All | Four-week planning pressure becomes an unsupported delivery promise. | Medium | Medium | Communicate decision, discovery, and delivery commitments separately. | Product Owner and Leadership | Open |
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
| Product Boundary | Completed | Approved Product Recommendation and Approval Record | None for the Product boundary; open assumptions remain for Engineering discovery. | Preserve the approved boundary during discovery. |
| Guided Intake | Ready for Review | EPIC-002 and ST-005 through ST-007 | Category fields and ownership are open. | Run DISC-005. |
| Recommendation Workspace | Blocked | EPIC-003 and ST-008 through ST-012 | Eligibility, freshness, explanation, roles, and scheduling behavior remain unresolved. | Complete DISC-001 through DISC-003, DISC-006, and DISC-007. |
| Exceptions and Status | Ready for Review | EPIC-004 and ST-013 through ST-016 | Queue ownership, external mapping, and integration-failure behavior remain unresolved. | Review the structured rules, then complete DISC-007 through DISC-009. |
| Audit and Measurement | Not Started | ST-004, DEP-008, and risk controls | Events, baselines, access, and retention are unapproved. | Complete DISC-004. |
| Implementation Authorization | Blocked | Approval Record | Discovery, estimates, capacity, budget, and the return decision remain open. | Return for a human decision after discovery. |

## 12. Stage 3 Exit Confirmation

The Engineering Planning stage has both required outputs:

1. [`Canonical Engineering Refinement Package`](stage-3-engineering-refinement-summary.md)
2. [`Engineering Refinement Workbook Map`](stage-3-engineering-refinement-workbook-map.md)

The two artifacts represent the same Product boundary, epics, stories, discovery needs, dependencies, risks, assumptions, deferred work, and open Engineering questions at different levels of structure. Both trace to the [`Approved Product Recommendation`](stage-2-product-recommendation.md).

**Stage 3 lifecycle status:** Completed.

**Engineering Review decision:** Approved With Notes for progression to Executive Communication.

**Not authorized:** Implementation, estimates, capacity, budget, sprint commitments, delivery dates, or production claims.
