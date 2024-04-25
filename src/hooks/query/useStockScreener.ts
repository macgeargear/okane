import { StockList, StockScreenerResult } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";
import { Fetch } from "@/lib/utils";

export default function useStockLists(symbol: string = "") {
  return useQuery<StockScreenerResult[]>({
    queryKey: ["stock", symbol],
    queryFn: () => Fetch("/api/stocks/lists"),
  });
}
