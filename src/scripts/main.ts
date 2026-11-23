// Site interactions — vanilla TypeScript, no dependencies.
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isRTL = document.documentElement.dir === 'rtl';

/* ---------------- light / dark mode (same localStorage key "mode" as the original site) */
function initTheme() {
  const btn = $<HTMLButtonElement>('[data-theme-toggle]');
  if (!btn) return;
  const label = $('.tt-label', btn);
  const sync = () => {
    const dark = document.documentElement.classList.contains('dark-mode');
    const text = dark ? btn.dataset.labelLight! : btn.dataset.labelDark!;
    btn.setAttribute('aria-label', text);
    btn.setAttribute('aria-pressed', String(dark));
    if (label) label.textContent = text;
  };
  sync();
  btn.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark-mode');
    try { localStorage.setItem('mode', dark ? 'dark' : 'light'); } catch {}
    sync();
  });
}

/* ---------------- header: glass on scroll, hide on scroll down, dropdown + mobile menu */
function initHeader() {
  const h = $('[data-header]');
  if (!h) return;
  let last = 0;
  const onScroll = () => {
    const y = window.scrollY;
    h.classList.toggle('is-scrolled', y > 40);
    const menuOpen = !!$('.mobile-menu.open');
    h.classList.toggle('is-hidden', y > 500 && y > last + 4 && !menuOpen && !h.matches(':hover'));
    if (y < last - 4 || y < 500) h.classList.remove('is-hidden');
    last = y;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  $$('.has-drop').forEach((li) => {
    const b = $('button', li)!;
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = li.classList.toggle('open');
      b.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', () => $$('.has-drop.open').forEach((li) => li.classList.remove('open')));

  const menu = $('[data-menu]');
  const openBtn = $('[data-menu-open]');
  const close = () => {
    menu?.classList.remove('open');
    openBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => menu && (menu.hidden = true), 350);
  };
  openBtn?.addEventListener('click', () => {
    if (!menu) return;
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('open'));
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });
  $('[data-menu-close]')?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

/* ---------------- reveal-on-scroll + split text + counters */
function animateCount(el: HTMLElement) {
  const end = parseFloat(el.dataset.count || '0');
  const decimals = (el.dataset.count || '').split('.')[1]?.length || 0;
  if (reduced) { el.textContent = end.toFixed(decimals); return; }
  const dur = 1600;
  const t0 = performance.now();
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (end * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function splitText(root: HTMLElement) {
  let i = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        // keep words together so lines wrap naturally; animate each character
        (n.textContent || '').split(/(\s+)/).forEach((word) => {
          if (!word) return;
          if (/^\s+$/.test(word)) { frag.appendChild(document.createTextNode(word)); return; }
          const w = document.createElement('span');
          w.style.display = 'inline-block';
          w.style.whiteSpace = 'nowrap';
          // Arabic letters must stay joined: animate whole words in RTL
          const parts = isRTL ? [word] : Array.from(word);
          parts.forEach((ch) => {
            const s = document.createElement('span');
            s.className = 'ch';
            s.textContent = ch;
            s.style.transitionDelay = `${(i++ * (isRTL ? 0.08 : 0.025)).toFixed(3)}s`;
            w.appendChild(s);
          });
          frag.appendChild(w);
        });
        n.parentNode!.replaceChild(frag, n);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(root);
}

function initReveal() {
  $$('[data-split]').forEach(splitText);
  const targets = $$('.reveal, [data-split], [data-count]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => { el.classList.add('in'); if (el.dataset.count) animateCount(el); });
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.classList.add('in');
        if (el.dataset.count) animateCount(el);
        io.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  targets.forEach((el) => io.observe(el));
}

/* ---------------- home hero slider */
function initHero() {
  const hero = $('[data-hero]');
  if (!hero) return;
  const slides = $$('[data-slide]', hero);
  const dots = $$('[data-dot]', hero);
  let idx = 0;
  let timer: number | undefined;
  const go = (n: number) => {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  };
  const play = () => { clearInterval(timer); timer = window.setInterval(() => go(idx + 1), 6500); };
  dots.forEach((d) => d.addEventListener('click', () => { go(+d.dataset.dot!); play(); }));
  if (!reduced) play();
}

/* ---------------- simple image cross-fader */
function initFaders() {
  $$('[data-fader]').forEach((f) => {
    const imgs = $$('img', f);
    if (imgs.length < 2 || reduced) return;
    let i = 0;
    setInterval(() => {
      imgs[i].classList.remove('is-active');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('is-active');
    }, 4000);
  });
}

/* ---------------- projects coverflow carousel */
function initProjectCarousel() {
  const root = $('[data-proj-carousel]');
  if (!root) return;
  const slides = $$<HTMLAnchorElement>('.proj-slide', root);
  const n = slides.length;
  let idx = 0;
  const layout = () => {
    const w = slides[0].offsetWidth;
    const gap = window.innerWidth < 900 ? 16 : 60;
    slides.forEach((s, i) => {
      let off = i - idx;
      if (off > n / 2) off -= n;
      if (off < -n / 2) off += n;
      const dir = isRTL ? -1 : 1;
      const x = off * (w + gap) * dir;
      const center = off === 0;
      s.style.transform = `translateX(${x}px) scale(${center ? 1 : 0.86})`;
      s.style.opacity = Math.abs(off) > 1 ? '0' : '1';
      s.style.zIndex = center ? '3' : '1';
      s.classList.toggle('is-active', center);
      s.tabIndex = center ? 0 : -1;
    });
  };
  const go = (d: number) => { idx = (idx + d + n) % n; layout(); };
  $('[data-prev]', root)?.addEventListener('click', () => go(-1));
  $('[data-next]', root)?.addEventListener('click', () => go(1));
  slides.forEach((s, i) =>
    s.addEventListener('click', (e) => {
      if (i !== idx) { e.preventDefault(); idx = i; layout(); }
    })
  );
  // swipe
  let sx = 0;
  root.addEventListener('pointerdown', (e) => (sx = e.clientX));
  root.addEventListener('pointerup', (e) => {
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 50) go((dx < 0 ? 1 : -1) * (isRTL ? -1 : 1));
  });
  window.addEventListener('resize', layout);
  layout();
  if (!reduced) {
    let t = window.setInterval(() => go(1), 5000);
    root.addEventListener('mouseenter', () => clearInterval(t));
    root.addEventListener('mouseleave', () => (t = window.setInterval(() => go(1), 5000)));
  }
}

/* ---------------- continuous marquee (clients, facilities, words) */
function initMarquees() {
  $$('[data-marquee]').forEach((track) => {
    const speed = parseFloat(track.dataset.speed || '45'); // px per second
    let x = 0;
    let paused = false;
    let last = performance.now();
    if (track.hasAttribute('data-pause-hover')) {
      track.addEventListener('mouseenter', () => (paused = true));
      track.addEventListener('mouseleave', () => (paused = false));
    }
    if (reduced) return;
    const step = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      const third = track.scrollWidth / parseInt(track.dataset.copies || '2', 10);
      if (!paused) {
        x -= speed * dt;
        if (-x >= third) x += third;
      }
      track.style.transform = `translateX(${isRTL ? -x : x}px)`;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ---------------- tabs (who we are / landmark / floor plans) */
function initTabs() {
  $$('[data-tabs]').forEach((root) => {
    const btns = $$<HTMLButtonElement>('[data-tab]', root);
    const panels = $$('[data-panel]', root);
    btns.forEach((b) => {
      const activate = () => {
        btns.forEach((x) => x.classList.toggle('is-active', x === b));
        panels.forEach((p) => p.classList.toggle('is-active', p.dataset.panel === b.dataset.tab));
        // replay counters inside the newly shown panel
        $$('[data-count]', panels.find((p) => p.dataset.panel === b.dataset.tab)!).forEach(animateCount);
      };
      b.addEventListener('click', activate);
      if (root.classList.contains('who') || root.classList.contains('landmark')) b.addEventListener('mouseenter', activate);
    });
  });
}

/* ---------------- unit types accordion with synced image */
function initAccordion() {
  $$('[data-accordion]').forEach((root) => {
    const heads = $$<HTMLButtonElement>('[data-acc]', root);
    const imgs = $$('[data-unit-img]', root);
    heads.forEach((h) =>
      h.addEventListener('click', () => {
        const item = h.closest('.acc-item')!;
        const willOpen = !item.classList.contains('is-open');
        heads.forEach((x) => { x.closest('.acc-item')!.classList.remove('is-open'); x.setAttribute('aria-expanded', 'false'); });
        if (willOpen) {
          item.classList.add('is-open');
          h.setAttribute('aria-expanded', 'true');
          stack(+h.dataset.acc!);
        }
      })
    );
    // stacked cards: the active image in front, the others peeking behind it
    function stack(active: number) {
      const n = imgs.length;
      imgs.forEach((im) => {
        const i = +im.dataset.unitImg!;
        im.classList.toggle('is-active', i === active);
        im.style.setProperty('--o', String((i - active + n) % n));
      });
    }
    const first = imgs.find((im) => im.classList.contains('is-active'));
    if (first) stack(+first.dataset.unitImg!);
  });
}

/* ---------------- why choose list: hover / auto-cycle */
function initWhy() {
  const list = $('[data-why]');
  if (!list) return;
  const items = $$('.why-item', list);
  items.forEach((it) => it.addEventListener('mouseenter', () => items.forEach((x) => x.classList.toggle('is-active', x === it))));
}

/* ---------------- YouTube video: autoplay muted when visible (like the original) */
function initVideo() {
  const sec = $('[data-yt]');
  if (!sec) return;
  const id = sec.dataset.yt!;
  const frame = $('.video-frame', sec)!;
  let loaded = false;
  const load = (autoplay: boolean) => {
    if (loaded) return;
    loaded = true;
    const params = new URLSearchParams({ autoplay: autoplay ? '1' : '0', mute: '1', loop: '1', playlist: id, controls: '1', rel: '0', playsinline: '1', modestbranding: '1' });
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${id}?${params}`;
    f.title = 'Jiwa Developments';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    f.allowFullscreen = true;
    frame.innerHTML = '';
    frame.appendChild(f);
  };
  $('[data-yt-play]', sec)?.addEventListener('click', () => load(true));
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (load(true), io.disconnect())), { rootMargin: '200px' });
    io.observe(sec);
  }
}

/* ---------------- subtle parallax for page-title banners */
function initParallax() {
  const els = $$('[data-parallax]');
  if (!els.length || reduced) return;
  const onScroll = () => {
    const y = window.scrollY;
    els.forEach((el) => { if (y < 900) el.style.transform = `translate3d(0, ${y * 0.25}px, 0)`; });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------------- careers filters */
function initJobs() {
  const root = $('[data-jobs]');
  if (!root) return;
  const sels = $$<HTMLSelectElement>('[data-filter]', root);
  const rows = $$('.job-row', root);
  const empty = $('.job-empty', root);
  const apply = () => {
    let shown = 0;
    rows.forEach((r) => {
      const ok = sels.every((s) => !s.value || r.dataset[s.dataset.filter!] === s.value);
      r.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  };
  sels.forEach((s) => s.addEventListener('change', apply));
}

/* ---------------- forms: POST to PUBLIC_FORM_ENDPOINT, or fall back to the visitor's e-mail app */
function initForms() {
  $$<HTMLFormElement>('[data-form]').forEach((form) => {
    const status = $('.form-status', form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if ((form.elements.namedItem('_gotcha') as HTMLInputElement)?.value) return;
      const data = new FormData(form);
      const endpoint = form.dataset.endpoint;
      const say = (msg: string, ok: boolean) => {
        if (!status) return;
        status.textContent = msg;
        status.className = `form-status ${ok ? 'ok' : 'err'}`;
      };
      if (endpoint) {
        say(form.dataset.sending || '…', true);
        try {
          const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error(String(res.status));
          form.reset();
          say(form.dataset.ok!, true);
        } catch {
          say(form.dataset.err!, false);
        }
        return;
      }
      const lines: string[] = [];
      data.forEach((v, k) => { if (k !== '_gotcha' && typeof v === 'string' && v) lines.push(`${k}: ${v}`); });
      const href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(form.dataset.subject || 'Website enquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
      window.location.href = href;
      say(form.dataset.ok!, true);
    });
  });
}

initTheme();
initHeader();
initReveal();
initHero();
initFaders();
initProjectCarousel();
initMarquees();
initTabs();
initAccordion();
initWhy();
initVideo();
initParallax();
initJobs();
initForms();
