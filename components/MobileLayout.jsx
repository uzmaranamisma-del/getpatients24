"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Phone layout helper. On screens up to 760px it tags the page's card groups so the
// CSS in globals.css (section "Phone layout") can show them as swipe carousels,
// compact icon rows or 2-up stat grids. It only adds class names and small dot
// indicators; it never moves React-owned nodes, and on wider screens nothing applies.

const QUERY = "(max-width: 760px)";

function transform(main) {
  const px = (v) => parseFloat(v) || 0;
  const cs = (e) => getComputedStyle(e);
  const isCard = (e) => {
    const s = cs(e);
    return px(s.borderTopLeftRadius) >= 12 && (s.backgroundColor !== "rgba(0, 0, 0, 0)" || px(s.borderTopWidth) > 0 || s.backgroundImage !== "none");
  };
  const iconOf = (e) =>
    [...e.children]
      .slice(0, 2)
      .flatMap((c) => [c, c.firstElementChild])
      .filter(Boolean)
      .find((x) => {
        const r = x.getBoundingClientRect();
        return r.width >= 36 && r.width <= 80 && Math.abs(r.width - r.height) < 4 && x.querySelector("svg") && !x.querySelector("h3,h4,p");
      });

  main.querySelectorAll("*").forEach((e) => {
    if (e.classList.contains("m-done")) return;
    const s = cs(e);
    if (px(s.fontSize) >= 96 && e.children.length === 0) e.classList.add("m-hide");
    if (s.position === "sticky") e.classList.add("m-static");
  });
  const secs = [...main.children];
  secs.forEach((s, i) => {
    s.classList.add(i === 0 ? "m-sec-first" : "m-sec");
    // two sections in a row on the same background read as one: close the gap between them
    const prev = secs[i - 1];
    if (prev && i > 0 && cs(prev).backgroundColor === cs(s).backgroundColor && cs(s).backgroundImage === "none" && cs(prev).backgroundImage === "none") s.classList.add("m-sec-join");
  });

  const taken = [...main.querySelectorAll(".m-swipe,.m-rows,.m-grid2")];
  main.querySelectorAll("div,ul,ol").forEach((e) => {
    if (e.classList.contains("m-done") || e.classList.contains("m-dots")) return;
    if (taken.some((t) => t.contains(e) || e.contains(t))) return;
    const kids = [...e.children].filter((k) => cs(k).display !== "none" && !k.classList.contains("m-dots"));
    if (kids.length < 3) return;
    if (e.querySelector("details,form,input,table,[aria-expanded]")) return;
    const withH = kids.filter((k) => k.querySelector("h3,h4"));
    const cards = kids.filter(isCard);
    const avgH = kids.reduce((a, k) => a + k.getBoundingClientRect().height, 0) / kids.length;
    const icons = kids.map(iconOf);

    let kind = null;
    if (icons.every(Boolean) && withH.length === kids.length) kind = "rows";
    else if (
      cards.length === kids.length &&
      kids.every((k) => (k.textContent || "").trim().length < 70 && k.firstElementChild && px(cs(k.firstElementChild).fontSize) >= 22) &&
      avgH < 260
    )
      kind = "grid2";
    else if (cards.length === kids.length && avgH >= 150) kind = "swipe";
    if (!kind) return;

    e.classList.add("m-done");
    taken.push(e);
    if (kind === "swipe") {
      // bleed the carousel to the edge of whatever box holds it (screen or coloured card)
      let box = e.parentElement;
      while (box && box !== main) {
        const bs = cs(box);
        if (box.tagName === "SECTION" || bs.backgroundColor !== "rgba(0, 0, 0, 0)" || bs.backgroundImage !== "none") break;
        box = box.parentElement;
      }
      if (box) {
        const gut = Math.max(12, Math.round(e.getBoundingClientRect().left - box.getBoundingClientRect().left - px(cs(box).borderLeftWidth)));
        e.style.setProperty("--sw-gut", Math.min(gut, 28) + "px");
      }
      e.classList.add("m-swipe");
      if (!(e.nextElementSibling && e.nextElementSibling.classList.contains("m-dots"))) {
        const dots = document.createElement("div");
        dots.className = "m-dots";
        if (box) dots.style.color = cs(box).color;
        dots.setAttribute("aria-hidden", "true");
        dots.innerHTML = kids.map((_, i) => `<i class="${i ? "" : "on"}"></i>`).join("") + "<span>Swipe</span>";
        e.after(dots);
        const update = () => {
          const w = kids[0].getBoundingClientRect().width + 12;
          const idx = Math.min(kids.length - 1, Math.round(e.scrollLeft / w));
          [...dots.querySelectorAll("i")].forEach((d, i) => d.classList.toggle("on", i === idx));
        };
        e.addEventListener("scroll", update, { passive: true });
      }
    } else if (kind === "grid2") {
      e.classList.add("m-grid2");
    } else {
      e.classList.add("m-rows");
      kids.forEach((k, i) => {
        const ic = icons[i];
        k.classList.add("m-row");
        ic.classList.add("m-row-icon");
        const top = [...k.children].find((c) => c === ic || c.contains(ic));
        if (top && top !== ic) top.classList.add("m-row-top");
        [...k.children].forEach((c) => {
          if (c !== top && c.tagName === "SPAN" && px(cs(c).letterSpacing) > 0.5 && (c.textContent || "").trim().length < 40 && !c.querySelector("svg")) c.classList.add("m-hide");
        });
      });
    }
  });

  main.querySelectorAll("div,span").forEach((e) => {
    // tall empty "poster" boxes: let their content set the height
    if (px(cs(e).minHeight) >= 260 && !e.querySelector("img") && !cs(e).backgroundImage.includes("url(")) e.classList.add("m-nomin");
    // icon beside a tall text block: put the icon on top instead
    if (e.closest(".m-row") || cs(e).display !== "flex" || cs(e).flexDirection !== "row" || e.children.length !== 2) return;
    const [a, b2] = e.children;
    const ra = a.getBoundingClientRect(), rb = b2.getBoundingClientRect();
    if (ra.height >= 36 && ra.height <= 64 && ra.width <= ra.height + 4 && a.querySelector("svg") && rb.height > ra.height * 2 + 20) e.classList.add("m-stack");
  });

  main.querySelectorAll("div,a").forEach((e) => {
    if (e.closest(".m-row")) return;
    if (px(cs(e).paddingLeft) >= 34 && e.getBoundingClientRect().width < 380) e.classList.add("m-pad");
  });
}

export default function MobileLayout() {
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const main = document.querySelector("main");
    if (!main) return undefined;
    let timer = 0;
    let observer = null;

    const run = () => {
      if (!mq.matches) return;
      observer && observer.disconnect();
      try {
        transform(main);
      } finally {
        observer && observer.observe(main, { childList: true, subtree: true });
      }
    };
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(run, 60);
    };

    observer = new MutationObserver(schedule);
    run();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
    mq.addEventListener("change", schedule);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mq.removeEventListener("change", schedule);
    };
  }, [pathname]);

  return null;
}
