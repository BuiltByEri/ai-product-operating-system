# VUED + Risk Framework

VUED + Risk is the decision framework used in Product Discovery and Product Recommendation.

It separates five dimensions that are often collapsed into one priority score.

## Value

Consider:

- user impact
- customer experience
- revenue and retention
- operational efficiency
- strategic alignment
- business outcome
- scale of impact

Rate Value as `High`, `Medium`, or `Low` and explain the rating.

## Urgency

Consider:

- hard deadlines
- customer launch dates
- regulatory dates
- production impact
- escalations
- time-sensitive revenue
- cost of delay
- whether the issue is worsening

Rate Urgency as `Immediate`, `Near-Term`, `Planned`, or `Low` and explain the rating.

Urgency is not the same as Value. A loud or time-sensitive request may still create limited value.

## Effort

Consider:

- Engineering effort
- Design effort
- cross-team coordination
- unknowns
- testing complexity
- data or migration work
- implementation risk

Rate Effort as `Low`, `Medium`, `High`, or `Unknown`.

Do not invent estimates. State when Engineering discovery is required.

## Dependencies

Consider:

- upstream and downstream systems
- shared services
- compliance review
- data contracts
- architecture decisions
- vendor dependencies
- other teams
- sequencing constraints

Rate Dependencies as `Low`, `Medium`, `High`, or `Unknown`.

## Risk

Risk is a required, separate overlay.

Consider:

- customer risk
- revenue risk
- compliance risk
- fraud or security risk
- operational risk
- delivery risk
- platform stability
- reputational risk
- risk of doing nothing
- risk of moving too quickly

Rate Risk as `Critical`, `High`, `Medium`, or `Low`.

Always explain:

1. the risk of acting
2. the risk of not acting

## Prioritization Principles

- Do not prioritize the loudest stakeholder by default.
- Do not automatically prioritize revenue over compliance, stability, or user harm.
- Do not confuse urgency with value.
- Do not treat high effort as a reason to avoid high-value work.
- Do not create false precision when estimates are unavailable.
- Identify smaller, reversible steps that create value or reduce uncertainty.
- Separate immediate mitigation, Engineering discovery, MVP delivery, and the full solution.
- Make dependencies visible.
- Protect the original Product intent.
- Recommend a sequence, not only a ranked list.

## Expected Result

VUED + Risk should produce a recommendation that is understandable, defensible, explicit about uncertainty, and realistic about both Product value and delivery constraints.
