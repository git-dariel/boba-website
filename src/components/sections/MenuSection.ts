import type { MenuItem, MenuSection } from "../../types/content";
import { renderLink } from "../common/renderLink";

const renderMenuItem = (item: MenuItem, index: number) => `
  <article class="menu-list__item" data-reveal data-reveal-delay="${index * 60}">
    <img
      class="menu-list__thumb"
      src="${item.image}"
      alt="${item.alt}"
      loading="lazy"
      decoding="async"
      style="object-position: ${item.imagePosition ?? "center center"}"
    />
    <div class="menu-list__copy">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
    <span class="menu-list__price">${item.price}</span>
  </article>
`;

export const renderMenuSection = (section: MenuSection) => `
  <section class="menu-section section-divider" id="${section.id}">
    <div class="content-container">
      <div class="section-heading" data-reveal>
        <span class="section-heading__badge">${section.eyebrow}</span>
        <h2>${section.title}</h2>
        <p>${section.description}</p>
      </div>
      <div class="menu-list">
        ${section.items.map((item, i) => renderMenuItem(item, i)).join("")}
      </div>
      <div class="menu-section__actions">
        ${renderLink(
          {
            label: section.ctaLabel,
            href: section.ctaHref,
            external: section.ctaHref.startsWith("http"),
          },
          "pill-button pill-button--solid",
        )}
      </div>
    </div>
  </section>
`;
