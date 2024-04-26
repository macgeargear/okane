import { StockScreenerResult } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";
import { Fetch } from "@/lib/utils";
import { stockScreenReq } from "@/lib/validation/stock";

export default function useStockScreener(stockScreenReq?: stockScreenReq) {
  return useQuery<StockScreenerResult[]>({
    queryKey: ["stock", stockScreenReq],
    queryFn: () =>
      Fetch("/api/stocks/screener", {
        body: JSON.stringify(stockScreenReq),
      }),
  });
}
