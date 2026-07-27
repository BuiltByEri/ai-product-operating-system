# AAPOS Overview

AAPOS is the AI-Assisted Product Operating System.

It is a Product Ownership framework for turning ambiguous product work into governed, engineering-ready decisions. It combines AI-assisted drafting and analysis with explicit human gates, Product Owner accountability, VUED Risk prioritization, and audience-specific artifacts.

## Positioning

AAPOS is broader than any one AI tool or product domain. Claude and Codex skill files are current reference implementations, but the operating model remains vendor-neutral.

## Release Baseline

| Component | Version | State |
|---|---:|---|
| AAPOS Core | 1.0.0 | Approved |
| AAPOS four-stage lifecycle | 1.0.0 | Frozen |
| AAPOS reference skill contracts | 1.0.0 | Approved |
| Northstar fictional example | 1.0.0 | Public-safe example |

## Architecture Narrative

```text
Discover -> Recommend -> Refine -> Communicate
```

This narrative explains the work. It does not replace the formal four-stage lifecycle in [`OPERATING_MODEL.md`](OPERATING_MODEL.md).

## Repository Areas

- [`core/`](../core/): AAPOS Core, governance, status, and decision models.
- [`docs/`](./): public framework documentation.
- [`skills/`](../skills/): reference skill contracts.
- [`artifact-templates/`](../artifact-templates/): templates for AAPOS artifacts.
- [`examples/`](../examples/): fictional public examples.
- [`schemas/`](../schemas/), [`scripts/`](../scripts/), and [`tests/`](../tests/): validation assets.

## Northstar Example

The Northstar Vendor Onboarding Platform example demonstrates the full AAPOS lifecycle with fictional inputs, artifacts, and approvals. It does not claim deployment, adoption, measured outcomes, or real-world production evidence.
