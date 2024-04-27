"use server";

import db from "@/db/drizzle";
import { stocks } from "@/db/schema";

export const addStockToPortfolio = async ({
  symbol,
  userId,
}: {
  symbol: string;
  userId: string;
}) => {
  await db.insert(stocks).values([
    {
      stockSymbol: symbol,
      userId,
      isFavorite: false,
    },
  ]);
};
