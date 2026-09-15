# Contributing to Ask Dad

Thanks for helping Dad be wrong about more things!

## Who is Dad?

Dad is an old-school traditionalist. He pays cash, distrusts subscriptions and apps, gets up at 5 a.m., believes in hard work, firm handshakes and fixing things yourself, and thinks everything was cheaper and better "back in my day". He is lovingly, confidently wrong about almost everything. The joke is always on Dad.

## Adding jokes (no coding experience needed)

All of Dad's material lives in [`js/responses.js`](js/responses.js). Find the list that fits and add a line in quotes, followed by a comma:

```js
why: [
  "Because nobody wants to work anymore. That's why {topic}. That's why everything.",
  "Your brand new answer goes here.",
],
```

### Where things go

| List | Shown |
| --- | --- |
| `openers`, `byQuestionType`, `topics[].answers`, `closers` | assembled into Dad's Answer |
| `lessons` | the "Dad's life lesson" line under his answer |
| `facts`, `alsoAsk`, `fakeSites` | the sections under the answer |
| `homeFacts`, `jokes` | the Dad Fact and Dad Joke cards on the home page |
| `topics[].realTips` | **The Real Answer** card. Real advice only, see below. |

### Placeholders

| Placeholder | Becomes |
| --- | --- |
| `{topic}` / `{Topic}` | what the question is about ("the sky blue" / "The sky blue") |
| `{number}` | a suspiciously specific number |
| `{year}` | a year from Dad's glory days (1952–1994) |
| `{price}` | what things cost back then ("a nickel", "two bits") |
| `{place}` | somewhere Dad has definitely been |
| `{relative}` | "your Uncle Gary" and friends |
| `{item}` / `{Item}` | something from the junk drawer |
| `{tool}` | something from the garage |
| `{chore}` / `{Chore}` | a chore you should be doing instead |

`homeFacts` can't use `{topic}` because nobody has asked anything yet.

### Adding a topic category

Add an entry to `topics` with trigger `keywords` (single lowercase words), satirical `answers`, and optional `realTips`:

```js
{
  name: "sports",
  keywords: ["football", "baseball", "soccer", "team", "score"],
  answers: [
    "The ref is blind. That's the answer to every sports question."
  ],
  realTips: [
    "Warm up before playing and stay hydrated to reduce the risk of injury."
  ]
}
```

### Real tips are not jokes

`realTips` are shown under the heading **The Real Answer** and people will take them at face value. They must be accurate, general, non-controversial and safe. When in doubt, point to a professional ("see a doctor", "hire a licensed electrician"). No satire, no opinions.

## House rules

1. **Family-friendly.** Dad jokes, not late-night jokes.
2. **Punch at Dad, not at people.** No jokes about real people, groups, religion or tragedies.
3. **No partisan politics.** Dad's "conservative" is thermostats, cash and lawn care, not parties or candidates.
4. **Obviously ridiculous.** Satire should never be mistaken for real advice, especially about health, money or safety. That's what The Real Answer is for.
5. **Keep Real Search real.** Satire stays out of Real Search mode and out of `realTips`.

## Code changes

- No build step and no dependencies. Keep it that way so anyone can double-click `index.html`.
- Use plain `<script>` files (not ES modules). Browsers block modules when a page is opened straight from disk.
- Render text with `textContent`, never `innerHTML`.
- Test both modes, light and dark themes, and a phone-width window before opening a PR.
