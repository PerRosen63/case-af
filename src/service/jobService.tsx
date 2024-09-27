import { IJob } from "../models/IJob";
import { get } from "./jobBase";


export const getJobs = async (): Promise<IJob[]> => {
  try {
    const jobs = await get<IJob[]>("");
    console.log("Jobs fetched:", jobs); 
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};