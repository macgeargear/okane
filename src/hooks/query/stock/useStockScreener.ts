//TODO: fix the queryFn to use the stockScreenReq

import { StockScreenerResult } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";
import { Fetch } from "@/lib/utils";

export default function useStockScreener(stockScreenReq?: string) {
  return useQuery<StockScreenerResult[]>({
    queryKey: ["stock", stockScreenReq],
    queryFn: () =>
      Fetch("/api/stocks/screener", {
        // body: JSON.stringify(stockScreenReq),
      }),
  });
}
