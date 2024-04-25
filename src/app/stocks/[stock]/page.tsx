import StockIncomeStatement from "@/components/stock/StockIncomeStatement";
import React from "react";

// TODO: this page will have
// 1. StockIncomeStatement
// 2. StockProfile
// 3. StockScore
// 4. StocksBalanceSheet
// 5. StocksCashFlow
// 6. StocksList

export default function page() {
  return (
    <div className="container">
      <StockIncomeStatement />
    </div>
  );
}
