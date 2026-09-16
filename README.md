# 👨 Ask Dad

**The open source search engine that knows everything. (It doesn't.)**

**Try it: https://heehawgmedia.github.io/ask-dad/**

Ask Dad is a downloadable, zero-dependency search engine. Ask it anything and Dad, an old-school traditionalist who pays cash, distrusts subscriptions and keeps the thermostat at 68, gives you his confident, sarcastic, completely wrong answer, deadpan satire-news style: "Local Dad...", "Report:", "sources say", and every answer eventually reaches gas prices. Right underneath it you get **The Real Answer**, so nobody walks away misinformed.

| Mode | What you get |
| --- | --- |
| **Dad Mode** (default) | **Dad's Answer**: 100% satire, plus a life lesson and a confidence rating over 100%. **The Real Answer**: practical advice for common topics (money, work, cars, home, health, tech...) and a Wikipedia summary. Then "People also ask Dad", Dad Facts™ and parody search results. |
| **Real Search** | Flip the toggle for real results only: a quick answer and search results from Wikipedia, plus one-click handoff to DuckDuckGo, Google, Bing or Brave Search. |

The home page also serves a fresh **Dad Fact**, a **Dad Joke** (punchline hidden until you're ready), and **The Daily Dad**: a front page of satire news stories like *"Local Dad Achieves Enlightenment After Turning Off Light In Empty Room"* and *"Study Finds 'We'll See' Has Meant 'No' Continuously Since 1974."* Every result page adds three related **Dad News** headlines.

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

- 🎭 **Satire engine**: works out what kind of question you asked (why/how/what/yes-no...) and what it's about, then builds an answer from a community joke database. Classics like "Are we there yet?" and "Can I borrow the car?" get Dad's best material.
- ✅ **The Real Answer**: every Dad answer is followed by genuine, practical information.
- 💡 **Search suggestions**: questions to try as you type, your recent questions (kept in your browser only, one click to clear), and live Wikipedia title suggestions in Real Search.
- 🔊 **Hear it from Dad**: reads the answer aloud using your browser's built-in voices.
- 📤 **Share**: copies a link straight to that answer.
- 🔁 **Ask again**: the same question always gives the same first answer. Hit *Ask again* for a new one.
- 🔎 **Real Search toggle**: live Wikipedia results, with links out to real search engines.
- 😂 **Dad Facts and Dad Jokes** on the home page.
- 📰 **The Daily Dad**: satire news articles on the home page, each with its own shareable link, plus headlines on every results page.
- 📥 **Installable**: add it to your phone or desktop as an app. Dad Mode keeps working offline.
- 🔗 **Shareable links**: `index.html?q=why+is+the+sky+blue` or `index.html?q=moon+landing&mode=real`.
- 🌗 Light and dark themes, keyboard friendly (press `/` to focus the search box, arrow keys in suggestions), mobile friendly.
- 🔒 No tracking, no cookies, no analytics.

## Install it as an app

Open https://heehawgmedia.github.io/ask-dad/ and:

- **Phone:** use your browser's *Add to Home Screen* option.
- **Desktop (Chrome/Edge):** click **Install Ask Dad** in the footer, or the install icon in the address bar.

Dad's answers, facts and jokes work offline once installed. The Real Answer needs a connection.

## Use it as your browser's search engine

Ask Dad publishes an [OpenSearch](opensearch.xml) description, so most browsers can add it in one step:

- **Firefox:** visit the site, then right-click the address bar and choose *Add "Ask Dad"*.
- **Chrome/Edge:** visit the site once, then pick it from *Settings → Search engine → Manage search engines* (it appears under inactive shortcuts).

Or add it by hand with this URL:

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
├── js/
│   ├── responses.js    the joke database + real tips  ← easiest place to contribute!
│   ├── dad-brain.js    the satire engine
│   ├── real-search.js  Wikipedia + search engine handoff
│   └── app.js          UI, toggle, suggestions, rendering
├── sw.js               service worker (installable app, offline Dad Mode)
├── manifest.json       web app manifest
├── opensearch.xml      lets browsers add Ask Dad as a search engine
├── icons/              app icons (icon.svg is the source of truth)
└── tools/make-icons.py regenerates the PNG icons, no dependencies
```

## Contributing

The best contribution is a better dad joke. Open `js/responses.js`, add a line, and send a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for the placeholders and the house rules.

## Roadmap ideas

- [x] More topic categories (sports, music, holidays...)
- [x] Text-to-speech in a Dad voice
- [x] Installable app with offline Dad Mode
- [ ] "Grandpa Mode" (even older stories, even less relevant)
- [ ] Translations: Ask Papa, Pregúntale a Papá, Frag Papa
- [ ] Browser extension

## License

[MIT](LICENSE). Do whatever you want with it, just turn off the lights when you leave.
