import { GENERATED_RATE_ARCHIVE } from "../components/constants/rate-archive";
import { renderPage } from "../layout/render-page";
import { getDateValue, getSelectValue, setDate } from "./index";

export function addListeners() {
  setDate();
  renderPage();
  document
    .querySelector(".header__date-input")
    .addEventListener("change", getDateValue);
    document
    .querySelector(".header__date-input")
    .addEventListener("change",  renderPage);
  document
    .querySelector(".currency__select")
    .addEventListener("change", getSelectValue);
  document
    .querySelector(".currency__select")
    .addEventListener("change", renderPage);
  document
    .querySelector(".amount__input")
    .addEventListener("keyup", renderPage);
    console.log(GENERATED_RATE_ARCHIVE);
}
