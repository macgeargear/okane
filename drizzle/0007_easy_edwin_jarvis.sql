CREATE TABLE IF NOT EXISTS "stocks" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"stock_symbol" text NOT NULL,
	"is_favorite" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stocks" ADD CONSTRAINT "stocks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
