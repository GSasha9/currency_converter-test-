import { Archive, CurrencyCode } from "../../index";

export interface RateArchive {
    Abbreviation: CurrencyCode;
    archive: Archive;
}