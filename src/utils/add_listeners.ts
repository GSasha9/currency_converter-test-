import { getDateValue, getSelectValue, setDate } from "./index";

export function addListeners() {
    setDate();
  document
    .querySelector(".header__date")
    .addEventListener("change", getDateValue);
  document
    .querySelector(".currency__select")
    .addEventListener("change", getSelectValue);
}
