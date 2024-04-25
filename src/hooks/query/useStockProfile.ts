import { getStockProfile } from "@/lib/query/stock/getStockProfile";
import { StockProfile } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";

export default function useStockProfile(symbol: string = "aaa") {
  return useQuery<StockProfile[]>({
    queryKey: ["stock-profile", symbol],
    queryFn: () => getStockProfile(symbol),
  });
}
