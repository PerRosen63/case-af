import { IJob } from "../models/IJob";
import { get } from "./jobBase";

// Funktion för att hämta jobb från rätt endpoint
export const getJobs = async (): Promise<IJob[]> => {
  // Om endpoint kräver parametrar eller query, lägg till dessa här
  return await get<IJob[]>("/search");  // Använd det rätta API-endpoint här
};