"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useStockLists from "@/hooks/query/useStockLists";
import { StockList } from "@/types/stocks";
import { DataTable } from "./data-table";
import { columns } from "./column";

export default function StocksLists() {
  const { data, error, isLoading } = useStockLists();

  if (error) throw new Error(error.message);
  if (isLoading) return <div>Loading...</div>;

  return <DataTable columns={columns} data={data || []} />;
}
