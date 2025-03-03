import { createElement, getSelectValue } from "../utils/index";
import {
  CURRENCY_DETAILS,
  CurrencyCode,
  GENERATED_RATE_ARCHIVE,
} from "../components/index";
import { rateCalculation } from "../utils/rate-calculation";
import { getDateValue } from "../utils/index";

export function renderPage() {
  const conversionContainer = document.querySelector(".conversion");

  if (!(conversionContainer instanceof HTMLElement)) return;

  conversionContainer.innerHTML = "";

  const selectedCurrency: string = getSelectValue().toUpperCase();

  const selectedDate = getDateValue();

  const today = new Date();

  if (selectedDate !== today.toISOString().split("T")[0]) {
    Object.keys(GENERATED_RATE_ARCHIVE).forEach((key) => {
      const currencyKey = key as CurrencyCode;
      if (currencyKey === selectedCurrency) {
        const processCurrency = GENERATED_RATE_ARCHIVE[currencyKey];

        const archiveDate = processCurrency.archive[selectedDate];

        Object.keys(archiveDate).forEach((el) => {
          const processEl = el as CurrencyCode;

          if (processEl !== selectedCurrency) {
            const bbb = archiveDate[processEl];

            createElement({
              tag: "label",
              parent: conversionContainer,
              classes: ["conversion__input"],
              textContent: `${processEl} - ${rateCalculation(bbb)}  `,
            });
          }
        });
      }
    });
  } else {
    Object.keys(CURRENCY_DETAILS).forEach((key) => {
      const currencyKey = key as CurrencyCode;

      if (currencyKey !== selectedCurrency) {
        const processCurrency = CURRENCY_DETAILS[currencyKey];

        const selectedCurrencyObj =
          CURRENCY_DETAILS[selectedCurrency as CurrencyCode];

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
}
