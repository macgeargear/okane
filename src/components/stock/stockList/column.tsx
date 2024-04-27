"use client";

import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn, formatPrice } from "@/lib/utils";
import { StockScreenerResult } from "@/types/stocks";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, CircleX, SearchCheck } from "lucide-react";
import Link from "next/link";
import useAddStock from "@/hooks/query/stock/useAddStock";
import { addStockToPortfolio } from "@/lib/actions";

export const columns: ColumnDef<StockScreenerResult>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "metadata",
    header: () => <div className="text-right">Symbol</div>,
    cell: ({ row }) => {
      const { symbol, companyName } = row.getValue("metadata") as {
        symbol: string;
        companyName: string;
      };

      return (
        <div className="text-right font-medium">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" className="hover:bg-slate-300">
                {symbol}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex justify-between space-x-4 ">
                <Avatar>
                  <AvatarImage src={`https://github.com/${symbol}`} />
                  <AvatarFallback>{symbol[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{symbol}</h4>
                  <p className="text-sm">{companyName}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  className={cn(
                    buttonVariants({ size: "sm", variant: "link" })
                  )}
                  href={`/company/${symbol}`}
                >
                  see more details
                </Link>
                <Button
                  size="sm"
                  onClick={async () => {
                    await addStockToPortfolio({
                      symbol,
                      // TODO: get the user id from the session
                      userId: "zn8v1pql3s17kzni7td1tm11",
                    });
                    toast.success("Added to your list");
                  }}
                >
                  add to my list
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      );
    },
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Market Cap
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const marketCap: string = row.getValue("marketCap");
      return (
        <div className="text-right font-medium">{formatPrice(marketCap)}</div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const price: string = row.getValue("price");
      return <div className="text-right font-medium">{formatPrice(price)}</div>;
    },
  },
  {
    accessorKey: "lastAnnualDividend",
    header: ({ column }) => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            LastDiv*
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-fit">
          <h1>Annual</h1>
        </HoverCardContent>
      </HoverCard>
    ),
    cell: ({ row }) => {
      const lastAnnualDividend: string = row.getValue("lastAnnualDividend");
      return (
        <div className="text-right font-medium">
          {formatPrice(lastAnnualDividend)}
        </div>
      );
    },
  },
  {
    accessorKey: "sector",
    header: () => <div className="text-right">Sector</div>,
    cell: ({ row }) => {
      const sector: string = row.getValue("sector");
      return <div className="text-right font-medium">{sector}</div>;
    },
  },
  {
    accessorKey: "industry",
    header: () => <div className="text-right">Industry</div>,
    cell: ({ row }) => {
      const industry: string = row.getValue("industry");
      return <div className="text-right font-medium">{industry}</div>;
    },
  },
  {
    accessorKey: "exchangeShortName",
    header: () => <div className="text-right">Exchange</div>,
    cell: ({ row }) => {
      const exchange: string = row.getValue("exchangeShortName");
      return <div className="text-right font-medium">{exchange}</div>;
    },
  },
  {
    accessorKey: "isEtf",
    header: () => <div className="text-right">Is Etf ?</div>,
    cell: ({ row }) => {
      const isEtf: boolean = row.getValue("isEtf");
      return (
        <div className="text-right">
          {isEtf ? (
            <SearchCheck color="#22c55e" />
          ) : (
            <CircleX color="#f43f5e" />
          )}
        </div>
      );
    },
  },
];
