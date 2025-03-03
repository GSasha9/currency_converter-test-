import { Archive, CurrencyCode, RateArchive, CURRENCY_DETAILS } from "../components/index";

function createRateArchive(obj: typeof CURRENCY_DETAILS) : Record<CurrencyCode, RateArchive> {
    let archive: Record<CurrencyCode, RateArchive> = {} as Record<
      CurrencyCode,
      RateArchive
    >;

    const today = new Date();

    Object.keys(obj).forEach((key) => {
      const currencyKey = key as CurrencyCode;

      const daysRange = 14;

      const currencyArchive: Archive = {};

      for (let i = 1; i <= daysRange; i += 1) {
        const date = new Date();
        date.setDate(today.getDate() - i);

        const formattedDate = date.toISOString().split("T")[0];

        const rates: Record<CurrencyCode, number> = {} as Record<
          CurrencyCode,
          number
        >;

        Object.keys(obj[currencyKey].Rates).forEach((key) => {
          const processKey = key as CurrencyCode;

          const baseRate = obj[currencyKey].Rates[processKey];

          const randRate = parseFloat(
            ((Math.random() * 0.2 + 0.9) * baseRate).toFixed(2)
          );

          rates[processKey] = randRate;
        });

        currencyArchive[formattedDate] = rates;
      }

      archive[currencyKey] = {
        Abbreviation: currencyKey,
        archive: currencyArchive,
      };
    });

    return archive;
  }

  export { createRateArchive };