import { IJob } from "../models/IJob";
import { get } from "./jobBase";

export const getJobs = async (): Promise<IJob[]> => {
  try {
    const jobs = await get<IJob>("");
    console.log("Jobs fetched:", jobs);
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
export const getJobsBySearch = async (searchTerm: string, page: number = 1): Promise<IJob[]> => {
  try {
    const offset = (page - 1) * 10;
    const endpoint = `?q=${encodeURIComponent(searchTerm)}&offset=${offset}&limit=10`;
    const jobs = await get<IJob>(endpoint);

    console.log(`Jobs fetched for search term "${searchTerm}, page ${page}":`, jobs);
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs by search:", error);
    return [];
  }
};