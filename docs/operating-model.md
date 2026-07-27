# Operating Model

AAPOS moves work through four stages. Each stage has a defined purpose, input, output, and human review gate.

## Stage 1: Product Discovery

**Reference implementation:** Claude, `/vued clarifying questions`

**Input**

- Product use case or scenario

**Output**

- Plain-language problem breakdown
- Assumptions
- Decision-changing clarifying questions
- Initial risks
- Information gaps

**Human Review Gate**

The Product Owner reviews discovery completeness, removes low-value questions, confirms assumptions, and decides what should be taken to stakeholders.

## Stage 2: Product Recommendation

**Reference implementation:** Claude, `/vued product plan`

**Input**

- Original use case
- Stakeholder responses to clarifying questions

**Output**

- Product Intent
- VUED Prioritization
- MVP Recommendation
- Tradeoffs
- Success Metrics
- Approved Product Recommendation

**Human Approval Gate**

The Product Owner approves priority, scope, MVP, assumptions, success measures, and accepted tradeoffs before Engineering planning begins.

## Stage 3: Engineering Planning

**Reference implementation:** Codex, `engineering-refinement-planner`

**Input**

- Approved Product Recommendation

**Output**

- Canonical Engineering Refinement Package
- Engineering Refinement Workbook
- Epics
- Stories
- Engineering Discovery
- Dependencies
- Risks
- Delivery Strategy
- Readiness Assessment

**Boundary rule**

The Approved Product Recommendation is locked. Engineering planning may identify feasibility questions and technical unknowns, but it may not reprioritize Product, redesign scope, expand the MVP, or introduce new Product requirements.

**Human + Engineering Review Gate**

Engineering validates feasibility, assumptions, dependencies, sequencing, and technical risk. Product confirms that intent and scope have not drifted.

## Stage 4: Executive Communication

**Reference implementation:** Claude, `engineering-readiness-review`

**Input**

- Approved Product Recommendation
- Canonical Engineering Refinement Package
- Engineering Refinement Workbook

**Output**

- Engineering Readiness Review Presentation
- Speaker Notes
- Executive Story
- Stakeholder Communication
- Decision Request

**Translation rule**

The Engineering Refinement Package is research. The Workbook is the implementation reference. The presentation is the story.

Translate. Do not transcribe.

**Human Final Approval**

The Product Owner reviews every slide, verifies that Engineering detail has been translated into business language, confirms the recommendation, and approves the final communication.