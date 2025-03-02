import { createElement, getSelectValue } from "../utils/index";
import {
  currencyDetails,
  CurrencyCode,
  generatedRateArchive,
} from "../components/index";
import { rateCalculation } from "../utils/rate-calculation";
import { getDateValue } from "../utils/index";

export function renderPage() {
  const conversionContainer = document.querySelector(".conversion");

  if (!(conversionContainer instanceof HTMLElement)) return;

  conversionContainer.innerHTML = "";

  const selectedCurrency: string = getSelectValue().toUpperCase();

  const selectedDate = getDateValue();

  console.log(`Дата из  счета ${selectedDate}`);

  const today = new Date();

  if (selectedDate !== today.toISOString().split("T")[0]) {
    Object.keys(generatedRateArchive).forEach((key) => {
      const currencyKey = key as CurrencyCode;
      if (currencyKey === selectedCurrency) {
        const processCurrency = generatedRateArchive[currencyKey];

        const archiveDate = processCurrency.archive[selectedDate];

        Object.keys(archiveDate).forEach((el) => {
          const processEl = el as CurrencyCode;
          console.log(`Смотрю куда влезла назвала process el`);
          console.log(processEl);

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
}
