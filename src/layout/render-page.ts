import { createElement, getSelectValue } from "../utils/index";
import { currencyDetails,  CurrencyCode } from "../components/index"; 

type Currency = {
    Abbreviation: string;
    Name: string;
    Rates: Record<CurrencyCode, number>;
};

export function renderPage() {
    const conversionContainer = document.querySelector(".conversion");

    if(!(conversionContainer instanceof HTMLElement)) return;

    conversionContainer.innerHTML = '';

    const selectedCurrency: string = getSelectValue().toUpperCase();

    Object.keys(currencyDetails).forEach((key) => {
        const currencyKey = key as CurrencyCode;
        if (currencyKey !== selectedCurrency) {
            const currency = currencyDetails[currencyKey];
    
            const label = createElement({
                tag: "label",
                parent: conversionContainer,
                classes: ["conversion__input"],
                textContent: `${currency.Abbreviation}`,
            });
        }
    });
}