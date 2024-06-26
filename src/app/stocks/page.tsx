import StockSectorCard from "@/components/stock/StockSectorCard";
import StocksLists from "@/components/stock/stockList/StockList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-sm sm:max-w-5xl lg:max-w-7xl items-center justify-between font-mono text-sm lg:flex">
          <StocksLists />
        </div>
      </main>
    </HydrationBoundary>
  );
}
