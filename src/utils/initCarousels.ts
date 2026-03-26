export const initCarousels = () => {
  initHorizontalCarousels();
  initScrollReveal();
};

function initHorizontalCarousels() {
  document.querySelectorAll<HTMLElement>("[data-carousel]").forEach(initSingleCarousel);
}

function initSingleCarousel(carousel: HTMLElement) {
  const track = carousel.querySelector<HTMLElement>("[data-carousel-track]");
  const dotsContainer = carousel.querySelector<HTMLElement>("[data-carousel-dots]");
  const prevBtn = carousel.querySelector<HTMLButtonElement>("[data-carousel-prev]");
  const nextBtn = carousel.querySelector<HTMLButtonElement>("[data-carousel-next]");

  if (!track) return;
  const trackEl = track;

  const slides = Array.from(trackEl.children) as HTMLElement[];
  if (!slides.length) return;

  const PAGE_SIZE = 3;
  const pageCount = Math.max(1, Math.ceil(slides.length / PAGE_SIZE));
  let currentPage = 0;
  let programmaticScrollUntil = 0;
  let dragging = false;
  let dragStartX = 0;
  let dragScrollStart = 0;

  const getMaxScrollLeft = () => Math.max(0, trackEl.scrollWidth - trackEl.clientWidth);

  const getPageOffsets = () =>
    Array.from({ length: pageCount }, (_, pageIndex) => {
      const firstSlideOfPage = slides[Math.min(pageIndex * PAGE_SIZE, slides.length - 1)];
      const rawOffset = firstSlideOfPage?.offsetLeft ?? 0;
      return Math.min(rawOffset, getMaxScrollLeft());
    });

  function updatePageButtons() {
    if (prevBtn) prevBtn.disabled = currentPage <= 0;
    if (nextBtn) nextBtn.disabled = currentPage >= pageCount - 1;
  }

  function syncDots(pageIndex: number) {
    currentPage = pageIndex;
    dotsContainer?.querySelectorAll<HTMLElement>("[data-dot]").forEach((dot, i) => {
      dot.classList.toggle("carousel-dot--active", i === pageIndex);
    });
  }

  function scrollToPage(pageIndex: number, smooth = true) {
    const clamped = Math.max(0, Math.min(pageIndex, pageCount - 1));
    const pageOffsets = getPageOffsets();
    programmaticScrollUntil = Date.now() + 430;
    trackEl.scrollTo({ left: pageOffsets[clamped], behavior: smooth ? "smooth" : "auto" });
    syncDots(clamped);
    updatePageButtons();

    // Reconcile after smooth scroll/snap completes
    window.setTimeout(() => {
      const settledPage = findNearestPage();
      syncDots(settledPage);
      updatePageButtons();
    }, 430);
  }

  function findNearestPage() {
    const pageOffsets = getPageOffsets();
    let nearestPage = 0;
    let nearestDist = Infinity;

    pageOffsets.forEach((offset, pageIndex) => {
      const dist = Math.abs(offset - trackEl.scrollLeft);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestPage = pageIndex;
      }
    });

    return nearestPage;
  }

  // Build dots (page-based, not image-based)
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    Array.from({ length: pageCount }).forEach((_, pageIndex) => {
      const dot = document.createElement("button");
      dot.className = `carousel-dot${pageIndex === 0 ? " carousel-dot--active" : ""}`;
      dot.setAttribute("data-dot", String(pageIndex));
      dot.setAttribute("aria-label", `Go to page ${pageIndex + 1}`);
      dot.addEventListener("click", () => scrollToPage(pageIndex));
      dotsContainer.appendChild(dot);
    });
  }

  prevBtn?.addEventListener("click", () => scrollToPage(currentPage - 1));
  nextBtn?.addEventListener("click", () => scrollToPage(currentPage + 1));

  // Keep dots and buttons in sync while scrolling
  let scrollDebounce: ReturnType<typeof setTimeout>;
  trackEl.addEventListener(
    "scroll",
    () => {
      if (Date.now() < programmaticScrollUntil) return;

      // debounce the page update
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        const nearestPage = findNearestPage();
        if (nearestPage !== currentPage) syncDots(nearestPage);
        updatePageButtons();
      }, 60);
    },
    { passive: true },
  );

  // Mouse drag
  trackEl.addEventListener("mousedown", (e) => {
    dragging = true;
    dragStartX = e.pageX;
    dragScrollStart = trackEl.scrollLeft;
    trackEl.style.cursor = "grabbing";
    trackEl.style.userSelect = "none";
  });

  trackEl.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    e.preventDefault();
    trackEl.scrollLeft = dragScrollStart - (e.pageX - dragStartX);
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    trackEl.style.cursor = "";
    trackEl.style.userSelect = "";
    scrollToPage(findNearestPage());
  };

  trackEl.addEventListener("mouseup", endDrag);
  trackEl.addEventListener("mouseleave", endDrag);

  // Init states after layout is ready
  requestAnimationFrame(() => {
    syncDots(0);
    updatePageButtons();
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay ?? "0";
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-revealed");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}
