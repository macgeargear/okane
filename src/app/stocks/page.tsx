import StockIncomeStatement from "@/components/stock/StockIncomeStatement";
import StocksLists from "@/components/stock/stockList/StockList";
import StockProfile from "@/components/stock/StockProfile";
import StockScore from "@/components/stock/StockScore";
import StockSearchForm from "@/components/stock/StockSearchForm";
import { getStockData } from "@/lib/query/stock/getStockData";
import { getStockProfile } from "@/lib/query/stock/getStockProfile";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  Promise.all([
    await queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: getStockData,
    }),
    await queryClient.prefetchQuery({
      queryKey: ["profile"],
      queryFn: () => getStockProfile(""),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <StockScore /> */}
        {/* <StockSearchForm /> */}
        {/* <StockProfile /> */}
        <div className="z-10 max-w-sm sm:max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <StocksLists />
        </div>
      </main>
    </HydrationBoundary>
  );
}
