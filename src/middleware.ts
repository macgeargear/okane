import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isTenantRoute = createRouteMatcher(["/dashboard/(.*)"]);

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
