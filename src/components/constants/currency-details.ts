import { CurrencyData, CurrencyCode } from '../index';

export const CURRENCY_DETAILS: Record<CurrencyCode, CurrencyData> = {
    BYN: {
        Abbreviation: 'BYN',
        Name: 'Belarusian ruble',
        Rates: { USD: 0.31, EUR: 0.30, CNY: 2.3, RUB: 27.70, BYN: 1 }
    },
    USD: {
        Abbreviation: 'USD',
        Name: 'Dollar',
        Rates: { BYN: 3.2, EUR: 0.96, CNY: 7.38, RUB: 88.34, USD: 1 }
    },
    EUR: {
        Abbreviation: 'EUR',
        Name: 'Euro',
        Rates: { USD: 1.03, BYN: 3.33, CNY: 7.67, RUB: 92.25, EUR: 1 }
    },
    CNY: {
        Abbreviation: 'CNY',
        Name: 'Yuan',
        Rates: { USD: 0.13, EUR: 0.13, BYN: 0.43, RUB: 12.01, CNY: 1 }
    },
    RUB: {
        Abbreviation: 'RUB',
        Name: 'Russian ruble',
        Rates: { USD: 0.013, EUR: 0.010, CNY: 0.083, BYN: 0.036, RUB: 1 }
    }
};