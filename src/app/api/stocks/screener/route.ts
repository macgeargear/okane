import { STOCK_SCREENER_URL } from "@/config";
import { stockScreenerSchema } from "@/lib/schema/stock";
import { Fetch } from "@/lib/utils";

export async function GET(req: Request) {
  const reqBody = stockScreenerSchema.parse(req.body);
  const data = await Fetch(`${STOCK_SCREENER_URL}`);

  return Response.json(data);
}
