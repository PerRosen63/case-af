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
    narrowerIds?: string[];
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
  console.log(action.payload);
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
        filteredOccupations: action.payload
          .map((selected) => {
            // Select All case: Find the occupation group by groupId
            if (!selected.narrowerIds) {
              const group = state.allOccupations.find(
                (occupation) => occupation.id === selected.groupId
              );
              return group || []; // Return the group object, not the entire occupation
            }
            // Individual selection case: Filter by narrowerIds
            else {
              return state.allOccupations.filter((occupation) =>
                selected.narrowerIds?.includes(occupation.id)
              );
            }
          })
          .flat(), // Flatten the array after mapping
      };
    default:
      return state;
  }
};
