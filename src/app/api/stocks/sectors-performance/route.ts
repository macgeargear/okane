import { SECTOR_PERFORMANCE_URL } from "@/config";
import { Fetch } from "@/lib/utils";

export async function GET(req: Request) {
  const data = await Fetch(`${SECTOR_PERFORMANCE_URL}`);

  return Response.json(data);
}
