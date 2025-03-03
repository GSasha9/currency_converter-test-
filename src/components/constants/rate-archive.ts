import { createRateArchive } from "../../utils/create-rate-archive";
import { CURRENCY_DETAILS } from "./currency-details";

const GENERATED_RATE_ARCHIVE = createRateArchive(CURRENCY_DETAILS);

export { GENERATED_RATE_ARCHIVE };
