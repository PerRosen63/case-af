import { IOccupation } from "../models/IOccupation";

export enum ActionType {
  SET_OCCUPATIONS = "SET_OCCUPATIONS",
  FILTER_OCCUPATIONS = "FILTER_OCCUPATIONS",
}

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
  allOccupations: IOccupation[];
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
        filteredOccupations: action.payload,
      };
    case ActionType.FILTER_OCCUPATIONS:
      return {
        ...state,
        filteredOccupations: action.payload
          .map((selected) => {
            if (!selected.narrowerIds) {
              const group = state.allOccupations.find(
                (occupation) => occupation.id === selected.groupId
              );
              return group || [];
            } else {
              return state.allOccupations.filter((occupation) =>
                selected.narrowerIds?.includes(occupation.id)
              );
            }
          })
          .flat(),
      };
    default:
      return state;
  }
};
