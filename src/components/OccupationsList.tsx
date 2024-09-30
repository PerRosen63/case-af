import { useEffect, useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";
import { DigiIconChevronRight } from "@digi/arbetsformedlingen-react";

export const OccupationsList = ({ selectedOccupations }) => {
  const [occupationsGroup, setOccupationsGroup] = useState<IOccupation[]>([]);
  const [openGroups, setOpenGroups] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOccupation();
      setOccupationsGroup(data);
    };

    fetchData();
  }, []);

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prevOpenGroups) => {
      const updatedOpenGroups = occupationsGroup.reduce((acc, group) => {
        acc[group.id] = false;
        return acc;
      }, {} as { [id: string]: boolean });

      updatedOpenGroups[groupId] = !prevOpenGroups[groupId];
      return updatedOpenGroups;
    });
  };

 
  const filteredOccupations = occupationsGroup.filter((occupationGroup) => {
    return (
      selectedOccupations.length === 0 || 
      selectedOccupations.includes(occupationGroup.id) 
    );
  });

  return (
    <>
      <h1>Occupations List</h1>
      <div>
        <ul className="occupation-group">
          {filteredOccupations.map((occupationGroup) => (
            <li className="occupation-group-item" key={occupationGroup.id}>
              <input
                type="checkbox"
                name={occupationGroup.preferred_label}
                id={occupationGroup.id}
              />
              <button onClick={() => toggleGroup(occupationGroup.id)}>
                <span className="btn-content">
                  <p>{occupationGroup.preferred_label}</p>
                  <DigiIconChevronRight />
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
