export const getStockProfile = async (symbol: string = "AAPL") => {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${symbol}&apikey=${process.env.NEXT_PUBLIC_FMP_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
