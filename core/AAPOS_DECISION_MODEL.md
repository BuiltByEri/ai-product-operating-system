# AAPOS Decision Model

Decision values record what the accountable human owner judged.

## Decision Values

| Decision | Meaning |
|---|---|
| `Approved` | The human owner approves the artifact or transition. |
| `Approved With Notes` | The human owner approves with documented caveats or follow-up items. |
| `Rejected` | The human owner rejects the artifact or transition. |
| `Needs Revision` | The artifact requires changes before approval. |
| `Deferred` | The decision is intentionally postponed. |
| `Human Review Required` | AI-assisted work cannot safely proceed without a human decision. |
| `Not Applicable` | The decision does not apply to the artifact or gate. |

## Rules

- Decision values must be applied by, or explicitly attributed to, a human owner.
- AI may recommend a decision path, but it must not record itself as approver.
- Deferred work must remain separate from MVP scope.
- Rejected or revision-required decisions must preserve the reason and next action.
