import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getFirstTwoChars = (str: string) =>
  str.slice(0, 2).toLocaleUpperCase()
