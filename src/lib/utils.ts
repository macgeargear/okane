import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Fetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error("Error!");

  const data = await response.json();

  return data;
};
