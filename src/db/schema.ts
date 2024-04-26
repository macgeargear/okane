import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const stocks = pgTable("stocks", {
  id: serial("id"),
  name: text("name"),
  symbol: text("symbol"),
});

export const users = pgTable("users", {
  id: serial("id"),
  email: text("email"),
});
