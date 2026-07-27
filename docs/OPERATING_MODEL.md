# Operating Model

AAPOS moves work through four frozen stages. Each stage has a defined input, output, artifact owner, and human gate.

```text
Product Discovery -> Product Recommendation -> Engineering Planning -> Executive Communication
```

## Stage 1: Product Discovery

Reference implementation: [`skills/claude/vued-clarifying-questions.md`](../skills/claude/vued-clarifying-questions.md)

Input:

- product use case, scenario, request, risk, or opportunity

Output:

- plain-language problem breakdown
- assumptions
- decision-changing clarifying questions
- initial risks
- information gaps

Human gate:

The Product Owner reviews discovery completeness, removes low-value questions, confirms assumptions, and decides what should be taken to stakeholders.

## Stage 2: Product Recommendation

Reference implementation: [`skills/claude/vued-product-plan.md`](../skills/claude/vued-product-plan.md)

Input:

- original use case
- discovery output
- stakeholder responses where available

Output:

- Product Intent
- VUED + Risk analysis
- MVP recommendation
- tradeoffs
- success measures
- Approved Product Recommendation

Human gate:

The Product Owner approves priority, scope, MVP, assumptions, success measures, and accepted tradeoffs before Engineering planning begins.

## Stage 3: Engineering Planning

Reference implementation: [`skills/codex/engineering-refinement-planner.md`](../skills/codex/engineering-refinement-planner.md)

Input:

- Approved Product Recommendation

Output:

- Engineering Refinement Package
- Engineering Refinement Workbook Map
- epics
- stories
- Engineering discovery
- dependencies
- risks
- delivery strategy
- readiness assessment

Boundary rule:

The Approved Product Recommendation is locked. Engineering planning may identify feasibility questions and technical unknowns, but it may not reprioritize Product, redesign scope, expand the MVP, or introduce new Product requirements.

Human gate:

Engineering validates feasibility, assumptions, dependencies, sequencing, and technical risk. Product confirms that intent and scope have not drifted.

## Stage 4: Executive Communication

Reference implementation: [`skills/claude/engineering-readiness-review.md`](../skills/claude/engineering-readiness-review.md)

Input:

- Approved Product Recommendation
- Engineering Refinement Package
- Engineering Refinement Workbook Map

Output:

- Engineering Readiness Review
- speaker notes
- executive story
- stakeholder communication
- decision request

Translation rule:

The Engineering Refinement Package is research. The Workbook Map is the implementation reference. The review is the story.

Translate. Do not transcribe.

Human gate:

The Product Owner reviews the final artifact, verifies that Engineering detail has been translated into business language, confirms the recommendation, and approves the final communication.
