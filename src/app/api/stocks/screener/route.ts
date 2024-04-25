import { STOCK_SCREENER_URL } from "@/config";
import { Fetch } from "@/lib/utils";
import { StockScreenerResult } from "@/types/stocks";

export async function GET(req: Request) {
  // const reqBody = stockScreenerSchema.parse(req.body);
  const data = await Fetch<StockScreenerResult[]>(`${STOCK_SCREENER_URL}`, {
    // body: JSON.stringify(reqBody),
  });

  const stockScreenResult: (
    | Omit<StockScreenerResult, "symbol" | "companyName">
    | { metadata: { symbol: string; companyName: string } }
  )[] = [];

  data.map((stock) => {
    stockScreenResult.push({
      ...stock,
      metadata: {
        symbol: stock.symbol,
        companyName: stock.companyName,
      },
    });
  });

  return Response.json(stockScreenResult);
}
