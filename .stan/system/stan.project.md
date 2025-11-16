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
