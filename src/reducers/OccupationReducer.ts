import { IOccupation } from "../models/IOccupation";

// Define the actions for the reducer
export enum ActionType {
  SET_OCCUPATIONS = "SET_OCCUPATIONS",
  FILTER_OCCUPATIONS = "FILTER_OCCUPATIONS",
}

// Define the action types
interface SetOccupationsAction {
  type: ActionType.SET_OCCUPATIONS;
  payload: IOccupation[];
}

interface FilterOccupationsAction {
  type: ActionType.FILTER_OCCUPATIONS;
  payload: {
    groupId: string;
    narrowerIds: string[];
  }[];
}

type OccupationAction = SetOccupationsAction | FilterOccupationsAction;

// Define the initial state
const initialState: IOccupation[] = [];

// The reducer function
export const occupationReducer = (
  state: IOccupation[] = initialState,
  action: OccupationAction
): IOccupation[] => {
  switch (action.type) {
    case ActionType.SET_OCCUPATIONS:
      return action.payload;
    case ActionType.FILTER_OCCUPATIONS:
      // Implement your filtering logic here
      // Example:
      return state.filter((occupation) => {
        // Check if the occupation's ID is in the selected narrowerIds
        return action.payload.some(
          (selected) =>
            selected.narrowerIds.includes(occupation.id) ||
            selected.groupId === occupation.id
        );
      });
    default:
      return state;
  }
};
