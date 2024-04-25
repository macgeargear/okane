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
import useStockData from "@/hooks/query/useStockData";
import { StockList } from "@/types/stocks";
import { DataTable } from "./data-table";
import { columns } from "./column";

export default function StocksLists() {
  const { data, error, isLoading } = useStockData();

  if (error) throw new Error(error.message);
  if (isLoading) return <div>Loading...</div>;

  return <DataTable columns={columns} data={data || []} />;
}
