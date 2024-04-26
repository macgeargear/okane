import QueryProvider from "@/components/QueryProvider";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { User, auth, clerkClient, currentUser } from "@clerk/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  // const { userId } = auth();
  // let user: User | null = null;
  // if (userId) {
  //   user = await clerkClient.users.getUser(userId);
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <QueryProvider>
            <Navbar />
            {children}
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
