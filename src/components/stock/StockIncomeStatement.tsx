"use client";

import useStockIncomeStatement from "@/hooks/query/useStockIncomeStatement";
import React from "react";

export default function StockIncomeStatement() {
  const { data, error, isLoading } = useStockIncomeStatement();
  console.log(data, error);

  if (error) throw new Error(error.message);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((statement) => (
        <div className="container" key={statement.cik}>
          <h1>{statement.acceptedDate}</h1>
          <p>{statement.costOfRevenue}</p>
          <p>{statement.costAndExpenses}</p>
          <p>{statement.grossProfit}</p>
          <p>{statement.grossProfitRatio}</p>
        </div>
      ))}
    </div>
  );
}
