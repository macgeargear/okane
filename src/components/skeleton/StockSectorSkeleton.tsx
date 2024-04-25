import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function StockSectorSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
      <Skeleton className="h-[125px] w-[250px] rounded-xl border-1" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl border-1" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl border-1" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl border-1" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl border-1" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl border-1" />
    </div>
  );
}
