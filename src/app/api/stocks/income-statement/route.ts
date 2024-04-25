import { STOCK_SCREENER_URL, STOCK_STATEMENT_URL } from "@/config";
import { Fetch } from "@/lib/utils";

export async function GET(req: Request) {
    const data = await Fetch(`${STOCK_STATEMENT_URL}`)
  return Response.json("");
}
