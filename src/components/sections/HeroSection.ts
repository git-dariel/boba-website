import type { GalleryItem, HomeContent } from "../../types/content";
import { renderLink } from "../common/renderLink";

const renderHeroGalleryCard = (item: GalleryItem, index: number) => `
  <figure
    class="hero-strip__card hero-strip__card--${item.emphasis ?? "standard"}"
    data-reveal
    data-reveal-delay="${index * 70}"
  >
    <img
      class="hero-strip__image"
      src="${item.image}"
      alt="${item.alt}"
      decoding="async"
      style="object-position: ${item.imagePosition ?? "center center"}"
    />
    <figcaption>${item.caption}</figcaption>
  </figure>
`;

export const renderHeroSection = (content: HomeContent) => `
  <section class="hero">
    <div class="content-container">
      <span class="hero__eyebrow">${content.hero.eyebrow}</span>
      <h1>${content.hero.title}</h1>
      <p class="hero__description">${content.hero.description}</p>
      <div class="hero__actions">
        ${renderLink(content.hero.primaryLink, "pill-button pill-button--solid")}
        ${renderLink(content.hero.secondaryLink, "pill-button pill-button--ghost")}
      </div>
      <div class="hero-strip" aria-label="Featured Boba Naicha imagery">
        ${content.hero.gallery.map((item, i) => renderHeroGalleryCard(item, i)).join("")}
      </div>
      <div class="hero__meta">
        <span>${content.contact.location}</span>
        <span>${content.contact.address}</span>
        <span>${content.contact.hours}</span>
      </div>
    </div>
  </section>
`;
