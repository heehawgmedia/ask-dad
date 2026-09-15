/*
 * Ask Dad — Real Search mode.
 *
 * Pulls genuine results from Wikipedia's public API (no key needed, CORS
 * friendly, works when index.html is opened straight from disk) and builds
 * links to hand the query off to a full web search engine.
 */
(function (AskDad) {
  "use strict";

  const WIKI_API = "https://en.wikipedia.org/w/api.php";
  const WIKI_SUMMARY = "https://en.wikipedia.org/api/rest_v1/page/summary/";

  const engines = [
    { id: "duckduckgo", name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
    { id: "google", name: "Google", url: "https://www.google.com/search?q=" },
    { id: "bing", name: "Bing", url: "https://www.bing.com/search?q=" },
    { id: "brave", name: "Brave Search", url: "https://search.brave.com/search?q=" }
  ];

  function engineUrl(engine, query) {
    return engine.url + encodeURIComponent(query);
  }

  // Wikipedia snippets contain <span class="searchmatch"> markup; keep text only.
  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  function wikiPath(title) {
    return encodeURIComponent(title.replace(/ /g, "_"));
  }

  async function getJson(url, signal) {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error("Request failed with status " + res.status);
    return res.json();
  }

  async function fetchSummary(title, signal) {
    try {
      const s = await getJson(WIKI_SUMMARY + wikiPath(title), signal);
      if (!s.extract || s.type === "disambiguation") return null;
      return {
        title: s.title,
        extract: s.extract,
        url: (s.content_urls && s.content_urls.desktop && s.content_urls.desktop.page) || "https://en.wikipedia.org/wiki/" + wikiPath(title),
        thumbnail: s.thumbnail ? s.thumbnail.source : null
      };
    } catch (err) {
      if (err.name === "AbortError") throw err;
      return null; // A missing summary shouldn't sink the whole search.
    }
  }

  /**
   * Search Wikipedia.
   * @returns {Promise<{results: Array, summary: object|null, total: number}>}
   */
  async function search(query, signal) {
    const params = new URLSearchParams({
      action: "query",
      list: "search",
      srsearch: query,
      srlimit: "8",
      format: "json",
      origin: "*",
      utf8: "1"
    });

    const json = await getJson(WIKI_API + "?" + params, signal);
    const hits = (json.query && json.query.search) || [];

    const results = hits.map((item) => ({
      title: item.title,
      url: "https://en.wikipedia.org/wiki/" + wikiPath(item.title),
      snippet: stripHtml(item.snippet)
    }));

    const summary = results.length ? await fetchSummary(results[0].title, signal) : null;
    const total = json.query && json.query.searchinfo ? json.query.searchinfo.totalhits : results.length;

    return { results, summary, total };
  }

  AskDad.realSearch = { search, engines, engineUrl };
})(window.AskDad);
