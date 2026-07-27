# Fictional Scenario: Wayfinder Dispatch Recovery Workspace

This scenario is entirely fictional and exists only to demonstrate AAPOS. Every organization, person, system, number, constraint, and finding below was invented for this example.

## Initial Request

Wayfinder is a fictional commercial facilities-maintenance company serving multi-site businesses. Leadership asks Product to “use AI to automate technician dispatch” before the next seasonal demand increase.

The request appears straightforward: assign the right technician faster. The operating problem is not yet clear enough to justify that solution.

## Business Context

Urgent repair requests enter through a customer portal, shared email inbox, and phone queue. A dispatcher must confirm the site, affected equipment, urgency, access window, safety conditions, and required technician certification before assigning work.

When information is missing, Operations contacts the requester. Dispatchers then compare a scheduling application with separate certification records and local team knowledge. Account managers frequently ask for status because the customer portal does not show why a request is waiting.

Leadership sees the manual work and assumes automatic dispatch is the fastest answer. Operations wants fewer clarification calls. Account Management wants faster customer updates. Technicians want accurate job details before accepting work. The Safety Lead requires supervisor approval for safety-sensitive assignments.

## Decision Pressure

Leadership wants a direction within four weeks so the operating plan for the seasonal peak can be finalized. This is a decision deadline, not an approved delivery date.

No budget, implementation estimate, or production commitment has been approved.

## Fictional Evidence Packet

The Product Owner receives the following invented inputs:

- A manual review of 120 recent requests found that 46 required at least one clarification before assignment.
- Missing site-access windows and equipment identifiers appeared most frequently in delayed requests.
- Three service categories represented most of the reviewed delays, but the sample is too small to establish a production baseline.
- The scheduling application contains current shift availability, but technician certification data is synchronized nightly.
- Technician location is optional and is not reliable enough for routing decisions.
- Safety-sensitive and after-hours work requires dispatch-supervisor approval under the fictional operating policy.
- The customer portal can display request status but does not explain whether work is waiting for information, review, or assignment.
- No validated measure exists for incorrect assignments, avoidable travel, or dispatcher decision time.

These inputs are evidence for the fictional exercise, not claims about a real operation.

## Constraints

- Safety-sensitive assignments cannot bypass human approval.
- A recommendation must not represent stale certification data as current.
- The current scheduling application remains the system of record for assignments.
- The peak-planning decision is four weeks away, but delivery capacity has not been reserved.
- Customer-facing status cannot expose internal safety notes or employee data.
- Any failure must return work to a visible manual queue.
- Product cannot promise autonomous dispatch before feasibility and operating-policy review.

## Initial Unknowns

- Whether incomplete intake or dispatcher decision time causes most avoidable delay.
- Which request categories are safe candidates for recommendation support.
- Whether certification data can be made current enough for assignment decisions.
- What evidence a supervisor needs to approve a recommendation.
- Whether account teams need faster assignment or simply more accurate status.
- What baseline should define a better dispatch outcome.

## Product Owner Challenge

The Product Owner must determine whether Wayfinder should:

1. automate technician assignment;
2. improve request completeness before assignment;
3. create a governed recommendation workflow for dispatchers;
4. improve status visibility while deeper discovery continues; or
5. decline the initiative until stronger evidence exists.

AAPOS is used to clarify the decision, not to justify the requested solution.
