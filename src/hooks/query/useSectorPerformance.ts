import { Fetch } from "@/lib/utils";
import { SectorsPerfomance } from "@/types/stocks";
import { useQuery } from "@tanstack/react-query";

export default function useSectorPerformance() {
  return useQuery<SectorsPerfomance[]>({
    queryKey: ["sectorPerformance"],
    queryFn: () => Fetch("/api/stocks/sectors-performance"),
  });
}
