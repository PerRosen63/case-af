import { Dispatch, createContext, useReducer } from "react";
import { IJob } from "../models/IJob";
import { IAction } from "../reducers/JobReducer";
import { JobReducer } from "../reducers/JobReducer";

type JobContextType = {
  jobs: IJob[];
  filteredJobs: IJob[];
  dispatch: Dispatch<IAction>;
};

export const JobContext = createContext<JobContextType>({
  jobs: [],
  filteredJobs: [],
  dispatch: () => {
    return;
  },
});

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: JobContextType = {
    jobs: [],
    filteredJobs: [],
    dispatch: () => {
      return;
    },
  };

  const [state, dispatch] = useReducer(JobReducer, initialState);

  return (
    <JobContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};
