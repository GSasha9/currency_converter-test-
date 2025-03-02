import { createRateArchive } from "../../utils/create_rate_archive";
import { currencyDetails } from "./currency-details";

const generatedRateArchive = createRateArchive(currencyDetails);

export { generatedRateArchive };
