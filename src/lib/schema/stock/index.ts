import { z } from "zod";

export const stockScreenerSchema = z.object({
  marketCapMoreThan: z.number().min(1).nullable(),
  marketCapLowerThan: z.number().min(1).nullable(),
  priceMoreThan: z.number().min(1).nullable(),
  priceLowerThan: z.number().min(1).nullable(),
  betaMoreThan: z.number().min(1).nullable(),
  betaLowerThan: z.number().min(1).nullable(),
  volumeMoreThan: z.number().min(1).nullable(),
  volumeLowerThan: z.number().min(1).nullable(),
  dividendMoreThan: z.number().min(1).nullable(),
  dividendLowerThan: z.number().min(1).nullable(),
  isEtf: z.boolean().nullable(),
  isFund: z.boolean().nullable(),
  isActivelyTrading: z.boolean().nullable(),
  sector: z.string().nullable(),
  industry: z.string().nullable(),
  country: z.string().nullable(),
  exchange: z.string().nullable(),
  limit: z.number().min(1).nullable(),
});
