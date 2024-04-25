export const FMP_BASE_URL = "https://financialmodelingprep.com/api/v3";

export const STOCK_SEARCH_URL = `${FMP_BASE_URL}/search?apikey=${process.env.FMP_API_KEY}`;
export const STOCK_SCREENER_URL = `${FMP_BASE_URL}/stock-screener?apikey=${process.env.FMP_API_KEY}`;
export const STOCK_STATEMENT_URL = `${FMP_BASE_URL}/income-statement?apikey=${process.env.FMP_API_KEY}`;
export const SECTOR_PERFORMANCE_URL = `${FMP_BASE_URL}/sectors-performance?apikey=${process.env.FMP_API_KEY}`;
