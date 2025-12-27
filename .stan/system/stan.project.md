# Project prompt

- Modules should be as small as possible, generally limited to a single export
  (reflecting the module name) or at most a handful of tightly related exports.
- Prefer many small source files over a few large ones; keep responsibilities
  narrowly scoped and cohesive.
- Maintain this pattern consistently across the codebase.

Type and naming policies

- Never use the `any` type. Prefer generics and `unknown` as appropriate. If a
  compelling case for `any` arises, pause implementation and open a design
  discussion first; memorialize the decision before proceeding.

- Use the strict, capitalized type-parameter dictionary consistently:
  - EM — EntityMap
  - E — Entity
  - TR — TranscodeRegistry
  - TN — TranscodeName
  - PK — PropertyKey (utility)
  - V — Value (utility)

Notes

- This project already follows this pattern; continue to structure new and
  refactored modules accordingly.

12:52

Input Data Changes
No new archives were provided this turn; changes are based on the previously loaded repository snapshot.
stanPath remains .stan.
Planned changes: update .stan/system/stan.project.md to add a reusable policy for a STAN assistant guide; append a Completed entry to .stan/system/stan.todo.md.
UPDATED: .stan/system/stan.project.md
Added a generic, copy/pasteable instruction to ensure a STAN assistant guide exists (create if missing) and stays maintained alongside implementation changes, with clear intent and constraints.

Patch: .stan/system/stan.project.md
diff
diff --git a/.stan/system/stan.project.md b/.stan/system/stan.project.md
--- a/.stan/system/stan.project.md
b/.stan/system/stan.project.md
@@ -1,6 1,8 @@

# Entity Manager — Project Prompt

This document augments the system prompt with repository‑specific practices that guide documentation and assistant behavior. Product/runtime requirements remain in `stan.requirements.md`.

## STAN assistant guide — creation & upkeep policy

This repository SHOULD include a “STAN assistant guide” document at `guides/stan-assistant-guide.md` (or an equivalent single, stable path if your repo uses a different docs layout). This guide exists to let STAN assistants use and integrate the library effectively without consulting external type definition files or other project documentation.

Policy

- Creation (required):
  - If `guides/stan-assistant-guide.md` is missing, create it as part of the first change set where you would otherwise rely on it (e.g., when adding/altering public APIs, adapters, configuration, or key workflows).
  - Prefer creating it in the same turn as the first relevant code changes so it cannot drift from reality.
- Maintenance (required):
  - Treat the guide as a maintained artifact, not a one-off doc.
  - Whenever a change set materially affects how an assistant should use the library (public exports, configuration shape/semantics, runtime invariants, query contracts, paging tokens, projection behavior, adapter responsibilities, or common pitfalls), update the guide in the same change set.
  - When deprecating/renaming APIs or changing semantics, update the guide and include migration guidance (old → new), but keep it concise.
- Intent (what the guide must enable):
  - Provide a self-contained description of the “mental model” (runtime behavior and invariants) and the minimum working patterns (how to configure, how to call core entrypoints, how to integrate a provider/adapter).
  - Include only the information required to use the library correctly; omit narrative or historical context.
- Constraints (how to keep it effective and reusable):
  - Keep it compact: “as short as possible, but as long as necessary.”
  - Make it self-contained: do not require readers to import or open `.d.ts` files, TypeDoc pages, or other repo docs to understand core contracts.
  - Avoid duplicating durable requirements or the dev plan:
    - Requirements belong in `stan.requirements.md`.
    - Work tracking belongs in `stan.todo.md`.
    - The assistant guide should focus on usage contracts and integration.
  - Define any acronyms locally on first use within the guide (especially if used outside generic type parameters).
