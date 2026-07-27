# AAPOS Status Model

Status answers where the work is in the AAPOS lifecycle.

## Status Values

| Status | Meaning |
|---|---|
| `Not Started` | The stage has not begun. |
| `In Progress` | Work is actively being drafted, refined, or reviewed. |
| `Ready for Review` | The artifact is ready for the accountable human gate. |
| `Blocked` | A required input, decision, or review is missing. |
| `Completed` | The stage has produced its artifact and completed its required gate. |

## Rules

- Status must not imply approval.
- `Completed` requires the appropriate human gate outcome.
- `Blocked` must name the blocker and owner where known.
- A stage must not advance when a decision-changing uncertainty remains unresolved.
