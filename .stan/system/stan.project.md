# Project prompt

- Modules should be as small as possible, generally limited to a single export
  (reflecting the module name) or at most a handful of tightly related exports.
- Prefer many small source files over a few large ones; keep responsibilities
  narrowly scoped and cohesive.
- Maintain this pattern consistently across the codebase.

Notes
- This project already follows this pattern; continue to structure new and
  refactored modules accordingly.
