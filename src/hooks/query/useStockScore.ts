import { StockScore } from "./../../types/stocks/index";
import { getStockProfile } from "@/lib/query/stock/getStockProfile";
import { getStockScore } from "@/lib/query/stock/getStockScore";
import { StockProfile } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";

export default function useStockScore(symbol: string) {
  return useQuery<StockScore[]>({
    queryKey: ["stock-profile", symbol],
    queryFn: () => getStockScore(symbol),
  });
}
