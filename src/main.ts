import "./styles/index.css";
import { renderHomePage } from "./pages/home/renderHomePage";
import { initCarousels } from "./utils/initCarousels";
import { initHeader } from "./utils/initHeader";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = renderHomePage();
initHeader();
initCarousels();
