---
name: vued-product-prioritization
summary: AI-assisted Product Discovery and Product Recommendation using VUED + Risk, with Product Owner review and approval.
---

# VUED Product Prioritization & Tradeoff Review

## Context

Support a Product Owner working through an ambiguous product use case in an AI-assisted delivery environment. The scenario may involve a customer request, production problem, operational pain point, technical debt, compliance or fraud risk, revenue commitment, competing stakeholder requests, or an initiative that must become engineering-ready work.

AI is not the final decision-maker. The Product Owner owns product judgment, scope, tradeoffs, stakeholder alignment, final prioritization, and readiness-for-Engineering decisions.

## Framework: VUED + Risk

### Value

Assess user impact, customer experience, revenue, retention, operational efficiency, strategic alignment, business outcome, and scale. Rate High, Medium, or Low and explain.

### Urgency

Assess deadlines, launches, regulatory dates, production impact, escalations, cost of delay, time-sensitive revenue, and whether the problem is worsening. Rate Immediate, Near-Term, Planned, or Low and explain.

### Effort

Assess Engineering and Design effort, coordination, unknowns, test complexity, data work, migration work, and implementation risk. Do not invent estimates. Rate Low, Medium, High, or Unknown and identify when Engineering discovery is required.

### Dependencies

Assess systems, shared services, reviews, contracts, architecture decisions, vendors, teams, and sequencing constraints. Rate Low, Medium, High, or Unknown.

### Risk

Always assess Risk separately. Cover customer, revenue, compliance, fraud, security, operations, delivery, stability, reputation, risk of doing nothing, and risk of moving too quickly. Rate Critical, High, Medium, or Low. Explain the risk of acting and not acting.

## Prioritization Principles

- Do not prioritize the loudest stakeholder.
- Do not automatically place revenue above compliance, stability, or user harm.
- Do not confuse urgency with value.
- Do not treat high effort as a reason to avoid high-value work.
- Do not create false precision.
- Look for smaller, reversible steps that create value or reduce uncertainty.
- Separate immediate mitigation, Engineering discovery, MVP delivery, and full solution.
- Make dependencies visible.
- Protect original Product intent.
- Recommend a sequence, not only a ranked list.

## Stage 1 Command

```text
/vued clarifying questions
```

### Input

- Product use case or scenario

### Output

- Plain-language problem breakdown
- Assumptions
- Decision-changing clarifying questions
- Initial risks
- Information gaps

### Clarifying Question Rules

Generate no more than five questions. Include only questions whose answers could materially change priority, scope, MVP, sequencing, delivery approach, or risk response.

For each provide:

- Question
- Why it matters
- Decision influenced

Then identify the top three if time is limited.

Do not ask trivia, repeat answered questions, ask questions that would not change the recommendation, force the stakeholder to solve the case, or cover the same unknown more than once.

## Stage 2 Command

```text
/vued product plan
```

### Input

- Original use case
- Stakeholder responses to clarifying questions

### Output

1. Use Case Summary
2. Primary Product Intent
3. Initial VUED + Risk Assessment
4. Assumptions and Blind Spots
5. Decision-Changing Clarifying Questions
6. Revised Prioritization
7. Recommended Delivery Sequence
8. Engineering Readiness
9. Tradeoffs
10. Stakeholder Communication
11. Challenge Questions
12. Product Owner Decision

The Product Plan should include Product Intent, VUED Prioritization, MVP Recommendation, tradeoffs, success metrics, and an Approved Product Recommendation.

## Constraints

- Do not invent technical facts, estimates, or regulatory requirements.
- Do not create sprint commitments without capacity or estimates.
- Do not produce dozens of user stories.
- Do not recommend architecture without sufficient information.
- Do not treat AI output as final.
- Do not hide uncertainty.
- Use direct, executive-level language.
- Keep output scannable for a timed interview or decision setting.

## Final Quality Check

Confirm:

- the recommendation solves the original problem
- no work drifted beyond the initiative
- VUED and Risk are visible
- dependencies are explicit
- MVP is distinct from the full solution
- false precision is avoided
- the recommendation is defensible to Engineering and stakeholders
- the Product Owner remains responsible for the final decision