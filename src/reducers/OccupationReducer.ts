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

export type OccupationAction = SetOccupationsAction | FilterOccupationsAction;

interface OccupationState {
  allOccupations: IOccupation[]; // Store all fetched occupations
  filteredOccupations: IOccupation[];
}

const initialState: OccupationState = {
  allOccupations: [],
  filteredOccupations: [],
};

export const occupationReducer = (
  state: OccupationState = initialState,
  action: OccupationAction
): OccupationState => {
  switch (action.type) {
    case ActionType.SET_OCCUPATIONS:
      return {
        ...state,
        allOccupations: action.payload,
        filteredOccupations: action.payload, // Initially, filtered is the same as all
      };
    case ActionType.FILTER_OCCUPATIONS:
      return {
        ...state,
        filteredOccupations: state.allOccupations.filter((occupation) => {
          // Filter from allOccupations
          // Find a matching selection from the payload
          const matchingSelection = action.payload.find(
            (selected) =>
              selected.groupId === occupation.id ||
              (selected.narrowerIds &&
                selected.narrowerIds.includes(occupation.id))
          );

          return !!matchingSelection;
        }),
      };
    default:
      return state;
  }
};
