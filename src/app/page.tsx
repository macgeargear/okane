import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StockSectorCard from "@/components/stock/StockSectorCard";
import StockSectorList from "@/components/stock/StockSectorList";
import { Button, buttonVariants } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  console.log(user);
  return (
    <>
      <MaxWidthWrapper className="container grid place-content-center">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hi{" "}
            <span className="text-primary">
              {user?.firstName
                ? user.firstName
                : user?.emailAddresses[0].emailAddress.split("@")[0]}
              !
            </span>{" "}
            Welcome to Okane{" "}
            <span className="text-gray-600 underline-offset-8 underline">
              お金.
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Let&apos;s screen the stocks{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/stocks" className={buttonVariants()}>
              Browse all stocks
            </Link>
            <Button variant="ghost">Out quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <h1 className="text-2xl font-medium text-center mb-12">
            Browse segments
          </h1>
          <StockSectorList />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
