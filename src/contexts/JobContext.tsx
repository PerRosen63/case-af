import { Dispatch, createContext } from "react";
import { IJob } from "../models/IJob";
import { IAction } from "../reducers/JobReducer";



type JobContextType = {
  jobs: IJob[];
  dispatch: Dispatch<IAction>
}

export const JobContext = createContext<JobContextType>({
  jobs: [],
  dispatch: () => { 
    return;  
  },
});