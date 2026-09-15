/*
 * Ask Dad — the satire engine.
 *
 * Takes a question, figures out roughly what kind of question it is and what
 * it's about, then assembles a gloriously wrong answer from responses.js.
 * Runs 100% offline. No network calls, no AI, just Dad.
 */
(function (AskDad) {
  "use strict";

  const data = AskDad.data;

  const YES_NO_WORDS = ["is", "are", "am", "can", "could", "should", "would", "will", "do", "does", "did", "was", "were", "has", "have"];

  const STOP_WORDS = new Set([
    "why", "how", "what", "whats", "when", "where", "who", "whos", "which",
    "is", "are", "am", "can", "could", "should", "would", "will", "do", "does", "did",
    "was", "were", "has", "have", "the", "a", "an", "my", "your", "our", "i", "you", "we",
    "it", "its", "to", "of", "in", "on", "for", "at", "by", "with", "about", "much", "many",
    "long", "far", "there", "really", "please", "dad", "me", "get", "gets", "got", "make", "go", "so", "be",
    "this", "that", "these", "those", "if", "and", "or", "but", "not", "dont", "just", "im", "ever"
  ]);

  // FNV-1a string hash, so the same question gives the same first answer.
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // mulberry32 seeded random number generator.
  function seededRandom(seed) {
    return function () {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pick(list, rand) {
    return list[Math.floor(rand() * list.length)];
  }

  function shuffle(list, rand) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function capitalise(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function words(question) {
    return question
      .toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
  }

  function questionType(wordList) {
    const first = wordList[0] || "";
    if (["why", "how", "what", "when", "where", "who"].includes(first)) return first;
    if (first === "whats") return "what";
    if (first === "whos") return "who";
    if (YES_NO_WORDS.includes(first)) return "yesno";
    return "other";
  }

  function extractTopic(wordList) {
    const meaningful = wordList.filter((w) => !STOP_WORDS.has(w));
    return meaningful.slice(0, 4).join(" ") || "that";
  }

  function matchTopic(wordList) {
    const wordSet = new Set(wordList);
    const matches = data.topics.filter((t) => t.keywords.some((k) => wordSet.has(k)));
    return matches;
  }

  function realTipsFor(topics) {
    const tips = [];
    for (let i = 0; tips.length < 2; i++) {
      const round = topics.filter((t) => t.realTips && t.realTips[i]).map((t) => t.realTips[i]);
      if (!round.length) break;
      tips.push(...round);
    }
    return tips.slice(0, 2);
  }

  // Fill {placeholders}. Runs twice so placeholders inside lists (e.g. an
  // item that mentions {year}) get filled too.
  function fill(template, ctx, rand) {
    const replacers = {
      topic: () => ctx.topic,
      Topic: () => capitalise(ctx.topic),
      number: () => pick([3, 7, 12, 17, 42, 68, 99, 212, 1138, 4000], rand).toString(),
      year: () => String(1952 + Math.floor(rand() * 43)),
      place: () => pick(data.places, rand),
      relative: () => pick(data.relatives, rand),
      item: () => pick(data.items, rand),
      Item: () => capitalise(pick(data.items, rand)),
      tool: () => pick(data.tools, rand),
      chore: () => pick(data.chores, rand),
      Chore: () => capitalise(pick(data.chores, rand)),
      price: () => pick(data.prices, rand)
    };
    let out = template;
    for (let pass = 0; pass < 2; pass++) {
      out = out.replace(/\{(\w+)\}/g, (match, key) => (replacers[key] ? replacers[key]() : match));
    }
    return out;
  }

  /**
   * Ask Dad a question.
   * @param {string} question
   * @param {number} attempt  bump this to get a different answer to the same question
   */
  function answer(question, attempt) {
    const wordList = words(question);
    const seed = hash(question.trim().toLowerCase()) + (attempt || 0) * 7919;
    const rand = seededRandom(seed);

    const ctx = { topic: extractTopic(wordList) };
    const type = questionType(wordList);
    const topics = matchTopic(wordList);

    let body;
    if (topics.length && rand() < 0.65) {
      body = pick(pick(topics, rand).answers, rand);
    } else {
      body = pick(data.byQuestionType[type], rand);
    }

    const f = (t) => fill(t, ctx, rand);
    const slugCtx = { topic: ctx.topic.replace(/\s+/g, "-") };

    return {
      question: question,
      topic: ctx.topic,
      category: topics.length ? topics[0].name : type,
      opener: f(pick(data.openers, rand)),
      body: f(body),
      closer: f(pick(data.closers, rand)),
      signoff: f(pick(data.signoffs, rand)),
      lesson: f(pick(data.lessons, rand)),
      // Real, non-satirical advice for recognised topics (shown under the Real
      // Answer). One tip per matched topic first, so "buy a car" gets a car tip.
      realTips: realTipsFor(topics),
      confidence: 100 + Math.floor(rand() * 400),
      resultCount: (Math.floor(rand() * 9000) + 1000).toLocaleString() + ",000,000",
      facts: shuffle(data.facts, rand).slice(0, 3).map(f),
      alsoAsk: shuffle(data.alsoAsk, rand).slice(0, 4).map(f),
      results: shuffle(data.fakeSites, rand).slice(0, 5).map((s) => ({
        url: fill(s.url, slugCtx, rand),
        title: f(s.title),
        snippet: f(s.snippet)
      }))
    };
  }

  // Words that start a question but don't describe its subject. Stripping them
  // stops Wikipedia matching "How I Met Your Mother" for "How do I save money?".
  const LEADING_FILLER = new Set([
    "why", "how", "what", "whats", "when", "where", "who", "whos", "which",
    "is", "are", "am", "was", "were", "do", "does", "did", "can", "could", "should",
    "would", "will", "has", "have", "i", "you", "we", "my", "your", "our", "a", "an", "the",
    "to", "it", "its", "get", "make", "be", "go", "there", "really", "please", "dad", "me"
  ]);

  // Turn a question into terms suited to an encyclopedia search.
  function searchTerms(question) {
    const wordList = words(question);
    let start = 0;
    while (start < wordList.length - 1 && LEADING_FILLER.has(wordList[start])) start++;
    const terms = wordList.slice(start).join(" ");
    return terms || question.trim();
  }

  function thinkingLine() {
    const rand = Math.random;
    return fill(pick(data.thinking, rand), { topic: "that" }, rand);
  }

  function randomTagline() {
    return pick(data.taglines, Math.random);
  }

  function luckyQuestion() {
    return pick(data.luckyQuestions, Math.random);
  }

  // Random pick that never repeats the previous one, for "Another one" buttons.
  const lastPicked = {};
  function pickFresh(key, list) {
    let i = Math.floor(Math.random() * list.length);
    if (list.length > 1 && i === lastPicked[key]) i = (i + 1) % list.length;
    lastPicked[key] = i;
    return list[i];
  }

  function homeFact() {
    return fill(pickFresh("fact", data.homeFacts), { topic: "that" }, Math.random);
  }

  function dadJoke() {
    return pickFresh("joke", data.jokes);
  }

  AskDad.brain = { answer, searchTerms, thinkingLine, randomTagline, luckyQuestion, homeFact, dadJoke };
})(window.AskDad);
