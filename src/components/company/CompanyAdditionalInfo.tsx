import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { CompanyProfile } from "@/types/company";
import { formatPrice } from "@/lib/utils";
import { PersonStanding } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface Props {
  company: CompanyProfile;
}

// TODO: Add addition info

export default function CompanyAdditionalInfo({ company }: Props) {
  const employeeCount = formatPrice(company.fullTimeEmployees);
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Additional Info</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Exchange</TableCell>
                <TableCell>
                  {company.exchange} ({company.exchangeShortName})
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>CEO</TableCell>
                <TableCell>{company.ceo}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sector</TableCell>
                <TableCell>{company.sector}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Full time employee</TableCell>
                <TableCell className="flex items-center">
                  {employeeCount.slice(1, employeeCount.length)}{" "}
                  <PersonStanding />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
