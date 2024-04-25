import { COMPANYPROFILE_URL, SECTOR_PERFORMANCE_URL } from "@/config";
import { Fetch } from "@/lib/utils";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const symbol = url.searchParams.get("symbol")!;

  const data = await Fetch(`${COMPANYPROFILE_URL(symbol)}`);

  return Response.json(data);
}
