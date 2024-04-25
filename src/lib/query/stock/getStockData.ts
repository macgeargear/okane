import { FMP_BASE_URL } from "@/types/stocks";

export const getStockData = async () => {
  const response = await fetch(
    `${FMP_BASE_URL}/search?query=${"aaa"}&apikey=${
      process.env.NEXT_PUBLIC_FMP_API_KEY
    }`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
