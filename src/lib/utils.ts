import { FetchQueryOptions } from "@tanstack/react-query";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Fetch = async <T>(
  endpoint: string,
  options?: FetchQueryOptions
): Promise<T> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error("Error!");

  const data = await response.json();

  return data;
};
