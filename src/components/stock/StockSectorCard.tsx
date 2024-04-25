"use client";

import React from "react";
import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectorsPerfomance } from "@/types/stocks";

export default function StockSegmentCard({
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
          ${changesPercentage} from last month
        </p>
      </CardContent>
    </Card>
  );
}
