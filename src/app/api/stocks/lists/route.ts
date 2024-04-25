import { FMP_BASE_URL } from "@/config";
import { Fetch } from "@/lib/utils";

export async function GET(req: Request) {
  const data = await Fetch(
    `${FMP_BASE_URL}/search?query=${"aaa"}&apikey=${process.env.FMP_API_KEY}`
  );

  return Response.json(data);
}
