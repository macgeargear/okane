"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import useSectorPerformance from "@/hooks/query/useSectorPerformance";
import React from "react";
import StockSectorCard from "./StockSectorCard";
import StockSectorSkeleton from "../skeleton/StockSectorSkeleton";

export default function StockSectorList() {
  const { data, error, isLoading } = useSectorPerformance();

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading) return <StockSectorSkeleton />;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
      {data?.map((sector) => (
        <StockSectorCard
          key={"sector-" + sector.sector}
          sector={sector.sector}
          changesPercentage={sector.changesPercentage}
        />
      ))}
    </div>
  );
}
