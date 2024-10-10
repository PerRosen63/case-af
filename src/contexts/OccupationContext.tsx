import { createContext, Dispatch, useReducer } from "react";
import { IOccupation } from "../models/IOccupation";
import {
  occupationReducer,
  OccupationAction,
} from "../reducers/OccupationReducer";

interface OccupationState {
  allOccupations: IOccupation[];
  filteredOccupations: IOccupation[];
}

type OccupationContextType = {
  occupations: OccupationState;
  dispatch: Dispatch<OccupationAction>;
};

const initialState: OccupationState = {
  allOccupations: [],
  filteredOccupations: [],
};

export const OccupationContext = createContext<OccupationContextType>({
  occupations: initialState,
  dispatch: () => {
    return;
  },
});

export const OccupationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [occupations, dispatch] = useReducer(occupationReducer, initialState);

  return (
    <OccupationContext.Provider value={{ occupations, dispatch }}>
      {children}
    </OccupationContext.Provider>
  );
};
