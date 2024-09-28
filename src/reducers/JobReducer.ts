import { IJob } from "../models/IJob";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  LOADED
}

export const JobReducer = (
  jobs: IJob[],
  action: IAction
): IJob[] => {
  console.log("Action received:", action);

  switch(action.type) {
    case ActionType.LOADED: {
      return JSON.parse(action.payload);

      //console.log("Jobs loaded:", action.payload);
    }
   
    default:
      return jobs;
  }
}