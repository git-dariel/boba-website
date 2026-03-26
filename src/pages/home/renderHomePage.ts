import { homeContent } from "../../data/homeContent";
import { renderFooter } from "../../components/layout/Footer";
import { renderHeader } from "../../components/layout/Header";
import { renderCultureSection } from "../../components/sections/CultureSection";
import { renderHeroSection } from "../../components/sections/HeroSection";
import { renderMenuSection } from "../../components/sections/MenuSection";
import { renderStorySection } from "../../components/sections/StorySection";

export const renderHomePage = () => `
  <div class="site-shell">
    ${renderHeader(homeContent)}

    <main class="page-content">
      ${renderHeroSection(homeContent)}
      ${homeContent.menus.map(renderMenuSection).join("")}
      ${renderCultureSection(homeContent)}
      ${renderStorySection(homeContent)}
    </main>

    ${renderFooter(homeContent)}
  </div>
`;
