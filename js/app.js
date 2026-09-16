/*
 * Ask Dad — UI glue: the mode toggle, the home page, the search box with its
 * suggestions dropdown, and rendering results. Everything is rendered with
 * textContent, never innerHTML, so questions and API results can't inject
 * markup.
 */
(function (AskDad) {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const els = {
    toggle: $("mode-toggle"),
    form: $("search-form"),
    input: $("q"),
    suggest: $("suggest"),
    ask: $("ask-btn"),
    lucky: $("lucky-btn"),
    results: $("results"),
    tagline: $("tagline"),
    footer: $("footer-note"),
    toast: $("toast"),
    install: $("install-btn"),
    logo: document.querySelector(".logo"),
    fact: $("home-fact"),
    factBtn: $("fact-btn"),
    jokeSetup: $("joke-setup"),
    jokePunchline: $("joke-punchline"),
    jokeReveal: $("joke-reveal"),
    jokeBtn: $("joke-btn"),
    newsList: $("news-list"),
    newsMore: $("news-more")
  };

  const MODE_KEY = "askdad.mode";
  const RECENT_KEY = "askdad.recent";
  const MAX_RECENT = 8;
  const MAX_SUGGESTIONS = 7;

  const CLOSED_LINKS = [
    "That website is closed. Dad said so.",
    "Nope. Screen time is over.",
    "Dad unplugged the router to 'reset' it.",
    "That link costs a dollar. Do you have a dollar?",
    "You don't need the internet. You have Dad."
  ];

  const state = {
    mode: "dad",
    question: "",
    attempt: 0,
    token: 0,
    timer: null,
    controller: null,
    realCache: new Map()
  };

  // ---------- small helpers ----------

  function el(tag, props, children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props || {})) {
      if (value == null) continue;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
      else node.setAttribute(key, value);
    }
    for (const child of [].concat(children || [])) {
      if (child != null) node.append(child);
    }
    return node;
  }

  function externalLink(href, text, className) {
    return el("a", { class: className, href, target: "_blank", rel: "noopener noreferrer", text });
  }

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode etc. */ }
  }

  function storageRemove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }

  let toastTimer;
  function toast(message) {
    els.toast.textContent = message;
    els.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { els.toast.hidden = true; }, 2600);
  }

  function updateUrl() {
    const params = new URLSearchParams();
    if (state.question) params.set("q", state.question);
    if (state.mode === "real") params.set("mode", "real");
    const qs = params.toString();
    try {
      history.replaceState(null, "", qs ? "?" + qs : location.pathname);
    } catch (e) { /* some browsers block this on file:// */ }
  }

  function cancelPending() {
    clearTimeout(state.timer);
    if (state.controller) state.controller.abort();
    state.controller = null;
    stopSpeaking();
  }

  function spinnerLine(text, className) {
    return el("div", { class: className }, [
      el("span", { class: "spinner", "aria-hidden": "true" }),
      el("span", { text })
    ]);
  }

  function showThinking(text) {
    els.results.replaceChildren(spinnerLine(text, "thinking"));
  }

  // ---------- recent questions (this browser only) ----------

  function getRecent() {
    try {
      const list = JSON.parse(storageGet(RECENT_KEY));
      return Array.isArray(list) ? list.filter((x) => typeof x === "string") : [];
    } catch (e) {
      return [];
    }
  }

  function addRecent(question) {
    const rest = getRecent().filter((x) => x.toLowerCase() !== question.toLowerCase());
    storageSet(RECENT_KEY, JSON.stringify([question, ...rest].slice(0, MAX_RECENT)));
  }

  // ---------- suggestions dropdown ----------

  const sug = { items: [], active: -1, timer: null, controller: null, seq: 0 };

  async function collectSuggestions(text) {
    const t = text.toLowerCase();
    const recent = getRecent()
      .filter((r) => !t || r.toLowerCase().includes(t))
      .slice(0, t ? 3 : MAX_RECENT)
      .map((r) => ({ text: r, kind: "recent" }));

    const items = recent.slice();
    const seen = new Set(recent.map((s) => s.text.toLowerCase()));
    const add = (s, kind) => {
      const key = s.toLowerCase();
      if (seen.has(key) || items.length >= MAX_SUGGESTIONS) return;
      seen.add(key);
      items.push({ text: s, kind });
    };

    if (state.mode === "real" && t) {
      if (sug.controller) sug.controller.abort();
      sug.controller = new AbortController();
      try {
        (await AskDad.realSearch.suggest(text, sug.controller.signal)).forEach((s) => add(s, "wiki"));
      } catch (e) { /* offline or aborted: Dad's suggestions still work */ }
    }
    AskDad.brain.suggestions(text).forEach((s) => add(s, "dad"));
    return items;
  }

  function renderSuggestions(items, text) {
    sug.items = items;
    sug.active = -1;
    if (!items.length) { closeSuggestions(); return; }

    const icon = { recent: "🕘", wiki: "🔎", dad: "👨" };
    const nodes = items.map((item, i) =>
      el("li", {
        id: `sug-${i}`,
        role: "option",
        class: `sug sug-${item.kind}`,
        "aria-selected": "false",
        onmousedown: (e) => e.preventDefault(), // keep focus in the input
        onclick: () => chooseSuggestion(i)
      }, [
        el("span", { class: "sug-icon", "aria-hidden": "true", text: icon[item.kind] }),
        el("span", { class: "sug-text", text: item.text })
      ])
    );

    if (!text && items.some((i) => i.kind === "recent")) {
      nodes.push(el("li", { class: "sug-foot", role: "presentation" }, [
        el("span", { text: "Recent questions stay in this browser only." }),
        el("button", {
          type: "button",
          text: "Clear history",
          onmousedown: (e) => e.preventDefault(),
          onclick: () => { storageRemove(RECENT_KEY); updateSuggestions(); }
        })
      ]));
    }

    els.suggest.replaceChildren(...nodes);
    els.suggest.hidden = false;
    els.input.setAttribute("aria-expanded", "true");
  }

  function closeSuggestions() {
    clearTimeout(sug.timer);
    sug.seq++;
    sug.items = [];
    sug.active = -1;
    els.suggest.hidden = true;
    els.suggest.replaceChildren();
    els.input.setAttribute("aria-expanded", "false");
    els.input.removeAttribute("aria-activedescendant");
  }

  // Focus the search box without popping the dropdown open (page load, logo click).
  function focusQuietly() {
    sug.quiet = true;
    els.input.focus();
    sug.quiet = false;
  }

  function updateSuggestions() {
    if (sug.quiet) return;
    clearTimeout(sug.timer);
    const text = els.input.value.trim();
    const seq = ++sug.seq;
    const delay = state.mode === "real" && text ? 180 : 0;
    sug.timer = setTimeout(async () => {
      const items = await collectSuggestions(text);
      if (seq !== sug.seq || document.activeElement !== els.input) return;
      renderSuggestions(items, text);
    }, delay);
  }

  function setActive(index) {
    const options = els.suggest.querySelectorAll('[role="option"]');
    options.forEach((o) => o.setAttribute("aria-selected", "false"));
    sug.active = index;
    if (index < 0) {
      els.input.removeAttribute("aria-activedescendant");
      return;
    }
    options[index].setAttribute("aria-selected", "true");
    els.input.setAttribute("aria-activedescendant", options[index].id);
    els.input.value = sug.items[index].text;
  }

  function chooseSuggestion(index) {
    const item = sug.items[index];
    if (!item) return;
    closeSuggestions();
    run(item.text);
  }

  function onInputKeydown(event) {
    if (event.key === "Escape") { closeSuggestions(); return; }
    const n = sug.items.length;
    if (!n || els.suggest.hidden) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((sug.active + 1) % n);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((sug.active - 1 + n) % n);
    } else if (event.key === "Enter" && sug.active >= 0) {
      event.preventDefault();
      chooseSuggestion(sug.active);
    }
  }

  // ---------- Dad's voice (speech synthesis, where the browser has it) ----------

  const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

  function dadVoice() {
    const voices = speechSynthesis.getVoices();
    const english = voices.filter((v) => /^en/i.test(v.lang));
    return english.find((v) => /david|george|daniel|guy|mark|james|male/i.test(v.name)) || english[0] || voices[0] || null;
  }

  function stopSpeaking() {
    if (canSpeak && speechSynthesis.speaking) speechSynthesis.cancel();
  }

  function speak(text, button) {
    if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.voice = dadVoice();
    u.pitch = 0.75;
    u.rate = 0.92;
    const idle = () => { button.textContent = "🔊 Hear it from Dad"; button.classList.remove("speaking"); };
    u.onstart = () => { button.textContent = "⏹ Okay Dad, stop"; button.classList.add("speaking"); };
    u.onend = idle;
    u.onerror = idle;
    speechSynthesis.speak(u);
  }

  if (canSpeak) speechSynthesis.getVoices(); // warms the voice list in Chrome

  // ---------- share ----------

  async function shareLink(url, title, copiedMessage) {
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; } catch (e) { if (e.name === "AbortError") return; }
    }
    try {
      await navigator.clipboard.writeText(url);
      toast(copiedMessage);
    } catch (e) {
      toast(url);
    }
  }

  function shareAnswer() {
    shareLink(location.href, `Ask Dad: ${state.question}`, "Link copied. Go show your mother.");
  }

  function newsUrl(id) {
    const url = new URL(location.href);
    url.search = "?news=" + encodeURIComponent(id);
    return url.toString();
  }

  // ---------- home page ----------

  function showFact() {
    els.fact.textContent = AskDad.brain.homeFact();
  }

  function showJoke() {
    const joke = AskDad.brain.dadJoke();
    els.jokeSetup.textContent = joke.setup;
    els.jokePunchline.textContent = joke.punchline;
    els.jokePunchline.hidden = true;
    els.jokeReveal.hidden = false;
  }

  function revealPunchline() {
    els.jokePunchline.hidden = false;
    els.jokeReveal.hidden = true;
    els.jokeBtn.focus();
  }

  function articleCard(a, expanded) {
    const more = el("div", { class: "article-more" }, [
      ...a.body.slice(1).map((p) => el("p", { text: p })),
      el("p", { class: "article-quote", text: a.quote })
    ]);
    more.hidden = !expanded;

    const readBtn = el("button", {
      type: "button",
      class: "btn btn-small",
      text: expanded ? "Less" : "Read the full story",
      onclick: () => {
        more.hidden = !more.hidden;
        readBtn.textContent = more.hidden ? "Read the full story" : "Less";
      }
    });

    return el("article", { class: "article", id: `news-${a.id}` }, [
      el("span", { class: "kicker", text: a.kicker }),
      el("h3", { class: "article-title", text: a.headline }),
      el("p", null, [el("span", { class: "article-dateline", text: `${a.dateline} — ` }), a.body[0]]),
      more,
      el("div", { class: "card-actions" }, [
        readBtn,
        el("button", {
          type: "button",
          class: "btn btn-small",
          text: "📤 Share",
          onclick: () => shareLink(newsUrl(a.id), a.headline, "Story link copied. Forward it to the group chat.")
        })
      ])
    ]);
  }

  // Three stories on the front page; a shared ?news= link puts that story first, expanded.
  function showNews(firstId) {
    const articles = AskDad.brain.newsFeed(3, firstId);
    els.newsList.replaceChildren(...articles.map((a) => articleCard(a, Boolean(firstId) && a.id === firstId)));
  }

  function goHome() {
    cancelPending();
    state.token++;
    state.question = "";
    els.input.value = "";
    els.results.replaceChildren();
    document.body.classList.remove("has-results");
    updateUrl();
    showFact();
    showJoke();
    showNews();
    focusQuietly();
  }

  // ---------- mode ----------

  function setMode(mode, opts) {
    const real = mode === "real";
    state.mode = real ? "real" : "dad";
    document.body.dataset.mode = state.mode;
    els.toggle.checked = real;

    els.input.placeholder = real ? "Search the real web..." : "Ask Dad anything...";
    els.ask.textContent = real ? "Search" : "Ask Dad";
    els.lucky.textContent = real ? "Open in DuckDuckGo" : "I'm Feeling Grounded";
    els.tagline.textContent = real
      ? "Real answers only. Dad is supervising from the recliner."
      : AskDad.brain.randomTagline();
    els.footer.textContent = real
      ? "Real Search: results come from Wikipedia. Engine buttons open that search engine in a new tab."
      : "Dad Mode: Dad's answer is 100% satire. The real answer is right underneath it.";

    storageSet(MODE_KEY, state.mode);

    if (opts && opts.silent) return;
    if (state.question) run(state.question);
    else updateUrl();
  }

  // ---------- searching ----------

  function run(question, opts) {
    question = question.trim();
    if (!question) return;

    if (question !== state.question) state.attempt = 0;
    else if (opts && opts.again) state.attempt++;

    state.question = question;
    els.input.value = question;
    closeSuggestions();
    addRecent(question);
    document.body.classList.add("has-results");
    updateUrl();

    cancelPending();
    const token = ++state.token;
    if (state.mode === "real") runReal(question, token);
    else runDad(question, token);
  }

  // Resolves to { data } or { error: true }, or null if the request was
  // cancelled. Successful lookups are cached so "Ask again" and switching
  // modes don't hit Wikipedia twice.
  function fetchReal(question) {
    const terms = AskDad.brain.searchTerms(question);
    const key = terms.toLowerCase();
    if (state.realCache.has(key)) return Promise.resolve({ data: state.realCache.get(key) });

    const controller = new AbortController();
    state.controller = controller;
    return AskDad.realSearch.search(terms, controller.signal)
      .then((data) => {
        state.realCache.set(key, data);
        return { data };
      })
      .catch((err) => (err.name === "AbortError" ? null : { error: true }));
  }

  function runDad(question, token) {
    showThinking(AskDad.brain.thinkingLine());
    const realPromise = fetchReal(question); // fetch the real answer while Dad "thinks"

    state.timer = setTimeout(() => {
      if (token !== state.token) return;
      const answer = AskDad.brain.answer(question, state.attempt);
      const realSlot = renderDad(answer);
      realPromise.then((result) => {
        if (result && token === state.token) fillRealAnswer(realSlot, question, result, answer.realTips);
      });
    }, 500 + Math.random() * 700);
  }

  async function runReal(question, token) {
    showThinking("Searching Wikipedia...");
    const result = await fetchReal(question);
    if (!result || token !== state.token) return;
    if (result.error) renderRealError(question);
    else renderReal(question, result.data);
  }

  // ---------- shared real-result pieces ----------

  function summaryBlock(s) {
    return el("div", { class: "summary" }, [
      s.thumbnail ? el("img", { src: s.thumbnail, alt: "" }) : null,
      el("div", null, [el("h3", { text: s.title }), el("p", { text: s.extract })])
    ]);
  }

  function engineButtons(question) {
    return el("div", { class: "engines" },
      AskDad.realSearch.engines.map((engine) =>
        externalLink(AskDad.realSearch.engineUrl(engine, question), `${engine.name} ↗`, "btn")
      )
    );
  }

  function engineRow(question) {
    return el("div", { class: "engines-row" }, [
      el("span", { text: "Search the web:" }),
      ...AskDad.realSearch.engines.map((engine) =>
        externalLink(AskDad.realSearch.engineUrl(engine, question), `${engine.name} ↗`, "btn")
      )
    ]);
  }

  // ---------- rendering: Dad Mode ----------

  // Renders Dad's answer and returns the (still loading) Real Answer card.
  function renderDad(a) {
    const spoken = `${a.opener} ${a.body} ${a.closer}`;
    const speakBtn = canSpeak
      ? el("button", { type: "button", class: "btn", text: "🔊 Hear it from Dad", onclick: () => speak(spoken, speakBtn) })
      : null;

    const answerCard = el("section", { class: "card", "aria-label": "Dad's answer" }, [
      el("h2", { text: "👨 Dad's Answer" }),
      el("p", { class: "dad-answer", text: spoken }),
      el("p", { class: "signoff", text: a.signoff }),
      el("p", { class: "lesson" }, [el("strong", { text: "Dad's life lesson: " }), a.lesson]),
      el("div", { class: "confidence" }, [
        el("span", { text: "Confidence:" }),
        el("div", { class: "meter" }, el("div", { class: "meter-fill" })),
        el("strong", { text: `${a.confidence}%` })
      ]),
      el("div", { class: "card-actions" }, [
        el("button", { type: "button", class: "btn", text: "🔁 Ask again", onclick: () => run(state.question, { again: true }) }),
        speakBtn,
        el("button", { type: "button", class: "btn", text: "📤 Share", onclick: shareAnswer })
      ])
    ]);

    const realSlot = el("section", { class: "card real-answer", "aria-label": "The real answer", "aria-busy": "true" }, [
      el("h2", { text: "✅ The Real Answer" }),
      spinnerLine("Finding out what Dad should have said...", "card-loading")
    ]);

    const alsoAsk = el("div", { class: "also-ask" },
      a.alsoAsk.map((q) => el("button", { type: "button", text: q, onclick: () => run(q) }))
    );

    const facts = el("ul", { class: "facts" }, a.facts.map((fact) => el("li", { text: fact })));

    const results = a.results.map((r) =>
      el("article", { class: "result" }, [
        el("div", { class: "result-url", text: r.url }),
        el("button", {
          type: "button",
          class: "result-title",
          text: r.title,
          onclick: () => toast(CLOSED_LINKS[Math.floor(Math.random() * CLOSED_LINKS.length)])
        }),
        el("p", { class: "result-snippet", text: r.snippet })
      ])
    );

    const headlines = el("ul", { class: "headlines" },
      a.news.map((h) => el("li", null, [el("span", { class: "kicker", text: h.kicker }), h.text]))
    );

    els.results.replaceChildren(
      el("p", { class: "stats", text: `About ${a.resultCount} results (0.00 seconds of actual thought)` }),
      answerCard,
      realSlot,
      el("h3", { class: "section-title", text: "📰 Dad News" }),
      el("p", { class: "satire-note", text: "Satire headlines from The Daily Dad. None of this happened." }),
      headlines,
      el("h3", { class: "section-title", text: "People also ask Dad" }),
      alsoAsk,
      el("h3", { class: "section-title", text: "Dad Facts™" }),
      facts,
      el("h3", { class: "section-title", text: "Dad's top results" }),
      el("p", { class: "satire-note", text: "These websites are made up. Dad is not a reliable source." }),
      ...results
    );

    return realSlot;
  }

  function fillRealAnswer(slot, question, result, tips) {
    const children = [el("h2", { text: "✅ The Real Answer" })];

    if (tips.length) {
      children.push(
        el("div", { class: "real-tips" }, [
          el("h3", { text: "Practical advice" }),
          el("ul", null, tips.map((tip) => el("li", { text: tip })))
        ])
      );
    }

    const summary = result.data && result.data.summary;
    if (summary) {
      children.push(summaryBlock(summary));
    } else if (result.error) {
      children.push(el("p", { class: "notice", text: "Couldn't reach Wikipedia for the real answer. Are you offline?" }));
    } else if (!tips.length) {
      children.push(el("p", { class: "notice", text: "Dad doesn't know, and this time neither does Wikipedia. Try a search engine below." }));
    }

    children.push(
      el("div", { class: "card-actions" }, [
        summary ? externalLink(summary.url, "Read more on Wikipedia ↗", "btn") : null,
        el("button", { type: "button", class: "btn", text: "🔎 All real results", onclick: () => setMode("real") })
      ]),
      engineRow(question)
    );

    slot.removeAttribute("aria-busy");
    slot.replaceChildren(...children);
  }

  // ---------- rendering: Real Search ----------

  function dadButton() {
    return el("div", { class: "card-actions" }, [
      el("button", { type: "button", class: "btn", text: "👨 What would Dad say?", onclick: () => setMode("dad") })
    ]);
  }

  function renderReal(question, data) {
    const nodes = [
      el("p", {
        class: "stats",
        text: data.results.length ? `About ${data.total.toLocaleString()} Wikipedia results` : "No Wikipedia results"
      })
    ];

    if (data.summary) {
      nodes.push(
        el("section", { class: "card", "aria-label": "Quick answer" }, [
          el("h2", { text: "Quick answer · Wikipedia" }),
          summaryBlock(data.summary),
          el("div", { class: "card-actions" }, [externalLink(data.summary.url, "Read on Wikipedia ↗", "btn")])
        ])
      );
    }

    nodes.push(
      el("h3", { class: "section-title", text: "Search the whole web" }),
      engineButtons(question),
      dadButton()
    );

    if (data.results.length) {
      nodes.push(el("h3", { class: "section-title", text: "Wikipedia results" }));
      for (const r of data.results) {
        nodes.push(
          el("article", { class: "result" }, [
            el("div", { class: "result-url", text: `en.wikipedia.org › wiki › ${r.title}` }),
            externalLink(r.url, r.title, "result-title"),
            r.snippet ? el("p", { class: "result-snippet", text: `${r.snippet}…` }) : null
          ])
        );
      }
    } else {
      nodes.push(el("p", { class: "notice", text: "Wikipedia came up empty. Try one of the search engines above." }));
    }

    els.results.replaceChildren(...nodes);
  }

  function renderRealError(question) {
    els.results.replaceChildren(
      el("p", { class: "notice", text: "Couldn't reach Wikipedia. Are you offline? You can still search the web directly:" }),
      el("h3", { class: "section-title", text: "Search the whole web" }),
      engineButtons(question),
      dadButton()
    );
  }

  // ---------- install as an app ----------

  let installPrompt = null;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    els.install.hidden = false;
  });

  els.install.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    els.install.hidden = true;
  });

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* offline mode is a bonus, not a requirement */ });
  }

  // ---------- events ----------

  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    run(els.input.value, { again: true });
  });

  els.input.addEventListener("input", updateSuggestions);
  els.input.addEventListener("focus", updateSuggestions);
  els.input.addEventListener("keydown", onInputKeydown);
  els.input.addEventListener("blur", () => setTimeout(closeSuggestions, 150));

  els.toggle.addEventListener("change", () => setMode(els.toggle.checked ? "real" : "dad"));

  els.lucky.addEventListener("click", () => {
    if (state.mode === "dad") {
      run(AskDad.brain.luckyQuestion());
      return;
    }
    const q = els.input.value.trim();
    if (!q) {
      toast("Type something first. Dad can't search for nothing.");
      els.input.focus();
      return;
    }
    window.open(AskDad.realSearch.engineUrl(AskDad.realSearch.engines[0], q), "_blank", "noopener");
  });

  els.logo.addEventListener("click", goHome);
  els.factBtn.addEventListener("click", showFact);
  els.jokeBtn.addEventListener("click", showJoke);
  els.jokeReveal.addEventListener("click", revealPunchline);
  els.newsMore.addEventListener("click", () => showNews());

  // Press "/" anywhere to jump to the search box.
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== els.input) {
      event.preventDefault();
      focusQuietly();
    }
  });

  // Clicking into an already-focused box should still offer suggestions.
  els.input.addEventListener("click", updateSuggestions);

  // ---------- start ----------

  const params = new URLSearchParams(location.search);
  const urlMode = params.get("mode");
  const initialMode = urlMode === "real" || urlMode === "dad" ? urlMode : storageGet(MODE_KEY) || "dad";
  setMode(initialMode, { silent: true });
  showFact();
  showJoke();
  showNews(params.get("news") || undefined);

  const initialQuestion = params.get("q");
  if (initialQuestion) run(initialQuestion);
  else focusQuietly();
})(window.AskDad);
