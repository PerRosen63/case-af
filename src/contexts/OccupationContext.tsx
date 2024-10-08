import { createContext, Dispatch, useReducer } from "react";
import { IOccupation } from "../models/IOccupation";
import { occupationReducer } from "../reducers/OccupationReducer";

type OccupationContextType = {
  occupations: IOccupation[];
  dispatch: Dispatch<OccupationAction>;
};

export const OccupationContext = createContext<OccupationContextType>({
  occupations: [],
  dispatch: () => {
    return;
  },
});

export const OccupationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [occupations, dispatch] = useReducer(occupationReducer, []);

  return (
    <OccupationContext.Provider value={{ occupations, dispatch }}>
      {children}
    </OccupationContext.Provider>
  );
};
