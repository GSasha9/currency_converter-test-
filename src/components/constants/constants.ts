import { CurrencyData, CurrencyCode } from '../index'

export const currencyData: Record<CurrencyCode, CurrencyData> = {
    BYN: {
        Abbreviation: 'BYN',
        Name: 'Belarusian ruble',
        Rates: { USD: 0.39, EUR: 0.36, CNY: 2.57, RUB: 29.45, BYN: 1 }
    },
    USD: {
        Abbreviation: 'USD',
        Name: 'Dollar',
        Rates: { BYN: 2.56, EUR: 0.92, CNY: 6.68, RUB: 75.34, USD: 1 }
    },
    EUR: {
        Abbreviation: 'EUR',
        Name: 'Euro',
        Rates: { USD: 1.09, BYN: 2.78, CNY: 7.24, RUB: 82.25, EUR: 1 }
    },
    CNY: {
        Abbreviation: 'CNY',
        Name: 'Yuan',
        Rates: { USD: 0.15, EUR: 0.14, BYN: 0.39, RUB: 11.5, CNY: 1 }
    },
    RUB: {
        Abbreviation: 'RUB',
        Name: 'Russian ruble',
        Rates: { USD: 0.013, EUR: 0.012, CNY: 0.087, BYN: 0.034, RUB: 1 }
    }
};