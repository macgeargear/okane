import { StockList } from "@/types/stocks";
import { getStockData } from "@/lib/query/stock/getStockData";
import { useQuery } from "@tanstack/react-query";

export default function useStockData(symbol: string = "") {
  return useQuery<StockList[]>({
    queryKey: ["stock", symbol],
    queryFn: getStockData,
  });
}
