import type { FooterColumn, HomeContent } from "../../types/content";
import { renderLink } from "../common/renderLink";

const renderFooterColumn = (column: FooterColumn) => `
  <div class="footer__column">
    <h3>${column.title}</h3>
    <ul>
      ${column.links.map((link) => `<li>${renderLink(link, "footer__link")}</li>`).join("")}
    </ul>
  </div>
`;

export const renderFooter = (content: HomeContent) => `
  <footer class="footer">
    <div class="content-container">
      <div class="footer__brand">
        <div class="footer__brand-copy">
          <h2>Boba Naicha</h2>
          <p>
            Milk tea, coffee, and comfort meals in Macalelon, Quezon.
            A neighborhood cafe made for quick stops and slow afternoons.
          </p>
        </div>
      </div>
      <div class="footer__divider"></div>
      <div class="footer__grid">
        ${content.footer.map(renderFooterColumn).join("")}
      </div>
      <div class="footer__base">
        <span>&copy; ${new Date().getFullYear()} Boba Naicha &mdash; Macalelon, Quezon</span>
        <span>Open daily, 11:00 AM &ndash; 9:00 PM</span>
      </div>
    </div>
  </footer>
`;
