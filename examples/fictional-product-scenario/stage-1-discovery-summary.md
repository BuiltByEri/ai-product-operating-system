# Stage 1: Discovery Summary

This artifact is fictional and demonstrates AAPOS Product Discovery. It does not recommend a solution.

## Discovery Objective

Determine what must be learned before the Product Owner decides whether the first investment should improve intake, support dispatcher decisions, automate assignments, improve status visibility, or stop.

## Initial Problem Framing

The request is framed as an AI auto-dispatch project. The available evidence suggests at least three different problems may be collapsed into that request:

- requests reach dispatch without enough information;
- dispatchers make decisions using fragmented or stale data; and
- customers and account teams cannot see why work is waiting.

Choosing a solution before separating those problems could automate the wrong bottleneck.

## Decision-Changing Clarifying Questions

### 1. Where does the avoidable delay actually occur: before a request is complete, while a dispatcher evaluates it, or after an assignment is made?

**Why it matters:** “Dispatch is slow” is not a precise problem. If incomplete intake causes most delay, automatic assignment will not solve the primary bottleneck.

**Decision influenced:** Whether the MVP begins with guided intake, dispatcher decision support, or assignment automation.

### 2. Which request categories can be recommended safely, and which must always require dispatch-supervisor approval?

**Why it matters:** The fictional policy requires human approval for safety-sensitive and after-hours work. Treating all requests the same would either weaken controls or make the workflow unnecessarily restrictive.

**Decision influenced:** MVP eligibility rules, human review gates, and whether autonomous dispatch belongs in scope at all.

### 3. Are technician availability, certification, and location data current and reliable enough to support an assignment recommendation?

**Why it matters:** A fast recommendation based on stale certification or unreliable location data may be worse than a slower human decision.

**Decision influenced:** Engineering discovery, confidence level, data dependencies, and whether recommendations may be presented as decision-ready.

### 4. What must happen when a recommendation is incomplete, conflicting, rejected, or unavailable?

**Why it matters:** Operations needs a safe fallback. Without explicit exception handling, work could disappear from view or appear assigned when no accountable person accepted it.

**Decision influenced:** Exception-queue scope, status model, audit requirements, and rollout controls.

### 5. Is the four-week pressure tied to a contractual customer outcome, or to an internal peak-planning decision?

**Why it matters:** A decision deadline should not be converted into a delivery promise. The distinction changes the appropriate commitment.

**Decision influenced:** Urgency rating, stakeholder communication, and whether the next commitment is discovery, refinement, or implementation.

## If Only Three Questions Can Be Asked

Ask questions 1, 2, and 3 first.

Together they establish the actual bottleneck, the non-negotiable human-control boundary, and whether the required data can support the proposed decision. Failure handling and deadline interpretation remain important, but they should not be used to refine an automation concept that has not yet passed the first three gates.

## Fictional Stakeholder Answers

| Question | Answer Received | Evidence Strength | What Changed |
|---|---|---|---|
| Where does delay occur? | The reviewed sample shows clarification before assignment is common. Missing access windows and equipment identifiers appear most often. Dispatcher decision time is not measured. | Medium | Intake completeness becomes a first-order Product problem. Auto-dispatch is no longer the assumed MVP. |
| Which work needs human approval? | Safety-sensitive and after-hours requests require supervisor approval. Standard daytime requests may be eligible for recommendation support if required inputs are complete. | High | Human approval is a mandatory control. Autonomous dispatch is excluded from the first release. |
| Is the data reliable enough? | Shift availability is current, certification data is nightly, and technician location is optional. | High | Recommendations cannot claim real-time eligibility. Data freshness must be visible and certification validation is an Engineering gate. |
| What is the fallback? | Operations requires every unresolved request to return to a named queue with a visible reason and owner. | High | Exception handling and auditability become MVP capabilities, not operational afterthoughts. |
| What drives the deadline? | The four-week date supports internal peak planning. No customer contract requires production delivery by that date. | High | Urgency remains near-term, but the recommended commitment is a direction on whether to begin bounded discovery, not a commitment to its duration or to delivery. |

## Known Facts After Clarification

- Incomplete request information is a demonstrated source of delay in the fictional sample.
- Safety-sensitive and after-hours assignments require human approval.
- The scheduling application remains the assignment system of record.
- Certification data is not current enough to be treated as real-time.
- Every unresolved request requires a visible manual fallback.
- The four-week date is a decision deadline, not a production launch date.

## Remaining Assumptions and Blind Spots

- The sample does not prove which intervention will produce the greatest operational improvement.
- Dispatcher decision time and incorrect-assignment frequency have no validated baseline.
- The feasibility of improving certification freshness is unknown.
- Recommendation explanation requirements have not been tested with dispatchers.
- Customer status needs are represented by internal stakeholders, not direct research.

## Discovery Gate

**Human decision:** Approved With Notes.

**Approved direction for the next stage:** Compare intake completeness, governed dispatcher recommendations, status visibility, and autonomous assignment using VUED Risk. Do not assume AI assignment is the preferred solution.

**Held at this gate:** Delivery dates, budget, autonomous dispatch, production metrics, and technical design.

```text
Drafted with AI assistance: Yes
Human decision owner: Fictional Product Owner
Gate decision: Approved With Notes
Human review status: Demonstrated for fictional example
Open assumptions: Baselines, certification freshness, dispatcher explanation needs
Open risks: Automating the wrong bottleneck; stale data influencing assignments
```
