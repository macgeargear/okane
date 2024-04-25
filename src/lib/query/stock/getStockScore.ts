import { FMP_BASE_URL } from "@/types/stocks";

export const getStockScore = async (symbol: string = "AAPL") => {
  const response = await fetch(`${FMP_BASE_URL}/score?symbol=${symbol}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
