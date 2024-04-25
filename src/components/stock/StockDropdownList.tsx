"use client";
import { QueryClient, useQueries, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";
import { getStockList } from "@/lib/query/stock/getStockData";
import useStockLists from "@/hooks/query/useStockLists";

export function StockDropdownList() {
  const { data: stockList, error, isLoading } = useStockLists();
  if (isLoading) return <div>Loading...</div>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ScrollArea className="h-72">
          <DropdownMenuLabel>Symbol lists</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {stockList?.map((stock: any) => (
            <DropdownMenuItem key={stock.symbol}>
              <DropdownMenuGroup>
                <DropdownMenuLabel>{stock.symbol}</DropdownMenuLabel>
                <DropdownMenuShortcut>{stock.name}</DropdownMenuShortcut>
              </DropdownMenuGroup>
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
