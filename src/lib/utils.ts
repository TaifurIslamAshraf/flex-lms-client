import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serverApi = process.env.NEXT_PUBLIC_SERVER_API as string;
export const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL as string;

export function extractVideoID(url: string): string | null {
  if (!url || typeof url !== "string") {
    return null;
  }

  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
