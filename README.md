# 👨 Ask Dad

**The open source search engine that knows everything. (It doesn't.)**

Ask Dad is a downloadable, zero-dependency search engine with two modes:

| Mode | What you get |
| --- | --- |
| **Dad Mode** (default) | 100% satire. Ask any question and get a confident, ridiculous, completely wrong answer, plus fake search results, "Dad Facts™" and "People also ask Dad". Works fully offline. |
| **Real Search** | Flip the toggle for real results: a quick answer and search results from Wikipedia, plus one-click handoff to DuckDuckGo, Google, Bing or Brave Search. |

> ⚠️ Everything in Dad Mode is a joke. Do not use it for homework, taxes, medical decisions, or surgery.

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
- 🔁 **Ask again**: the same question always gives the same first answer. Hit *Ask again* for a new one.
- 🔎 **Real Search toggle**: live Wikipedia results, with links out to real search engines.
- 🔗 **Shareable links**: `index.html?q=why+is+the+sky+blue` or `index.html?q=moon+landing&mode=real`.
- 🌗 Light and dark themes, keyboard friendly (press `/` to focus the search box), mobile friendly.
- 🔒 No tracking, no cookies, no analytics. Your mode preference is saved in your own browser only.

## Use it as your browser's search engine

Serve the folder (see above), then add a custom search engine in your browser settings with this URL:

```
http://localhost:8000/?q=%s
```

Add `&mode=real` if you want real results by default.

## Privacy

- **Dad Mode** never touches the network. Your questions stay on your computer.
- **Real Search** sends your query to Wikipedia's public API to fetch results. The engine buttons open the search engine you choose in a new tab, and that engine's own privacy policy applies.

## Project layout

```
ask-dad/
├── index.html          the page
├── css/style.css       all styling (light + dark)
└── js/
    ├── responses.js    the joke database  ← easiest place to contribute!
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
