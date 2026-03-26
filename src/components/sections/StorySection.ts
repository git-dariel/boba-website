import type { GalleryItem, HomeContent } from "../../types/content";
import { renderLink } from "../common/renderLink";

const renderStoryCard = (item: GalleryItem, index: number) => `
  <figure class="story-card story-card--${index + 1}">
    <img
      src="${item.image}"
      alt="${item.alt}"
      loading="lazy"
      decoding="async"
      style="object-position: ${item.imagePosition ?? "center center"}"
    />
  </figure>
`;

export const renderStorySection = (content: HomeContent) => `
  <section class="story-panel" id="visit">
    <div class="content-container story-panel__inner">
      <div class="story-panel__copy" data-reveal>
        <span class="section-heading__badge section-heading__badge--warm">${content.story.eyebrow}</span>
        <h2>${content.story.title}</h2>
        <p>${content.story.description}</p>
        <div class="story-panel__stats">
          ${content.story.stats
            .map(
              (stat) => `
                <div class="story-panel__stat">
                  <strong>${stat.value}</strong>
                  <span>${stat.label}</span>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="story-panel__actions">
          ${renderLink(
            {
              label: "Open Facebook page",
              href: content.contact.facebookHref,
              external: true,
            },
            "pill-button pill-button--solid pill-button--dark",
          )}
          ${renderLink(
            {
              label: "Get directions",
              href: content.contact.mapsHref,
              external: true,
            },
            "pill-button pill-button--outline pill-button--warm",
          )}
        </div>
      </div>
      <div class="story-panel__media" aria-label="Boba Naicha brand collage">
        ${content.story.cards.map(renderStoryCard).join("")}
      </div>
    </div>
  </section>
`;
