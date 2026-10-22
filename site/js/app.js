(() => {
  "use strict";

  const D = window.DATA;
  const TL = window.TIMELINES || {};
  const P = D.profile;
  const projects = D.projects;
  const skills = D.skills;
  const pById = Object.fromEntries(projects.map((p) => [p.id, p]));
  const sById = Object.fromEntries(skills.map((s) => [s.id, s]));
  const usedIn = (id) => projects.filter((p) => p.skills.some((s) => s.id === id));

  const root = document.documentElement;
  // The published site sets data-mode="live" on <html>: no Draft or "Needs you" tags, and no empty placeholder boxes.
  const live = root.dataset.mode === "live";
  const main = document.getElementById("main");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const state = { skill: null, route: null };

  /* ── Icons: one family, 1.6 stroke ── */
  const ico = (d) => `<svg class="ico" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const I = {
    home: ico('<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>'),
    projects: ico('<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'),
    skills: ico('<path d="m12 3.5 8.5 4.5-8.5 4.5L3.500 8z"/><path d="m3.500 12 8.500 4.500 8.500-4.500"/><path d="m3.500 16 8.500 4.500 8.500-4.500"/>'),
    about: ico('<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.600 3.500-5.500 7-5.500s6.200 1.900 7 5.500"/>'),
    mail: ico('<rect x="3.500" y="5.500" width="17" height="13" rx="2"/><path d="m4.500 7.500 7.500 5.500 7.500-5.500"/>'),
    sun: ico('<circle cx="12" cy="12" r="4"/><path d="M12 2.500v2M12 19.500v2M2.500 12h2M19.500 12h2M5.300 5.300l1.400 1.400M17.300 17.300l1.400 1.400M5.300 18.700l1.400-1.400M17.300 6.700l1.400-1.400"/>'),
    moon: ico('<path d="M20 14.500A8 8 0 0 1 9.500 4a7.500 7.500 0 1 0 10.500 10.500z"/>'),
    arrow: ico('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    out: ico('<path d="M7 17 17 7M8.500 7H17v8.500"/>'),
    back: ico('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    down: ico('<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>'),
    copy: ico('<rect x="8.500" y="8.500" width="11.500" height="11.500" rx="2"/><path d="M15.500 8.500V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.500a2 2 0 0 0 2 2h2.500"/>'),
    check: ico('<path d="m5 12.500 4.500 4.500L19 7.500"/>'),
    close: ico('<path d="M6.500 6.500 17.500 17.500M17.500 6.500 6.500 17.500"/>'),
    chevron: ico('<path d="m6 9 6 6 6-6"/>'),
    alert: '<svg class="ico ico-alert" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 7.2v6" fill="none" stroke="var(--on-red)" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.6" r="1.2" fill="var(--on-red)"/></svg>',
    loop: ico('<path d="M20 11A8 8 0 0 0 6 6.500L4 8.500"/><path d="M4 4v4.500h4.500"/><path d="M4 13a8 8 0 0 0 14 4.500l2-2"/><path d="M20 20v-4.500h-4.500"/>')
  };

  /* ── Small render helpers ── */
  const note = (text = "Draft") => (live ? "" : `<span class="note">${esc(text)}</span>`);
  const coverClass = (p) => ["cover", p.coverGray && "is-gray", p.coverInvert && "is-invert", p.coverPixel && "is-pixel", p.coverIcon && "is-icon"].filter(Boolean).join(" ");
  const cover = (p, alt = "") => `<img class="${coverClass(p)}" src="${p.cover}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  const month = (ym) => {
    const [y, m] = ym.split("-").map(Number);
    return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1]} ${y}`;
  };

  /* ── Home ── */
  // The page below the headline is one sheet: a line down each side, and one more line a quarter of the way in
  // that runs from the facts down through every section. Each section's heading sits left of that line.
  const tableRow = (p) => {
    const built = p.skills.map((x) => sById[x.id].name);
    return `
      <li class="trow">
        <a class="trow-link" href="#/project/${p.id}">
          <span class="t-name">${esc(p.title)}</span>
          <span class="t-period num">${esc(p.years)}</span>
          <span class="t-role">${esc(p.role)}</span>
          <span class="t-what">${esc(p.summary)}</span>
          <span class="t-built"><b>${esc(built[0])}</b><small>${esc(built.slice(1, 3).join(", "))}</small></span>
          <i class="t-go" aria-hidden="true">${I.out}</i>
        </a>
      </li>`;
  };

  const viewHome = () => `
    <section class="hero" id="home" data-spy="home">
      <div class="wrap">
        <h1 class="hero-h">Aspiring product developer and designer, building apps from first idea to release.</h1>
      </div>
    </section>

    <div class="wrap">
      <div class="sheet run">
        <dl class="facts">
          ${P.facts.map((f) => `<div><dt class="band lab">${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("")}
          <div><dt class="band lab">Contact</dt><dd><a class="textlink" href="mailto:${P.email}">${esc(P.email)}</a></dd></div>
        </dl>

        <section class="sec" id="projects" data-spy="projects">
          <header class="shead"><h2 class="stitle">Projects</h2></header>
          <div class="ptable">
            <i class="cl" style="--x:4"></i><i class="cl" style="--x:6"></i><i class="cl" style="--x:10"></i>
            <div class="band thead lab" aria-hidden="true"><span>Project</span><span>Period</span><span>Role</span><span>What it is</span><span>Built with</span></div>
            <ul class="trows">${projects.map(tableRow).join("")}</ul>
          </div>
        </section>

        <section class="sec" id="skills" data-spy="skills">
          <header class="shead"><h2 class="stitle">Skills</h2></header>
          <div class="sgrid">
            ${D.skillGroups.map((g) => `
              <div class="sgroup">
                <h3 class="band lab">${esc(g.name)}</h3>
                <ul class="slist">${skills.filter((x) => x.group === g.id).map((x) => `<li data-skill="${x.id}"${x.id === state.skill ? ' class="is-on"' : ""}>${esc(x.name)}</li>`).join("")}</ul>
              </div>`).join("")}
          </div>
        </section>

        <section class="sec" id="about" data-spy="about">
          <div class="abox">
            <h2 class="stitle">About</h2>
            ${P.about.map((a, i) => `
              <article class="aitem">
                <h3 class="band lab">${esc(a.title)}</h3>
                <p>${esc(a.text)}</p>
                <span class="anum num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
              </article>`).join("")}
          </div>
        </section>

        <section class="sec" id="contact" data-spy="contact">
          <div class="cbox">
            <h2 class="stitle">Contact</h2>
            <div class="c-mail">
              <h3 class="band lab">Email</h3>
              <div class="mailrow">
                <a class="mail" href="mailto:${P.email}">${esc(P.email)}</a>
                <button type="button" class="btn btn-ghost" data-copy="${esc(P.email)}">${I.copy}<span>Copy</span></button>
              </div>
            </div>
            <div class="c-links">
              <h3 class="band lab">Elsewhere</h3>
              <ul>
                <li><a class="blink" href="${P.github}" target="_blank" rel="noopener">GitHub</a></li>
                ${P.linkedin ? `<li><a class="blink" href="${P.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>` : live ? "" : `<li><span class="blink is-todo">LinkedIn</span>${note("Needs you")}</li>`}
                ${P.resume ? `<li><a class="blink" href="${P.resume}" download>Résumé</a></li>` : ""}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>`;

  /* ── Project page ── */
  const flowChart = (flow) => {
    const n = flow.nodes.length;
    return `
      <div class="flow-wrap">
        <ol class="flow">
          ${flow.nodes.map((node) => `
            <li class="flow-node">
              <b>${esc(node.label)}</b>
              ${node.sub ? `<span>${esc(node.sub)}</span>` : ""}
              ${node.split ? `<span class="split">${node.split.map((o) => `<i>${esc(o)}</i>`).join("")}</span>` : ""}
            </li>`).join("")}
        </ol>
        ${flow.loop ? `
          <div class="flow-loop" style="--n:${n};--from:${flow.loop.from};--to:${flow.loop.to}" aria-hidden="true"><span>${esc(flow.loop.label)}</span></div>
          <p class="flow-loop-text">${I.loop}<span>Step ${String(flow.loop.to).padStart(2, "0")} feeds back into step ${String(flow.loop.from).padStart(2, "0")}. ${esc(flow.loop.label)}.</span></p>` : ""}
      </div>`;
  };

  const timeline = (p) => {
    const steps = TL[p.id] || [];
    if (!steps.length) return "";
    return `
      <details class="tl">
        <summary><span>Full timeline, ${plural(steps.length, "step")}</span>${I.chevron}</summary>
        <ol class="tl-list">
          ${steps.map((s) => `
            <li class="tl-item">
              <span class="tl-date">${month(s.date)}</span>
              <b>${esc(s.title)}</b>
              <p>${esc(s.desc)}</p>
            </li>`).join("")}
        </ol>
      </details>`;
  };

  const metaValue = (v) => (v && typeof v === "object" ? note(v.todo) : esc(v));

  const viewProject = (p) => {
    const i = projects.indexOf(p);
    const next = projects[(i + 1) % projects.length];
    const prev = projects[(i - 1 + projects.length) % projects.length];
    const findings = live ? p.findings.filter((f) => !f.todo) : p.findings;
    const skillLinks = p.skills.map((s) => `<a class="textlink" href="#/skills/${s.id}">${esc(sById[s.id].name)}</a>`).join(", ");
    return `
    <article class="project">
      <header class="wrap phead">
        <div class="pcol">
          <h1 class="p-title">${esc(p.title)}</h1>
          <p class="lede p-summary">${esc(p.summary)}</p>
        </div>
        ${p.cover
          ? `<figure class="p-hero">${cover(p, `${p.title} cover image`).replace(' loading="lazy"', "")}</figure>`
          : live ? "" : `<figure class="p-hero shot"><span>${esc(p.coverTodo || "Cover image")}</span></figure>`}
      </header>

      <div class="wrap">
        <div class="pcol">
          <div class="p-intro">
            <p>${esc(p.does)}</p>
            <p>${esc(p.did)}</p>
            ${p.link ? `<p class="p-links"><a class="btn btn-ghost" href="${p.link.href}" target="_blank" rel="noopener">${esc(p.link.label)}${I.out}</a></p>` : ""}
          </div>

          <dl class="pmeta">
            <div><dt>Product</dt><dd>${esc(p.product)}</dd></div>
            <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
            <div><dt>Timeline</dt><dd class="num">${esc(p.span)}</dd></div>
            <div class="pmeta-skills"><dt>Skills</dt><dd>${skillLinks}</dd></div>
            ${live && typeof p.team === "object" ? "" : `<div><dt>Team</dt><dd>${metaValue(p.team)}</dd></div>`}
            <div><dt>Type</dt><dd>${esc(p.type)}</dd></div>
          </dl>

          <section class="psec">
            <h2>Abstract</h2>
            <div class="ptext">${p.abstract.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
            ${live ? "" : `<div class="shots">${p.media.map((m) => `<div class="shot"><span>${esc(m)}</span></div>`).join("")}</div>`}
          </section>

          <section class="psec">
            <h2>Method</h2>
            ${flowChart(p.flow)}
            ${timeline(p)}
          </section>

          <section class="psec">
            <h2>Problems, and what I did about them</h2>
            <ul class="ppanel">
              ${p.problems.map((x) => `
                <li>
                  ${I.alert}
                  <div>
                    <b><span class="sr">Problem: </span>${esc(x.problem)}</b>
                    <p><span class="sr">What I did: </span>${esc(x.fix)}${x.draft ? note() : ""}</p>
                  </div>
                </li>`).join("")}
            </ul>
          </section>

          ${findings.length ? `
          <section class="psec">
            <h2>Findings</h2>
            <div class="ptiles">
              ${findings.map((f) => (f.todo
                ? `<div class="ptile is-todo">${note("Needs you")}<p>${esc(f.todo)}</p></div>`
                : `<div class="ptile"><b>${esc(f.head)}</b><p>${esc(f.body)}${f.draft ? note() : ""}</p></div>`)).join("")}
            </div>
          </section>` : ""}

          <nav class="pend" aria-label="Other projects">
            <a class="prev-link" href="#/project/${prev.id}">${I.back}<span>Previous: ${esc(prev.title)}</span></a>
            <a class="next" href="#/project/${next.id}">
              <span class="next-t"><span class="dim">Next:</span> ${esc(next.title)}</span>
              <span class="go" aria-hidden="true">${I.arrow}</span>
            </a>
          </nav>
        </div>
      </div>

      <div class="pager">
        <a href="#/project/${prev.id}" aria-label="Previous project: ${esc(prev.title)}"><span class="tip" aria-hidden="true">Previous: ${esc(prev.title)}</span>${I.back}</a>
        <a href="#/project/${next.id}" aria-label="Next project: ${esc(next.title)}"><span class="tip" aria-hidden="true">Next: ${esc(next.title)}</span>${I.arrow}</a>
      </div>
    </article>`;
  };

  /* ── Persistent chrome ── */
  const contactRows = () => `
    <div class="crow">
      <a href="mailto:${P.email}"><span class="label">Email</span><b>${esc(P.email)}</b></a>
      <button type="button" class="btn btn-ghost" data-copy="${esc(P.email)}">${I.copy}<span>Copy</span></button>
    </div>
    <div class="crow"><a href="${P.github}" target="_blank" rel="noopener"><span class="label">GitHub</span><b>${esc(P.githubLabel)}</b></a>${I.out}</div>
    ${P.linkedin
      ? `<div class="crow"><a href="${P.linkedin}" target="_blank" rel="noopener"><span class="label">LinkedIn</span><b>Profile</b></a>${I.out}</div>`
      : live ? "" : `<div class="crow is-todo"><span><span class="label">LinkedIn</span>Add your profile link${note("Needs you")}</span></div>`}
    ${P.resume ? `<div class="crow"><a href="${P.resume}" download><span class="label">Résumé</span><b>Download the PDF</b></a>${I.down}</div>` : ""}`;

  const renderChrome = () => {
    if (P.resume) $(".nav").insertAdjacentHTML("beforeend", `<a id="resume-link" href="${P.resume}" download>Résumé</a>`);
    // Shown only on project pages, beside the theme toggle.
    $(".topbar-actions").insertAdjacentHTML("beforeend",
      `<a class="iconbtn" id="project-close" href="#/projects" aria-label="Close this project and go back to all projects" title="All projects">${I.close}</a>`);
  };

  const footerHome = () => `
    <div class="wrap">
      <div class="sheet foot-sheet">
        <p class="bigname" aria-hidden="true"><span>${esc(P.name)}</span></p>
        <div class="colophon"><span>© 2026 ${esc(P.name)}</span><a class="textlink" href="mailto:${P.email}">${esc(P.email)}</a></div>
      </div>
    </div>`;

  const footerProject = () => `
    <div class="wrap">
      <div class="pcol pfoot">
        <span>© 2026 ${esc(P.name)}</span>
        <span class="pfoot-links">
          <a class="textlink" href="#/projects">All projects</a>
          <a class="textlink" href="mailto:${P.email}">${esc(P.email)}</a>
        </span>
      </div>
    </div>`;

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable: theme just won't persist */ }
    const btn = $("#theme-toggle");
    btn.innerHTML = theme === "dark" ? I.sun : I.moon;
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };

  /* ── Top bar: the link for the section on screen is lit ── */
  let activeNav = null;
  const setActiveNav = (name) => {
    if (name === activeNav) return;
    activeNav = name;
    $$(".nav [data-nav]").forEach((a) => {
      if (a.dataset.nav === name) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  };

  let spy = null;
  const watch = (selector, attr, onHit) => {
    if (spy) spy.disconnect();
    spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) onHit(e.target.dataset[attr]); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    $$(selector).forEach((el) => spy.observe(el));
  };
  /* ── Skills: arriving from a project page's skill link lights that skill in the list ── */
  const highlightSkill = (id) => {
    if (!sById[id]) return;
    state.skill = id;
    $$(".slist [data-skill]").forEach((li) => li.classList.toggle("is-on", li.dataset.skill === id));
  };

  /* ── Router ── */
  const parse = () => {
    const [a, b] = location.hash.replace(/^#\/?/, "").split("/");
    if (a === "project" && pById[b]) return { view: "project", id: b };
    if (["projects", "skills", "about", "contact"].includes(a)) return { view: "home", section: a, skill: a === "skills" && sById[b] ? b : null };
    return { view: "home", section: null, skill: null };
  };

  const scrollToSection = (section, smooth) => {
    const behavior = smooth && !reduced ? "smooth" : "instant";
    if (!section) { window.scrollTo({ top: 0, behavior }); return; }
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior, block: "start" });
  };

  const mount = (r) => {
    root.dataset.view = r.view;
    if (r.view === "project") {
      const p = pById[r.id];
      main.innerHTML = viewProject(p);
      $(".footer").innerHTML = footerProject();
      document.title = `${p.title} · ${P.name}`;
      window.scrollTo({ top: 0, behavior: "instant" });
      if (spy) spy.disconnect();
    } else {
      if (r.skill) state.skill = r.skill;
      main.innerHTML = viewHome();
      $(".footer").innerHTML = footerHome();
      document.title = P.name;
      fitName();
      scrollToSection(r.section, false);
      setActiveNav(r.section || "home");
      watch("[data-spy]", "spy", setActiveNav);
    }
    syncMockbar();
  };

  // Scroll memory. Every in-app move comes from a link click or the Escape shortcut, which set `linkNav`.
  // A hash change without it is the browser's Back or Forward, and that returns you to where you were.
  const scrollMemo = new Map();
  const keyOf = () => location.hash || "#/";
  let shownKey = null;
  let linkNav = false;

  const route = () => {
    const r = parse();
    const prev = state.route;
    const traversal = Boolean(prev) && !linkNav;
    linkNav = false;
    if (shownKey !== null) scrollMemo.set(shownKey, window.scrollY);
    shownKey = keyOf();
    const saved = traversal ? scrollMemo.get(shownKey) : undefined;
    state.route = r;

    if (prev && prev.view === "home" && r.view === "home") {
      if (r.skill) highlightSkill(r.skill);
      if (saved !== undefined) window.scrollTo({ top: saved, behavior: reduced ? "instant" : "smooth" });
      else scrollToSection(r.section, true);
      return;
    }
    const show = () => {
      mount(r);
      if (saved !== undefined) { window.scrollTo({ top: saved, behavior: "instant" }); syncMockbar(); }
    };
    if (prev && document.startViewTransition && !reduced) {
      // A second navigation can cut a transition short; that is expected, so its rejections are not errors.
      const t = document.startViewTransition(show);
      t.ready.catch(() => {});
      t.finished.catch(() => {});
    } else {
      show();
    }
    main.focus({ preventScroll: true });
  };

  /* ── Footer name: scale the full name to exactly the column width ── */
  const fitName = () => {
    const el = $(".bigname span");
    if (!el) return;
    const box = getComputedStyle(el.parentElement);
    const target = el.parentElement.clientWidth - parseFloat(box.paddingLeft) - parseFloat(box.paddingRight);
    // Text width does not grow exactly in step with font size, so the second pass corrects at the real size.
    let size = 100;
    for (let pass = 0; pass < 2; pass++) {
      el.style.fontSize = `${size}px`;
      const width = el.getBoundingClientRect().width;
      if (width > 0) size *= target / width;
    }
    el.style.fontSize = `${(Math.floor(size * 100) / 100).toFixed(2)}px`;
  };

  /* ── Events ── */
  const flash = (btn, text) => {
    const label = $("span", btn);
    const before = label.textContent;
    label.textContent = text;
    setTimeout(() => { label.textContent = before; }, 1600);
  };

  document.addEventListener("click", (e) => {
    const copy = e.target.closest("[data-copy]");
    if (copy) {
      navigator.clipboard.writeText(copy.dataset.copy).then(() => flash(copy, "Copied"), () => flash(copy, "Copy failed"));
      return;
    }

    const link = e.target.closest('a[href^="#/"]');
    if (link) {
      // A modified click opens another tab or window and leaves this page where it is.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const samePlace = link.getAttribute("href") === keyOf();
      linkNav = true;
      // Clicking the link for the place you are already at should still take you there.
      if (samePlace) { e.preventDefault(); route(); }
    }
  });

  $("#theme-toggle").addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  // Mockup only: keeps the floating corner buttons on project pages clear of the note bar while it is on screen.
  function syncMockbar() {
    const bar = $("#mockbar");
    if (!bar) return;
    const visible = bar.hidden ? 0 : Math.max(0, bar.offsetHeight - window.scrollY);
    root.style.setProperty("--mock-h", `${visible}px`);
  }

  $("#mockbar-close")?.addEventListener("click", () => { $("#mockbar").hidden = true; syncMockbar(); });
  window.addEventListener("hashchange", route);
  window.addEventListener("resize", () => { fitName(); syncMockbar(); });
  window.addEventListener("scroll", syncMockbar, { passive: true });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root.dataset.view === "project" && !e.defaultPrevented) { linkNav = true; location.hash = "#/projects"; }
  });

  /* ── Start ── */
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  root.classList.add("is-first");
  setTimeout(() => root.classList.remove("is-first"), 2400);
  renderChrome();
  setTheme(root.dataset.theme || "dark");
  route();
  fitName();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);
})();
