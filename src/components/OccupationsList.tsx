import { useEffect, useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";
import { DigiIconChevronRight } from "@digi/arbetsformedlingen-react";

export const OccupationsList = () => {
  console.log("test:", "test"); // Infinite loop?
  const [occupationsGroup, setOccupationsGruop] = useState<IOccupation[]>([]);

  const [openGroups, setOpenGroups] = useState<{ [id: string]: boolean }>({});

  // Fetch data ONLY ONCE when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOccupation();
      setOccupationsGruop(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prevOpenGroups) => {
      const updatedOpenGroups = occupationsGroup.reduce((acc, group) => {
        acc[group.id] = false;
        return acc;
      }, {} as { [id: string]: boolean });

      // Open only the clicked group
      updatedOpenGroups[groupId] = !prevOpenGroups[groupId];
      console.log("openGroups after update:", updatedOpenGroups); // Check if the state reflects the change
      return updatedOpenGroups;
    });
    console.log("test2:", "test2");
  };

  return (
    <>
      <h1>Occupations List</h1>
      <div>
        <ul className="occupation-group">
          {occupationsGroup.map((occupationGroup) => (
            <li className="occupation-group-item" key={occupationGroup.id}>
              <input
                type="checkbox"
                name={occupationGroup.preferred_label}
                id={occupationGroup.id}
              />
              <button onClick={() => toggleGroup(occupationGroup.id)}>
                <span className="btn-content">
                  <p>{occupationGroup.preferred_label}</p>
                  <DigiIconChevronRight></DigiIconChevronRight>
                </span>
              </button>
              <ul
                className={`occupation ${
                  openGroups[occupationGroup.id] ? "open" : ""
                }`}
              >
                {occupationGroup.narrower.map((narrowerOccupation) => (
                  <li key={narrowerOccupation.id}>
                    <input
                      type="checkbox"
                      name={narrowerOccupation.preferred_label}
                      id={narrowerOccupation.id}
                    />
                    {narrowerOccupation.preferred_label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
