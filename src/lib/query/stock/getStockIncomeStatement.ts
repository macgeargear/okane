import { FMP_BASE_URL, STOCK_STATEMENT_URL } from "@/types/stocks";

export const getStockIncomeStatement = async (symbol: string = "AAPL") => {
  const response = await fetch(
    `${STOCK_STATEMENT_URL}/${symbol}?apikey=${process.env.NEXT_PUBLIC_FMP_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
