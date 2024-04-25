"use client";
import useSectorPerformance from "@/hooks/query/useSectorPerformance";
import React from "react";
import StockSegmentCard from "./StockSectorCard";

export default function StockSectorList() {
  const { data, error, isLoading } = useSectorPerformance();

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
      {data?.map((sector) => (
        <StockSegmentCard
          key={"sector-" + sector.sector}
          sector={sector.sector}
          changesPercentage={sector.changesPercentage}
        />
      ))}
    </div>
  );
}
