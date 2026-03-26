import type { GalleryItem, HomeContent } from "../../types/content";

const chevronLeft = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
  <path d="M11 13.5L6.5 9 11 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const chevronRight = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
  <path d="M7 4.5L11.5 9 7 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const renderCultureSlide = (item: GalleryItem, index: number) => `
  <figure
    class="culture-slide culture-slide--${item.emphasis ?? "standard"}"
    data-reveal
    data-reveal-delay="${index * 80}"
  >
    <img
      src="${item.image}"
      alt="${item.alt}"
      loading="lazy"
      decoding="async"
      style="object-position: ${item.imagePosition ?? "center center"}"
    />
    <figcaption>
      <span>${item.caption}</span>
    </figcaption>
  </figure>
`;

export const renderCultureSection = (content: HomeContent) => `
  <section class="culture section-divider" id="culture">
    <div class="content-container">
      <div class="section-heading" data-reveal>
        <span class="section-heading__badge">${content.culture.eyebrow}</span>
        <h2>${content.culture.title}</h2>
        <p>${content.culture.description}</p>
      </div>
      <div class="culture-carousel" data-carousel>
        <div class="culture-carousel__track" data-carousel-track>
          ${content.culture.gallery.map(renderCultureSlide).join("")}
        </div>
        <div class="culture-carousel__controls">
          <button class="carousel-btn carousel-btn--prev" data-carousel-prev aria-label="Previous">
            ${chevronLeft}
          </button>
          <div class="carousel-dots" data-carousel-dots></div>
          <button class="carousel-btn carousel-btn--next" data-carousel-next aria-label="Next">
            ${chevronRight}
          </button>
        </div>
      </div>
    </div>
  </section>
`;
