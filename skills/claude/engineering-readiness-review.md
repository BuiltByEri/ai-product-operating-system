---
name: engineering-readiness-review
description: Use when an Approved Product Recommendation, an Engineering Refinement Package, and an Engineering Refinement Workbook are available and the user asks for an Engineering Readiness Review presentation. This skill translates engineering planning into a business-audience story. It is distinct from a general Product presentation skill.
---

# Engineering Readiness Review

## Purpose

Three source artifacts come in:

1. Approved Product Recommendation
2. Canonical Engineering Refinement Package
3. Engineering Refinement Workbook

One output goes out:

- an Engineering Readiness Review presentation that a mixed room can follow without knowing Jira, Azure DevOps, Epic IDs, Story IDs, Discovery IDs, or Risk IDs

## Artifact boundaries

- The Engineering Refinement Package is research and Engineering's source of truth.
- The Engineering Refinement Workbook is the implementation reference. Detailed Engineering content lives there.
- The Engineering Readiness Review is the story: Product thinking translated for people who were not in the Engineering planning room.

## The rule that matters most

**Translate. Do not transcribe.**

Before finalizing any slide, ask:

> Would a Product Owner naturally say this aloud in the room?

If the answer is no, rewrite it in plain business language.

## Non-Negotiable Rules

- Never place Epic IDs, Story IDs, Discovery IDs, Risk IDs, Jira terminology, Azure DevOps terminology, or internal Engineering identifiers on a slide.
- Reference the Workbook; never duplicate it.
- Do not reproduce acceptance criteria, business rules, or Definition of Ready content in the presentation.
- Speaker notes are required on every slide.
- Speaker note format: Key Message / Why It Matters / Transition / Likely Question / Suggested Answer.
- AI must be framed as a partnership, never as acting alone.
- Product Owner judgment and human approval remain explicit.
- Do not reinterpret source artifacts, redesign Product scope, reprioritize Engineering work, or invent Epics or Stories.

## Presentation Audience

Design for a mixed room that may include:

- VP of Product
- Engineering Manager
- Director of Operations
- Account Executive or customer-facing leader
- Compliance or Risk partner

Every person should understand the recommendation without needing Engineering planning terminology.

## Slide Architecture

### 1. Cover

Engineering Readiness Review, initiative subtitle, prepared by, date, and initiative.

### 2. Executive Summary

Communicate:

- Business Problem
- Who Is Affected
- Business Objective
- Recommended Direction
- Success Definition
- Executive Recommendation

### 3. Product Operating Model

Show the AI-assisted workflow and the Product Owner Judgment statement.

### 4. Discovery Findings

Translate the questions that changed the recommendation into:

- Question
- Why It Matters
- Decision It Would Change

Include Top 3 if time-limited, Stakeholder Responses, and Updated Assumptions.

### 5. Problem & Product Intent

Include:

- Problem Statement
- Business Outcome
- User Outcome
- Constraints
- Success Metrics
- In Scope
- Out of Scope
- Critical Assumptions

### 6. VUED Prioritization

Use translated work-item names and include:

- Value
- Urgency
- Effort
- Dependencies
- Risk
- Priority
- Reasoning
- Key Tradeoffs

### 7. Engineering Refinement Overview

This section is dynamic.

Create:

- one overview slide with one plain-language card per Epic or initiative
- one slide per Epic
- one consolidated Engineering Discovery slide
- one Deferred Work slide

Each Epic slide includes:

- Epic Name in plain business language
- Business Goal
- Business Value
- Stories Included as translated action bullets
- Refinement Status in plain language
- Key Dependencies
- Open Questions in business language

Never display source-system IDs.

### 8. Delivery Strategy

Show stages implied by the source material. For each include:

- Objective
- Decision Point

Treat the sequence as directional unless commitments are supported by supplied capacity and estimates.

### 9. Stakeholder Communication

Provide concise messages for:

- Leadership
- Engineering
- Operations
- Sales or Customer-facing teams
- Compliance or Risk

Each covers Decision, Reason, and Next Steps.

### 10. Risks & Tradeoffs

Translate the risk register into:

- Risk
- Impact
- Likelihood
- What We Are Doing About It
- Owner

Also include Accepted Tradeoffs, Deferred Decisions, and Open Questions.

### 11. Final Recommendation

Include:

- the ask
- Why
- Expected Business Outcome
- Expected User Outcome
- Success Metrics
- Decision Requested
- Confidence Level

### 12. Appendix

Include:

- AI Tools & Contribution
- Detailed Engineering Implementation reference
- Additional Assumptions
- Parking Lot
- Future Considerations

## Workbook Reference

Engineering-facing slides should include a short link label such as:

```text
Full engineering detail ↗
```

The full Workbook URL belongs in the hyperlink target, not as visible slide text.

## Required QA

Before delivery:

1. Inspect every slide for overflow and overlap.
2. Scan presentation text for Epic, Story, Discovery, and Risk ID patterns. Zero matches required.
3. Confirm every slide has complete speaker notes.
4. Confirm the presentation references the Workbook without reproducing it.
5. Apply the say-it-aloud test to a representative sample of slides.
6. Confirm uncertainty and confidence are stated honestly.
7. Confirm the final output remains faithful to the Approved Product Recommendation.

## Final Standard

The audience should understand:

- the business problem
- the Product reasoning
- why the recommendation was made
- what Engineering is refining
- what still requires discovery
- what decision is requested

They should not need to understand Engineering IDs or internal planning terminology to follow the story.