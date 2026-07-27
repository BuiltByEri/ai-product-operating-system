# Human Gate Review Guide

Human gates are decision controls, not proofreading steps.

The accountable human does not review an artifact merely to decide whether it looks complete. The reviewer determines whether the evidence justifies the next commitment, what remains uncertain, and exactly what the decision permits.

This guide clarifies the frozen AAPOS `1.0.0` human gate model. It does not add stages, change gate ownership, introduce new decision values, or transfer Product judgment to AI.

## The Human Review Standard

At every gate, the accountable human performs four actions:

1. **Inspect:** verify the artifact, its evidence, assumptions, boundaries, risks, and traceability.
2. **Challenge:** test whether the reasoning is strong enough, whether uncertainty is represented honestly, and whether AI-assisted output has introduced unsupported claims.
3. **Decide:** select an approved AAPOS decision value and state any conditions or blockers.
4. **Record:** preserve the evidence reviewed, decision rationale, conditions, remaining blockers, and next action permitted in the Approval Record.

The human reviewer remains accountable for the decision even when AI assisted with analysis, drafting, comparison, or translation.

## Universal Review Questions

Every gate reviewer should be able to answer:

- What evidence supports this artifact?
- Which statements are facts, assumptions, inferences, open questions, dependencies, or risks?
- What changed since the previous human decision?
- Does the artifact preserve the approved Product boundary?
- Which uncertainty could still change priority, scope, sequencing, feasibility, or risk response?
- Who owns each unresolved blocker or high-risk question?
- Has AI-assisted output introduced invented facts, scope, estimates, architecture, commitments, or confidence?
- What exactly does approval permit next?
- What does approval explicitly not permit?

If the reviewer cannot answer these questions, the artifact is not ready to advance.

## Decision and Status Separation

Status answers where the work is. Decision records what the accountable human judged.

- Use only AAPOS status values: `Not Started`, `In Progress`, `Ready for Review`, `Blocked`, or `Completed`.
- Use only AAPOS decision values: `Approved`, `Approved With Notes`, `Rejected`, `Needs Revision`, `Deferred`, `Human Review Required`, or `Not Applicable`.
- Never use approval language as a status.
- Never treat `Completed` as proof of approval without the corresponding recorded gate decision.

## Gate 1: Discovery Review

**Gate ID:** `gate.product-discovery.discovery-review`  
**Accountable authority:** Product Owner  
**Artifact reviewed:** Discovery Summary

### Review Purpose

Determine whether the problem is understood well enough to seek the right stakeholder input or move into Product Recommendation with explicit assumptions and constraints.

### Inspect

The Product Owner verifies that:

- the problem is stated separately from any proposed solution;
- affected users, workflows, stakeholders, and constraints are visible;
- source-backed facts are distinguishable from stakeholder claims, assumptions, and AI-assisted inferences;
- initial VUED Risk signals use the defined rating scales and explain uncertainty;
- the risk of acting and the risk of not acting are both represented;
- no more than five clarifying questions are included;
- every question could materially change priority, scope, MVP, sequencing, feasibility, or risk response;
- the three highest-leverage questions are identified when access or time is limited;
- information gaps and high-risk unknowns have a known owner or an explicit escalation need; and
- the artifact does not recommend final scope or imply a solution decision.

### Challenge

The Product Owner asks:

- Are we investigating the real problem or validating a solution someone already chose?
- Which fact would most change the next decision if it proved false?
- Are any assumptions being presented with more confidence than the evidence supports?
- Would answering each question change what we do?
- Is a high-risk unknown being deferred without an accountable owner?

### Return or Block When

- The problem remains solution-led or materially ambiguous.
- Facts and assumptions cannot be distinguished.
- Initial VUED Risk signals use unsupported ratings or omit uncertainty.
- Questions are informational but not decision-changing.
- Material stakeholders, constraints, information gaps, or risks are missing.
- A critical or high-risk unknown has no owner or escalation path.

### Decision Boundary

Approval permits Product Recommendation using the reviewed evidence, answers, assumptions, and open gaps.

Approval does not permit final prioritization, MVP commitment, Engineering planning, delivery estimates, budget approval, or implementation.

### Record

Record the evidence reviewed, questions retained or removed, required stakeholder answers, accepted assumptions, open risks, conditions, and next action permitted.

## Gate 2: Product Approval

**Gate ID:** `gate.product-recommendation.product-approval`  
**Accountable authority:** Product Owner  
**Artifact reviewed:** Product Recommendation

### Review Purpose

Determine whether the Product recommendation is evidence-backed, explicit about tradeoffs, and bounded well enough to lock Product Intent before Engineering Planning.

### Inspect

The Product Owner verifies that:

- Product Intent addresses the evidenced problem rather than the original proposed solution;
- VUED Risk ratings and reasoning support the proposed priority and sequence;
- immediate mitigation, Engineering discovery, MVP, and full-solution work are separated;
- MVP scope and out-of-scope boundaries are explicit;
- accepted tradeoffs and deferred work are visible;
- assumptions, dependencies, risks, and confidence are represented honestly;
- success measures are observable and do not invent baselines, targets, or outcomes;
- human ownership, review controls, and return decisions are preserved;
- stakeholder conflict is resolved or explicitly escalated; and
- no Engineering estimate, architecture, capacity, delivery date, or implementation commitment was fabricated.

### Challenge

The Product Owner asks:

- Does the evidence justify this priority, or are we responding to the loudest stakeholder?
- What would we stop or defer by approving this recommendation?
- Is every MVP item necessary to achieve the approved Product Intent?
- Which assumption creates the greatest risk if it is wrong?
- Are success measures evaluating the Product outcome rather than merely shipping output?

### Return or Block When

- Product Intent does not trace to the Discovery Summary.
- VUED Risk reasoning is missing, inconsistent, or falsely precise.
- MVP, discovery, mitigation, and future scope are blended together.
- Out-of-scope boundaries or tradeoffs are hidden.
- Success measures depend on invented baselines or unsupported targets.
- A material risk, dependency, or stakeholder conflict lacks an owner.
- The recommendation contains an unauthorized delivery or implementation commitment.

### Decision Boundary

Approval locks Product Intent, priority, MVP scope, out-of-scope boundaries, accepted tradeoffs, assumptions, and success measures for Engineering translation.

Approval does not authorize Engineering estimates, sprint commitments, budget, capacity, delivery dates, architecture, implementation, or scope expansion.

### Record

Record the evidence reviewed, Product decision rationale, approved boundaries, accepted tradeoffs, conditions, remaining blockers, deferred decisions, and next action permitted.

## Gate 3: Engineering Review

**Gate ID:** `gate.engineering-planning.engineering-review`  
**Accountable authority:** Engineering and Product Owner  
**Artifacts reviewed:** Engineering Refinement Package and Engineering Refinement Workbook Map

### Review Purpose

Determine whether the approved Product recommendation has been translated into traceable Engineering planning without changing Product Intent or manufacturing false readiness.

### Inspect

#### Engineering Inspection

Engineering verifies that:

- technical assumptions are identified rather than presented as facts;
- feasibility questions, data behavior, integrations, access controls, audit needs, and system boundaries are visible;
- business rules, acceptance intent, edge cases, failure behavior, recovery, and operational ownership are sufficiently defined for the stated refinement status;
- dependencies have owners and meaningful lifecycle statuses;
- risks include impact, response, owner, and status;
- sequencing reflects real dependencies rather than an invented delivery plan;
- discovery items and open Engineering questions identify what must be learned before estimation or implementation; and
- no architecture, estimate, capacity, or delivery commitment is implied without Engineering validation.

#### Product Inspection

The Product Owner verifies that:

- every epic, story, dependency, risk, discovery item, and deferred item traces to approved Product Intent;
- MVP and out-of-scope boundaries remain intact;
- Engineering has translated the recommendation rather than reprioritizing or redesigning it;
- Product assumptions and Engineering assumptions remain distinguishable;
- deferred work has not been smuggled into the MVP;
- the readable package and structured Workbook Map represent the same work, IDs, statuses, risks, and open questions; and
- readiness language does not imply approval or implementation authorization.

### Challenge

Engineering and Product ask:

- What remains unknown before this work can be estimated or implemented responsibly?
- Where could failure create unsafe, misleading, duplicated, lost, or unauditable work?
- Has an implementation convenience changed the approved Product outcome or boundary?
- Can every structured record be traced to the approved recommendation?
- Are Product, Engineering, operational, and governance decisions assigned to the correct human owners?

### Return or Block When

- Work cannot be traced to approved Product Intent.
- MVP scope expanded, exclusions disappeared, or deferred work entered the plan.
- Business rules, failure behavior, recovery, dependencies, or open questions are materially incomplete.
- Package and Workbook Map conflict.
- Status and decision semantics are mixed.
- Engineering assumptions are represented as validated facts.
- Estimates, architecture, capacity, or delivery commitments are implied without accountable Engineering review.

### Decision Boundary

Approval permits the reviewed Engineering planning artifacts to inform Executive Communication and any explicitly approved bounded discovery.

Approval does not authorize implementation, estimates, budget, capacity, sprint commitment, delivery dates, production rollout, or a change to Product Intent.

### Record

Record the Product and Engineering evidence reviewed, scope-integrity result, feasibility conditions, discovery blockers, risk owners, disagreements, conditions, and next action permitted.

## Gate 4: Final Approval

**Gate ID:** `gate.executive-communication.final-approval`  
**Accountable authority:** Product Owner  
**Artifact reviewed:** Engineering Readiness Review

### Review Purpose

Determine whether the final communication accurately translates the approved Product and Engineering work into a clear, audience-appropriate decision request.

### Inspect

The Product Owner verifies that:

- the intended audience and requested business decision are unmistakable;
- the recommendation matches the approved Product Recommendation and Engineering planning artifacts;
- evidence, confidence, assumptions, dependencies, blockers, and risks are represented honestly;
- readiness, Product Owner approval, leadership direction, and implementation authorization remain distinct;
- deferred and out-of-scope work remain visible where relevant to the decision;
- technical detail is translated into plain language without changing meaning;
- timing language distinguishes a decision deadline from discovery, refinement, or delivery duration;
- no confidential, client-identifying, internal, or unsupported information is exposed;
- no fictional or proposed outcome is presented as a production result; and
- the Approval Record is complete before the communication is shared.

### Challenge

The Product Owner asks:

- Could the audience misunderstand what is approved or what remains unapproved?
- Is any uncertainty hidden because it weakens the recommendation?
- Does the decision request ask for something different from the reviewed Product boundary?
- Is a deadline being interpreted as a delivery promise?
- Does the communication imply implementation readiness that the Engineering review did not establish?

### Return or Block When

- The requested decision is unclear or assigned to the wrong authority.
- The communication differs materially from approved upstream artifacts.
- Confidence, risk, blockers, or deferred work are obscured.
- A business direction is presented as an AAPOS gate outcome.
- A decision deadline implies unapproved work duration or delivery timing.
- Confidential information or unsupported results appear.
- The Approval Record lacks the required decision evidence.

### Decision Boundary

Final Approval permits the reviewed communication and decision request to be shared with its intended audience.

Final Approval does not record the audience's subsequent business decision and does not authorize implementation, budget, capacity, estimates, or delivery.

### Record

Record the source artifacts reviewed, communication changes required, confidence assessment, material risks, conditions, remaining blockers, audience, decision requested, and next action permitted.

## Approval Record Standard

For every gate outcome, record:

- gate ID and gate name;
- artifact reviewed;
- accountable reviewer;
- decision value and date;
- decision rationale;
- evidence reviewed;
- review criteria satisfied;
- conditions attached to approval;
- return reason when revision is required;
- remaining blockers;
- next action permitted; and
- notes that must travel with the downstream artifact.

An approval record is evidence of human judgment. It should make clear not only that a decision occurred, but why the decision was defensible and what boundary it created.

## Escalation

Escalate before downstream commitment when:

- a critical or high-risk question lacks an accountable owner;
- evidence conflicts materially across artifacts;
- stakeholder authorities disagree on scope or risk acceptance;
- legal, compliance, security, safety, privacy, or financial authority is required;
- Product and Engineering disagree about feasibility or scope integrity; or
- the requested decision exceeds the reviewer's authority.

Escalation is not approval. The artifact remains `Blocked` or receives the appropriate human decision until the accountable authority responds.
