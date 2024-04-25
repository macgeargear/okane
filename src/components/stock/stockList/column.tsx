"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { StockList } from "@/types/stocks";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<StockList>[] = [
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
    accessorKey: "symbol",
    header: () => <div className="text-right">Symbol</div>,
    cell: ({ row }) => {
      const symbol: string = row.getValue("symbol");
      return <div className="text-right font-medium">{symbol}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-right">Name</div>,
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      return <div className="text-right font-medium">{name}</div>;
    },
  },
  {
    accessorKey: "currency",
    header: () => <div className="text-right">Currency</div>,
    cell: ({ row }) => {
      const currency: string = row.getValue("currency");
      return <div className="text-right font-medium">{currency}</div>;
    },
  },
  {
    accessorKey: "stockExchange",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Stock Exchange
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const stockExchange: string = row.getValue("stockExchange");
      return <div className="text-right font-medium">{stockExchange}</div>;
    },
  },
];
