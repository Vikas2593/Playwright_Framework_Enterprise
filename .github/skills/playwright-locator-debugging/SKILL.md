---
name: playwright-locator-debugging
description: Diagnose and prevent Playwright locator failures in this TypeScript test suite.
---

# Playwright Locator Debugging

Use this workflow when a test times out while waiting for a locator.

## Diagnose first

1. Read the complete Playwright call log and page snapshot.
2. Confirm the failing action and the exact locator expression.
3. Check whether the element exists, is visible, enabled, and unique at the point of action.
4. Inspect the rendered accessibility tree before changing selectors.
5. Reproduce the smallest affected test rather than rerunning the entire suite repeatedly.

## Locator rules

- Prefer user-facing locators: `getByRole`, `getByLabel`, `getByPlaceholder`, and exact text when appropriate.
- Scope controls to their field or component. Use a stable container with `filter({ hasText: ... })` instead of global `.nth()` selectors.
- Do not use positional selectors when a label, role, placeholder, or stable test id can identify the element.
- Match the UI text exactly, including whitespace and punctuation.
- For custom dropdowns, click the field-scoped trigger, then select an exact option from the visible listbox.
- Keep locators in page objects and expose meaningful action methods from those objects.

## Async rules

- Await every asynchronous page-object action in tests and in page objects.
- Let Playwright auto-wait; do not add arbitrary sleeps.
- Await navigation-producing actions and assert a post-action state, such as a heading or alert.
- Use `expect` assertions to verify the behavior under test, not just that a click completed.

## Verification

- Run TypeScript diagnostics after changing locators.
- Run the smallest affected test first, then all tests under `tests/`.
- Review the next failure after each fix; do not hide failures with force clicks or extended timeouts.
- Do not configure `webServer` for an externally hosted application. Use `webServer` only when the command starts a local server that Playwright must wait for.
