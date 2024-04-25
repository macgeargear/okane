"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { formatPrice } from "@/lib/utils";
import { StockScreenerResult } from "@/types/stocks";
import { HoverCard } from "@radix-ui/react-hover-card";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, CircleX, SearchCheck } from "lucide-react";

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
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="secondary" className="hover:bg-slate-300">
                {symbol}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={`https://github.com/${symbol}`} />
                  <AvatarFallback>{symbol[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{symbol}</h4>
                  <p className="text-sm">{companyName}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
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
