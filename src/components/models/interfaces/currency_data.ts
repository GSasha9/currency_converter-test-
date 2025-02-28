import { CurrencyCode } from "../../index"

export interface CurrencyData {
    Abbreviation: CurrencyCode;
    Name: string;
    Rates: Record<CurrencyCode, number>;
}