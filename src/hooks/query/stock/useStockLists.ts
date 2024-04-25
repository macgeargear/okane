import { StockList } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";
import { Fetch } from "@/lib/utils";

export default function useStockLists(symbol: string = "") {
  return useQuery<StockList[]>({
    queryKey: ["stock", symbol],
    queryFn: () => Fetch("/api/stocks/lists"),
  });
}
