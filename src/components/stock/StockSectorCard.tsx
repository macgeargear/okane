"use client";

import React from "react";
import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectorsPerfomance } from "@/types/stocks";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function StockSectorCard({
  sector,
  changesPercentage,
}: SectorsPerfomance) {
  const router = useRouter();
  return (
    <Card onClick={() => router.push("/company")} className="cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        {/* <CardTitle className="text-sm font-medium">{sector}</CardTitle> */}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">{sector}</h1>
        </div>
        <div className="text-xs text-muted-foreground">
          <span
            className={cn("mr-2 text-green-500", {
              "text-red-500": changesPercentage[0] === "-",
            })}
          >
            ${changesPercentage}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
