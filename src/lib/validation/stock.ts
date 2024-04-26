import { z } from "zod";

export const stockScreenerSchema = z.object({
  marketCapMoreThan: z.number().nullable(),
  marketCapLowerThan: z.number().nullable(),
  priceMoreThan: z.number().nullable(),
  priceLowerThan: z.number().nullable(),
  betaMoreThan: z.number().nullable(),
  betaLowerThan: z.number().nullable(),
  volumeMoreThan: z.number().nullable(),
  volumeLowerThan: z.number().nullable(),
  dividendMoreThan: z.number().nullable(),
  dividendLowerThan: z.number().nullable(),
  isEtf: z.number().nullable(),
  isFund: z.number().nullable(),
  isActivelyTrading: z.number().nullable(),
  sector: z.string().nullable(),
  industry: z.string().nullable(),
  exchange: z.string().nullable(),
  country: z.string().nullable(),
  limit: z.number().nullable(),
});

export type stockScreenReq = z.infer<typeof stockScreenerSchema>;
