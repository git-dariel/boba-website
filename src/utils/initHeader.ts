export const initHeader = () => {
  const topbar = document.querySelector<HTMLElement>(".topbar");
  const hamburger = document.getElementById("topbar-hamburger") as HTMLButtonElement | null;
  const nav = document.getElementById("topbar-nav") as HTMLElement | null;

  if (!hamburger || !nav || !topbar) return;

  const setTopbarHeight = () => {
    document.documentElement.style.setProperty("--topbar-h", `${topbar.offsetHeight}px`);
  };

  const close = () => {
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const open = () => {
    setTopbarHeight();
    hamburger.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  hamburger.addEventListener("click", () => {
    nav.classList.contains("is-open") ? close() : open();
  });

  // Close when a nav link is tapped
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Re-measure on resize (handles orientation change)
  window.addEventListener("resize", () => {
    setTopbarHeight();
    // auto-close if viewport grows past mobile breakpoint
    if (window.innerWidth > 680) close();
  });

  setTopbarHeight();
};
