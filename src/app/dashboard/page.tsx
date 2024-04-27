import db from "@/db/drizzle";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const stocks = await db.query.stocks.findMany();
  return (
    <div>
      {stocks.map((stock) => (
        <div className="container" key={stock.id}>
          <h1>{stock.stockSymbol}</h1>
          <p>{stock.isFavorite ? "Favorite" : "Not favorite"}</p>
        </div>
      ))}
    </div>
  );
}
