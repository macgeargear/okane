"use client";
import useCompanyProfile from "@/hooks/query/company/useCompanyProfile";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, PersonStanding } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatPrice } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CompanyAdditionalInfo from "./CompanyAdditionalInfo";

export default function CompanyInfo({ symbol }: { symbol: string }) {
  const router = useRouter();
  const { data, error, isLoading } = useCompanyProfile(symbol);
  const company = data?.[0]!;

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Avatar className="bg-muted p-2">
          <AvatarImage src={company.image} alt={company.companyName} />
          <AvatarFallback>{company.companyName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg md:text-xl">
            {company?.companyName}
          </h1>
          <div className="flex items-center">
            {company.industry ? <Badge>{company.industry}</Badge> : null}
            {company.isEtf ? <Badge>Etf</Badge> : null}
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardDescription>Current Price</CardDescription>
              <CardTitle>{formatPrice(company.price)}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Daily Change</CardDescription>
              <CardTitle className="text-green-500">+2.5%</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Trading Volume</CardDescription>
              <CardTitle>{formatPrice(company.volAvg)}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="grid gap-6">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>{company.description}</CardContent>
        </Card>
      </div>
      <div className="grid gap-6">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Additional Info</CardTitle>
          </CardHeader>
          <CardContent>
            <CompanyAdditionalInfo company={company} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
