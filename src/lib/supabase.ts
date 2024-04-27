import * as dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config({
  path: "../../.env.local",
});

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
