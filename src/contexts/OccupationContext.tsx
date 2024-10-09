import { createContext, Dispatch, useReducer } from "react";
import { IOccupation } from "../models/IOccupation";
import {
  occupationReducer,
  OccupationAction,
} from "../reducers/OccupationReducer";

// Define the new structure for OccupationState
interface OccupationState {
  allOccupations: IOccupation[];
  filteredOccupations: IOccupation[];
}

// Update the context type
type OccupationContextType = {
  occupations: OccupationState;
  dispatch: Dispatch<OccupationAction>;
};

// Initial state for the reducer
const initialState: OccupationState = {
  allOccupations: [],
  filteredOccupations: [],
};

// Update the initial context value
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
