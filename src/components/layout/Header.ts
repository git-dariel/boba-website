import type { HomeContent } from "../../types/content";
import { renderLink } from "../common/renderLink";
import logoBoba from "../../assets/logo-boba.png";

export const renderHeader = (content: HomeContent) => `
  <header class="topbar">
    <div class="content-container topbar__inner">

      <a class="brand" href="#home" aria-label="Boba Naicha home">
        <img class="brand__logo" src="${logoBoba}" alt="Boba Naicha" />
      </a>

      <nav class="topbar__nav" id="topbar-nav" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#culture">Culture</a>
        <a href="#visit">Visit</a>
        <a class="topbar__nav-phone pill-button pill-button--solid" href="${content.contact.facebookHref}" target="_blank" rel="noopener noreferrer">
          Order now
        </a>
      </nav>

      ${renderLink(
        { label: "Order now", href: content.contact.facebookHref, external: true },
        "topbar__phone pill-button pill-button--solid",
      )}

      <button
        class="topbar__hamburger"
        id="topbar-hamburger"
        aria-label="Open navigation"
        aria-expanded="false"
        aria-controls="topbar-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>
`;
