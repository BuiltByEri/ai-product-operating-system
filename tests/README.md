# Tests

AAPOS version `1.0.0` uses lightweight release validation scripts:

- `../scripts/validate-skills.mjs` checks the expected AAPOS skill files, selected metadata values, lifecycle ownership, human gates, required sections, artifact production, and unsupported AI decision ownership. It is not a general-purpose YAML parser and does not perform JSON Schema validation.
- `../scripts/validate-links.mjs` checks local Markdown file links. It skips anchors, external URLs, generated files, and semantic correctness.
- `../scripts/scan-forbidden-terms.mjs` checks a maintained set of publication-risk terms, local machine paths, non-public repository references, email addresses, and secret-like assignments. It cannot guarantee the absence of all sensitive, proprietary, or domain-specific content.
- `../scripts/validate-version.mjs` checks version consistency across selected release files. It is not full package, citation, or release metadata validation.

These checks are release safeguards. They are not a substitute for human review.

Additional release review should still include manual source-neutrality review, metadata parsing, artifact-template review, and repository settings review.
