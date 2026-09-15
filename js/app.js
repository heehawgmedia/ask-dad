/*
 * Ask Dad — UI glue: the mode toggle, the search box, and rendering results.
 * Everything is rendered with textContent, never innerHTML, so questions and
 * API results can't inject markup.
 */
(function (AskDad) {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const els = {
    toggle: $("mode-toggle"),
    form: $("search-form"),
    input: $("q"),
    ask: $("ask-btn"),
    lucky: $("lucky-btn"),
    results: $("results"),
    tagline: $("tagline"),
    footer: $("footer-note"),
    toast: $("toast"),
    logo: document.querySelector(".logo")
  };

  const MODE_KEY = "askdad.mode";

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
    controller: null
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
  }

  function showThinking(text) {
    els.results.replaceChildren(
      el("div", { class: "thinking" }, [
        el("span", { class: "spinner", "aria-hidden": "true" }),
        el("span", { text })
      ])
    );
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
      ? "Real answers. Dad is supervising from the recliner."
      : AskDad.brain.randomTagline();
    els.footer.textContent = real
      ? "Real Search: results come from Wikipedia. Engine buttons open that search engine in a new tab."
      : "Dad Mode: every answer is 100% satire. Do not use for homework, taxes, or surgery.";

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
    document.body.classList.add("has-results");
    updateUrl();

    cancelPending();
    const token = ++state.token;
    if (state.mode === "real") runReal(question, token);
    else runDad(question, token);
  }

  function runDad(question, token) {
    showThinking(AskDad.brain.thinkingLine());
    state.timer = setTimeout(() => {
      if (token !== state.token) return;
      renderDad(AskDad.brain.answer(question, state.attempt));
    }, 500 + Math.random() * 700);
  }

  async function runReal(question, token) {
    showThinking("Searching Wikipedia...");
    const controller = new AbortController();
    state.controller = controller;
    try {
      const data = await AskDad.realSearch.search(question, controller.signal);
      if (token === state.token) renderReal(question, data);
    } catch (err) {
      if (err.name === "AbortError" || token !== state.token) return;
      renderRealError(question);
    }
  }

  // ---------- rendering: Dad Mode ----------

  function renderDad(a) {
    const answerCard = el("section", { class: "card", "aria-label": "Dad's answer" }, [
      el("h2", { text: "Dad's Answer" }),
      el("p", { class: "dad-answer", text: `${a.opener} ${a.body} ${a.closer}` }),
      el("p", { class: "signoff", text: a.signoff }),
      el("div", { class: "confidence" }, [
        el("span", { text: "Confidence:" }),
        el("div", { class: "meter" }, el("div", { class: "meter-fill" })),
        el("strong", { text: `${a.confidence}%` })
      ]),
      el("div", { class: "card-actions" }, [
        el("button", { type: "button", class: "btn", text: "🔁 Ask again", onclick: () => run(state.question, { again: true }) }),
        el("button", { type: "button", class: "btn", text: "🔎 Get a real answer", onclick: () => setMode("real") })
      ])
    ]);

    const facts = el("ul", { class: "facts" }, a.facts.map((fact) => el("li", { text: fact })));

    const alsoAsk = el("div", { class: "also-ask" },
      a.alsoAsk.map((q) => el("button", { type: "button", text: q, onclick: () => run(q) }))
    );

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

    els.results.replaceChildren(
      el("p", { class: "stats", text: `About ${a.resultCount} results (0.00 seconds of actual thought)` }),
      answerCard,
      el("h3", { class: "section-title", text: "Dad Facts™" }),
      facts,
      el("h3", { class: "section-title", text: "People also ask Dad" }),
      alsoAsk,
      el("h3", { class: "section-title", text: "Top results" }),
      ...results
    );
  }

  // ---------- rendering: Real Search ----------

  function engineButtons(question) {
    return el("div", { class: "engines" },
      AskDad.realSearch.engines.map((engine) =>
        externalLink(AskDad.realSearch.engineUrl(engine, question), `${engine.name} ↗`, "btn")
      )
    );
  }

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
      const s = data.summary;
      nodes.push(
        el("section", { class: "card", "aria-label": "Quick answer" }, [
          el("h2", { text: "Quick answer · Wikipedia" }),
          el("div", { class: "summary" }, [
            s.thumbnail ? el("img", { src: s.thumbnail, alt: "" }) : null,
            el("div", null, [el("h3", { text: s.title }), el("p", { text: s.extract })])
          ]),
          el("div", { class: "card-actions" }, [externalLink(s.url, "Read on Wikipedia ↗", "btn")])
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
            el("p", { class: "result-snippet", text: `${r.snippet}…` })
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

  // ---------- events ----------

  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    run(els.input.value, { again: true });
  });

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

  els.logo.addEventListener("click", () => {
    cancelPending();
    state.token++;
    state.question = "";
    els.input.value = "";
    els.results.replaceChildren();
    document.body.classList.remove("has-results");
    updateUrl();
    els.input.focus();
  });

  // Press "/" anywhere to jump to the search box.
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== els.input) {
      event.preventDefault();
      els.input.focus();
    }
  });

  // ---------- start ----------

  const params = new URLSearchParams(location.search);
  const urlMode = params.get("mode");
  const initialMode = urlMode === "real" || urlMode === "dad" ? urlMode : storageGet(MODE_KEY) || "dad";
  setMode(initialMode, { silent: true });

  const initialQuestion = params.get("q");
  if (initialQuestion) run(initialQuestion);
  else els.input.focus();
})(window.AskDad);
