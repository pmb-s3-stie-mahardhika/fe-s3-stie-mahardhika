# CODE STYLE GUIDELINES

## Styling with Tailwind 4
- Use utility classes primarily.
- Maintain order: Layout -> Box Model -> Typography -> Effects -> Misc.
- Use `class-variance-authority` (CVA) for complex component variants (buttons, inputs).

## TypeScript
- Prefer `interface` over `type` for object definitions.
- Avoid `any` at all costs. Use `unknown` if type is truly dynamic.

## Formatting
- Use 2 spaces for indentation.
- Always use semicolons.
- Use single quotes for strings, except for JSX attributes (double quotes).