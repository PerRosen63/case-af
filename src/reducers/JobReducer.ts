import { IJob } from "../models/IJob";

// Uppdaterat IAction-interface för att stödja både laddning och sökning
export interface IAction {
  type: ActionType;
  payload: string | IJob[];  // Kan vara en JSON-sträng eller en lista av IJob
}

// Utökad enum med en ny action för fritextsökning
export enum ActionType {
  LOADED,   // För att ladda alla jobb
  SEARCHED  // För att hantera sökresultat
}

// Reducern hanterar både att ladda alla jobb och att hantera fritextsökning
export const JobReducer = (
  jobs: IJob[],
  action: IAction
): IJob[] => {
  console.log("Action received:", action);

  switch (action.type) {
    case ActionType.LOADED: {
      // Ladda jobb från payload (förväntar sig en lista av IJob)
      return Array.isArray(action.payload) ? action.payload : JSON.parse(action.payload as string);
    }

    case ActionType.SEARCHED: {
      // Hantera sökresultaten (förväntar sig en lista av IJob)
      return Array.isArray(action.payload) ? action.payload : [];
    }

    default:
      return jobs;
  }
};
