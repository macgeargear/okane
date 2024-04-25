"use client";

import useStockScore from "@/hooks/query/useStockScore";
import { Card, CardHeader } from "../ui/card";

export default function StockScore() {
  const { data, error, isLoading } = useStockScore("");

  if (error) throw new Error(error.message);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <Card>
        <CardHeader>
          {data?.map((stock) => (
            <div key={stock.symbol}>
              <h1>{stock.symbol}</h1>
              <h1>{stock.altmanZScore}</h1>
            </div>
          ))}
        </CardHeader>
      </Card>
    </div>
  );
}
