# 👨 Ask Dad

**The open source search engine that knows everything. (It doesn't.)**

**Try it: https://heehawgmedia.github.io/ask-dad/**

Ask Dad is a downloadable, zero-dependency search engine. Ask it anything and Dad, an old-school traditionalist who pays cash, distrusts subscriptions and keeps the thermostat at 68, gives you his confident, ridiculous, completely wrong answer. Right underneath it you get **The Real Answer**, so nobody walks away misinformed.

| Mode | What you get |
| --- | --- |
| **Dad Mode** (default) | **Dad's Answer**: 100% satire, plus a life lesson and a confidence rating over 100%. **The Real Answer**: practical advice for common topics (money, work, cars, home, health, tech...) and a Wikipedia summary. Then "People also ask Dad", Dad Facts™ and parody search results. |
| **Real Search** | Flip the toggle for real results only: a quick answer and search results from Wikipedia, plus one-click handoff to DuckDuckGo, Google, Bing or Brave Search. |

The home page also serves a fresh **Dad Fact** and a **Dad Joke** (punchline hidden until you're ready).

> ⚠️ Dad's answers are jokes. The Real Answer card and Real Search mode are the parts you can trust.

## Quick start

No install, no build step, no account.

1. Download this repo (**Code → Download ZIP**) and unzip it.
2. Double-click `index.html`.
3. Ask Dad anything.

Prefer a local server? Any static server works:

```bash
py -m http.server 8000
```

Then open http://localhost:8000.

## Features

- 🎭 **Satire engine**: works out what kind of question you asked (why/how/what/yes-no...) and what it's about, then builds an answer from a community joke database.
- ✅ **The Real Answer**: every Dad answer is followed by genuine, practical information.
- 🔁 **Ask again**: the same question always gives the same first answer. Hit *Ask again* for a new one.
- 🔎 **Real Search toggle**: live Wikipedia results, with links out to real search engines.
- 😂 **Dad Facts and Dad Jokes** on the home page.
- 🔗 **Shareable links**: `index.html?q=why+is+the+sky+blue` or `index.html?q=moon+landing&mode=real`.
- 🌗 Light and dark themes, keyboard friendly (press `/` to focus the search box), mobile friendly.
- 🔒 No tracking, no cookies, no analytics. Your mode preference is saved in your own browser only.

## Use it as your browser's search engine

Add a custom search engine in your browser settings with this URL:

```
https://heehawgmedia.github.io/ask-dad/?q=%s
```

Add `&mode=real` if you want real results by default. Running it locally? Use `http://localhost:8000/?q=%s` instead.

## Privacy

- Dad's answers, facts and jokes are generated on your computer and never touch the network.
- The Real Answer card and Real Search send your query to Wikipedia's public API to fetch results. The engine buttons open the search engine you choose in a new tab, and that engine's own privacy policy applies.

## Project layout

```
ask-dad/
├── index.html          the page
├── css/style.css       all styling (light + dark)
└── js/
    ├── responses.js    the joke database + real tips  ← easiest place to contribute!
    ├── dad-brain.js    the satire engine
    ├── real-search.js  Wikipedia + search engine handoff
    └── app.js          UI, toggle, rendering
```

## Contributing

The best contribution is a better dad joke. Open `js/responses.js`, add a line, and send a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for the placeholders and the house rules.

## Roadmap ideas

- [ ] More topic categories (sports, music, holidays...)
- [ ] Text-to-speech in a Dad voice
- [ ] "Grandpa Mode" (even older stories, even less relevant)
- [ ] Translations: Ask Papa, Pregúntale a Papá, Frag Papa
- [ ] Browser extension / installable desktop app

## License

[MIT](LICENSE). Do whatever you want with it, just turn off the lights when you leave.
