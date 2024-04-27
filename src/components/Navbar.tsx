"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import { Button, buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white border-b">
        <MaxWidthWrapper>
          <div>
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="ml-4 flex items-center gap-2 lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
                <Link
                  className={cn(buttonVariants({ variant: "ghost" }))}
                  href="/dashboard"
                >
                  dashboard
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                {/* <NavItems /> */}
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-items-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign up
                    </Link>
                  )}
                  <Button>Sign in</Button>
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  {user ? (
                    <Avatar>
                      <AvatarImage src="http://github.com/macgeargear.png" />
                      <AvatarFallback>Gear</AvatarFallback>
                    </Avatar>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
