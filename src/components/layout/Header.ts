import type { HomeContent } from "../../types/content";
import { renderLink } from "../common/renderLink";

export const renderHeader = (content: HomeContent) => `
  <header class="topbar" id="home">
    <div class="content-container topbar__inner">
      <a class="brand" href="#home" aria-label="Boba Naicha home">
        <span class="brand__mark">BN</span>
        <span class="brand__text">
          <strong>Boba Naicha</strong>
          <small>milktea / coffee house</small>
        </span>
      </a>
      <nav class="topbar__nav" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#culture">Culture</a>
        <a href="#visit">Visit</a>
      </nav>
      ${renderLink(
        {
          label: content.contact.phoneLabel,
          href: content.contact.phoneHref,
        },
        "pill-button pill-button--outline",
      )}
    </div>
  </header>
`;
