import { STOCK_SCREENER_URL } from "@/config";
import { Fetch } from "@/lib/utils";

export async function GET(req: Request) {
  const data = await Fetch(`${STOCK_SCREENER_URL}`);

  return Response.json(data);
}
