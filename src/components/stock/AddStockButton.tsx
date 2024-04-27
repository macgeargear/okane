// "use client";

// import React from "react";
// import { Button } from "../ui/button";
// import db from "@/db/drizzle";
// import { stocks } from "@/db/schema";
// import { addStockToPortfolio } from "@/lib/actions";
// import { useFormState } from "react-dom";

// type Props = {
//   symbol: string;
//   userId: string;
// };

// export default function AddStockButton({ symbol, userId }: Props) {
//   const [state, formAction] = useFormState(addStockToPortolio, {
//     symbol: "",
//     userId: "",
//   });
//   return (
//     <form>
//       <Button type="submit">Add to portfolio</Button>
//     </form>
//   );
// }
