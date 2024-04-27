import { Fetch } from "@/lib/utils";
import { IncomStatement } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";

export default function useStockIncomeStatement(symbol: string = "AAPL") {
  return useQuery<IncomStatement[]>({
    queryKey: ["stock-income-statement", symbol],
    queryFn: () => Fetch("/api/stocks"),
  });
}
