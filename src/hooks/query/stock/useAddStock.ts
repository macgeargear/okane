import db from "@/db/drizzle";
import { stocks } from "@/db/schema";
import { useQuery } from "@tanstack/react-query";

type Props = {
  symbol: string;
  userId: string;
};

export default function useAddStock({ symbol, userId }: Props) {
  return useQuery({
    queryKey: ["stock", symbol, userId],
    queryFn: () =>
      db.insert(stocks).values([
        {
          stockSymbol: symbol,
          userId,
          isFavorite: false,
        },
      ]),
  });
}
