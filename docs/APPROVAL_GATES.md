# Approval Gates

AAPOS requires human gates between lifecycle stages.

| Gate ID | Name | Timing | Required Human Authority | Blocks Next Stage |
|---|---|---|---|---|
| `gate.product-discovery.discovery-review` | Discovery Review | After Product Discovery | Product Owner | Yes |
| `gate.product-recommendation.product-approval` | Product Approval | After Product Recommendation | Product Owner | Yes |
| `gate.engineering-planning.engineering-review` | Engineering Review | After Engineering Planning | Engineering and Product Owner | Yes |
| `gate.executive-communication.final-approval` | Final Approval | After Executive Communication | Product Owner | Yes |

## Discovery Review

The Product Owner confirms that the problem is understood well enough to ask stakeholders the right questions or proceed with known assumptions.

## Product Approval

The Product Owner approves Product Intent, priority, MVP scope, out-of-scope boundaries, tradeoffs, assumptions, and success measures.

## Engineering Review

Engineering validates feasibility, dependencies, sequencing, and technical risk. Product confirms Engineering planning has preserved approved Product Intent.

## Final Approval

The Product Owner approves the final communication, decision request, confidence language, and any open-risk framing before it is shared.

## Approval Evidence

Every approval should record:

- artifact reviewed
- decision value
- reviewer name or role
- approval date
- notes
- open assumptions
- open risks
- next action
