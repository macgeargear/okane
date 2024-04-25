"use client";

import useCompanyProfile from "@/hooks/query/company/useCompanyProfile";
import React from "react";

export default function CompanyProfileContainer({
  symbol,
}: {
  symbol: string;
}) {
  const { data, error, isLoading } = useCompanyProfile(symbol);

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}
