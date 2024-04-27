import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "../db/schema";
import { createId } from "@paralleldrive/cuid2";

dotenv.config({
  path: ".env.local",
});

const sql = postgres(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the database");
    const users = await db
      .insert(schema.users)
      .values([
        {
          id: createId(),
          name: "Alice",
          email: "foobar@gmail.com",
        },
        {
          id: createId(),
          name: "Alice",
          email: "barbaz@gmail.com",
        },
      ])
      .returning({
        id: schema.users.id,
        name: schema.users.name,
        email: schema.users.email,
      });

    for (const user of users) {
      await db.insert(schema.stocks).values([
        {
          id: createId(),
          userId: user.id,
          stockSymbol: "AAPL",
        },
        {
          id: createId(),
          userId: user.id,
          stockSymbol: "GOOGL",
        },
        {
          id: createId(),
          userId: user.id,
          stockSymbol: "AMZN",
        },
      ]);
    }
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
