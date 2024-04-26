import CompanyInfo from "@/components/company/CompanyInfo";
import CompanyProfileContainer from "@/components/company/CompanyProfileContainer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

interface Props {
  params: {
    company: string;
  };
}

export default function page({ params: { company } }: Props) {
  return (
    <div className="container px-0 lg:px-8">
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <CompanyInfo symbol={company} />
        </main>
      </div>
    </div>
  );
}
