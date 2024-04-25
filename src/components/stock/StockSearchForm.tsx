"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { StockDropdownList } from "./StockDropdownList";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function StockSearchForm() {
  const form = useForm();
  return (
    <div className="container flex justify-center items-center space-x-4">
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
              <FormItem>
                <StockDropdownList />
              </FormItem>
            </FormItem>
          )}
        />
      </Form>
      <Button type="submit">Submit</Button>
    </div>
  );
}
