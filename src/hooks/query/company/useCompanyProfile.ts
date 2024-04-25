import { stockScreenReq } from "../../../lib/schema/stock/index";
import { StockScreenerResult } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";
import { Fetch } from "@/lib/utils";
import { CompanyProfile } from "@/types/company";

export default function useCompanyProfile(symbol: string) {
  return useQuery<CompanyProfile[]>({
    queryKey: ["stock", symbol],
    queryFn: () => Fetch(`/api/company/profile/?symbol=${symbol}`),
  });
}
