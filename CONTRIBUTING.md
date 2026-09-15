# Contributing to Ask Dad

Thanks for helping Dad be wrong about more things!

## Adding jokes (no coding experience needed)

All of Dad's material lives in [`js/responses.js`](js/responses.js). Find the list that fits and add a line in quotes, followed by a comma:

```js
why: [
  "{Topic} happens because the government ran out of beige in {year}.",
  "Your brand new answer goes here.",
],
```

### Placeholders

| Placeholder | Becomes |
| --- | --- |
| `{topic}` / `{Topic}` | what the question is about ("the sky blue" / "The sky blue") |
| `{number}` | a suspiciously specific number |
| `{year}` | a year from Dad's glory days (1952–1994) |
| `{place}` | somewhere Dad has definitely been |
| `{relative}` | "your Uncle Gary" and friends |
| `{item}` / `{Item}` | something from the junk drawer |
| `{tool}` | something from the garage |

### Adding a topic category

Add an entry to `topics` with trigger `keywords` (single lowercase words) and `answers`:

```js
{
  name: "sports",
  keywords: ["football", "baseball", "soccer", "team", "score"],
  answers: [
    "The ref is blind. That's the answer to every sports question."
  ]
}
```

## House rules

1. **Family-friendly.** Dad jokes, not late-night jokes.
2. **Punch at Dad, not at people.** No jokes about real people, groups, religion, politics or tragedies.
3. **Obviously ridiculous.** Satire should never be mistaken for real advice, especially about health, money or safety.
4. **Keep Real Search real.** Satire stays out of Real Search mode.

## Code changes

- No build step and no dependencies. Keep it that way so anyone can double-click `index.html`.
- Use plain `<script>` files (not ES modules). Browsers block modules when a page is opened straight from disk.
- Render text with `textContent`, never `innerHTML`.
- Test both modes, light and dark themes, and a phone-width window before opening a PR.
