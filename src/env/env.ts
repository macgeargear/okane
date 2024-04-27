import { z } from "zod";

// The schema is an object
const envSchema = z.object({
  FMP_API_KEY: z.string().url().min(1),
  PORT: z.string().min(1),
  ENV: z
    .union([
      z.literal("development"),
      z.literal("testing"),
      z.literal("production"),
    ])
    .default("development"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().min(1),
  DATABASE_URL: z.string().url().min(1),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

const env = envSchema.parse(process.env);

export default env;
