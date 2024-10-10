import { IJob } from "../models/IJob";

interface JobState {
  jobs: IJob[];
  filteredJobs: IJob[];
}

export interface IAction {
  type: ActionType;
  payload: string | IJob[] | string | null;
}

export enum ActionType {
  LOADED,
  SEARCHED,
  FILTER_JOBS, // Add a new action type for filtering
}

// Define initialState here:
const initialState: JobState = {
  jobs: [],
  filteredJobs: [],
};

export const JobReducer = (
  state: JobState = initialState,
  action: IAction
): JobState => {
  console.log("Action received:", action);

  switch (action.type) {
    case ActionType.LOADED:
    case ActionType.SEARCHED: {
      const newJobs = Array.isArray(action.payload)
        ? action.payload
        : JSON.parse(action.payload as string);
      return {
        ...state,
        jobs: newJobs,
        filteredJobs: newJobs, // Update filteredJobs as well
      };
    }

    case ActionType.FILTER_JOBS:
      if (typeof action.payload === "string" || action.payload === null) {
        const occupationGroupIds = action.payload
          ? action.payload.split(";")
          : []; // Split by semicolon
        return {
          ...state,
          filteredJobs: state.jobs.filter((job: IJob) => {
            // Assuming job.occupation_field.concept_id contains the group ID
            console.log("Filtering by group IDs:", occupationGroupIds);
            /* const testGroupId = "apaJ_2ja_LuF";
            return (
              job.occupation_field.concept_id.toLowerCase() ===
              testGroupId.toLowerCase()
            ); */
            return (
              occupationGroupIds.length === 0 ||
              occupationGroupIds.includes(job.occupation_field.concept_id)
            );
          }),
        };
      }
      return state;

    default:
      return state;
  }
};
