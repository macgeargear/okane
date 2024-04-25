"use client";

import React from "react";
import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectorsPerfomance } from "@/types/stocks";
import { cn } from "@/lib/utils";

export default function StockSectorCard({
  sector,
  changesPercentage,
}: SectorsPerfomance) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{sector}</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{sector}</div>
        <p className="text-xs text-muted-foreground">
          <span
            className={cn("mr-2 text-green-500", {
              "text-red-500": changesPercentage[0] === "-",
            })}
          >
            ${changesPercentage}
          </span>
          from last month
        </p>
      </CardContent>
    </Card>
  );
}
