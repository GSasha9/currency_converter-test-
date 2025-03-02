import { generatedRateArchive } from "../components/constants/rate-archive";
import { renderPage } from "../layout/render-page";
import { getDateValue, getSelectValue, setDate } from "./index";

export function addListeners() {
  setDate();
  renderPage();
  document
    .querySelector(".header__date")
    .addEventListener("change", getDateValue);
  document
    .querySelector(".currency__select")
    .addEventListener("change", getSelectValue);
  document
    .querySelector(".currency__select")
    .addEventListener("change", renderPage);
  document
    .querySelector(".amount__input")
    .addEventListener("keyup", renderPage);
    console.log(generatedRateArchive);
}
