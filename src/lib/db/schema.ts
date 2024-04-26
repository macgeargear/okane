import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const usersRelations = relations(users, ({ many }) => ({
  stocks: many(stocks),
}));

export const stocks = pgTable("stocks", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  symbol: varchar("symbol", { length: 10 }).notNull(),
  isFavorite: boolean("is_favorite")
    .notNull()
    .$default(() => false),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
});

export const stocksRelations = relations(stocks, ({ one }) => ({
  user: one(users, {
    fields: [stocks.userId],
    references: [users.id],
  }),
}));
