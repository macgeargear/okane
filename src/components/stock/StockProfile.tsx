"use client";
import useStockProfile from "@/hooks/query/useStockProfile";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export default function StockProfile() {
  const { data, error, isLoading } = useStockProfile();

  if (error) throw new Error(error.message);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      {data?.map((stock) => (
        <div className="container" key={stock.address}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>
                <h1>{stock.companyName}</h1>
                <Badge>{stock.industry}</Badge>
              </CardTitle>

              <CardDescription>{stock.description}</CardDescription>
              <CardContent>
                <div className="container">
                  {" "}
                  <h1>{stock.changes}</h1>
                  <h1>{stock.fullTimeEmployees}</h1>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
