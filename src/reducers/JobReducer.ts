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
  switch(action.type) {
    case ActionType.LOADED: {
      return JSON.parse(action.payload);
    }
   
    default:
      return jobs;

}}