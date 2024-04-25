"use client";
import { DataTable } from "./data-table";
import { columns } from "./column";
import useStockScreener from "@/hooks/query/stock/useStockScreener";

export default function StocksLists() {
  const { data, error, isLoading } = useStockScreener();

  if (error) throw new Error(error.message);
  if (isLoading) return <div>Loading...</div>;

  return <DataTable columns={columns} data={data || []} />;
}
