import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function StockSectorSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
      <Skeleton className="h-[126px] w-[352px] rounded-xl border border-gray-200 text-card-foreground shadow-sm" />
      <Skeleton className="h-[126px] w-[352px] rounded-xl border border-gray-200 text-card-foreground shadow-sm" />
      <Skeleton className="h-[126px] w-[352px] rounded-xl border border-gray-200 text-card-foreground shadow-sm" />
      <Skeleton className="h-[126px] w-[352px] rounded-xl border border-gray-200 text-card-foreground shadow-sm" />
      <Skeleton className="h-[126px] w-[352px] rounded-xl border border-gray-200 text-card-foreground shadow-sm" />
      <Skeleton className="h-[126px] w-[352px] rounded-xl border border-gray-200 text-card-foreground shadow-sm" />
    </div>
  );
}
