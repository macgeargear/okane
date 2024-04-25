import { FMP_BASE_URL, STOCK_SEARCH_URL } from "@/config";
import { Fetch } from "@/lib/utils";

export async function GET(req: Request) {
  const data = await Fetch(
    `${STOCK_SEARCH_URL}&query=${"aaa"}`
  );

  return Response.json(data);
}
