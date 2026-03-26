import "./styles/index.css";
import { renderHomePage } from "./pages/home/renderHomePage";
import { initCarousels } from "./utils/initCarousels";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = renderHomePage();
initCarousels();
