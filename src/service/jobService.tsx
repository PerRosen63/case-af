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
export const JOBS_PER_PAGE = 5;
export const getJobsBySearch = async (searchTerm: string, page: number = 1): Promise<IJob[]> => {
  try {
    
    const jobsPerPage = JOBS_PER_PAGE;
    const offset = (page - 1) * jobsPerPage;
    const endpoint = `?q=${encodeURIComponent(searchTerm)}&offset=${offset}&limit=${jobsPerPage}`;
    const jobs = await get<IJob>(endpoint);

    console.log(`Jobs fetched for search term "${searchTerm}, page ${page}":`, jobs);
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs by search:", error);
    return [];
  }
};