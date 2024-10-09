import { IJob } from "../models/IJob";

export interface IAction {
  type: ActionType;
  payload: string | IJob[];
}

export enum ActionType {
  LOADED,
  SEARCHED,
}

export const JobReducer = (jobs: IJob[], action: IAction): IJob[] => {
  console.log("Action received:", action);

  switch (action.type) {
    case ActionType.LOADED: {
      return Array.isArray(action.payload)
        ? action.payload
        : JSON.parse(action.payload as string);
    }

    case ActionType.SEARCHED: {
      return Array.isArray(action.payload)
        ? action.payload
        : JSON.parse(action.payload as string);
    }

    default:
      return jobs;
  }
};
