import { useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";

export const OccupationsList = () => {
  const [occupations, setOccupations] = useState<IOccupation[]>([]);

  // Fetch data when the component mounts
  (async () => {
    const data = await getOccupation();
    setOccupations(data);
  })();

  return (
    <>
      <h1>Occupations List</h1>
      <div>
        <ul>
          {occupations.map((occupation) => (
            <li key={occupation.id}>
              <h3>{occupation.preferred_label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
