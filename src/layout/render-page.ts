import { createElement, getSelectValue } from "../utils/index";
import { currencyDetails, CurrencyCode } from "../components/index";
import { rateCalculation } from "../utils/rate-calculation";

export function renderPage() {
  const conversionContainer = document.querySelector(".conversion");

  if (!(conversionContainer instanceof HTMLElement)) return;

  conversionContainer.innerHTML = "";

  const selectedCurrency: string = getSelectValue().toUpperCase();

  Object.keys(currencyDetails).forEach((key) => {
    const currencyKey = key as CurrencyCode;

    if (currencyKey !== selectedCurrency) {
      const processCurrency = currencyDetails[currencyKey];

      const selectedCurrencyObj =
        currencyDetails[selectedCurrency as CurrencyCode];

      const rate = selectedCurrencyObj.Rates[currencyKey as CurrencyCode];

      if (isNaN(rate)) {
        console.log(`Invalid rate for ${selectedCurrency} in ${currencyKey}`);
        return;
      }

      createElement({
        tag: "label",
        parent: conversionContainer,
        classes: ["conversion__input"],
        textContent: `${processCurrency.Abbreviation} - ${rateCalculation(
          rate
        )}  `,
      });
    }
  });
}
