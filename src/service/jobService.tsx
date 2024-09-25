import { IJob } from "../models/IJob";
import { get } from "./jobBase";

export const getJobs = async (): Promise<IJob[]> => {
  return await get<IJob[]>("");

 
  
  }