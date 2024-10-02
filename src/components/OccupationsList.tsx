import { useEffect, useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";
import {
  DigiFormCheckbox,
  DigiFormFilter,
} from "@digi/arbetsformedlingen-react";

export const OccupationsList = () => {
  console.log("test:", "test"); // Infinite loop?
  const [occupationsGroup, setOccupationsGruop] = useState<IOccupation[]>([]);

  // State to track filter selections for each group
  const [selectedNarrower, setSelectedNarrower] = useState<{
    [groupId: string]: string[];
  }>({});

  // Fetch data ONLY ONCE when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOccupation();
      setOccupationsGruop(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  // Handle changes in filter selections
  const handleFilterChange = (groupId: string, selectedValues: string[]) => {
    setSelectedNarrower((prevSelected) => ({
      ...prevSelected,
      [groupId]: selectedValues,
    }));
  };

  return (
    <>
      <h1>Occupations List</h1>
      <div>
        <ul className="occupation-group">
          {occupationsGroup.map((occupationGroup) => (
            <li className="occupation-group-item" key={occupationGroup.id}>
              <DigiFormCheckbox afLabel="Välj alla"></DigiFormCheckbox>
              <DigiFormFilter
                afFilterButtonText={occupationGroup.preferred_label}
                afSubmitButtonText="Filtrera"
                afListItems={occupationGroup.narrower.map(
                  (narrowerOccupation) => ({
                    id: narrowerOccupation.id,
                    label: narrowerOccupation.preferred_label,
                  })
                )}
                afCheckItems={selectedNarrower[occupationGroup.id] || []} // Set initial checked items
                onAfChangeFilter={(e) =>
                  console.log(e.detail.id, e.detail.isChecked)
                }
                onAfResetFilter={() => console.log("reset filter")}
                onAfSubmitFilter={(e) =>
                  handleFilterChange(occupationGroup.id, e.detail.checked)
                }
                onAfCloseFilter={(e) =>
                  console.log(
                    "submit filter",
                    e.detail.listItems,
                    e.detail.checked
                  )
                }
                //afName={"Yrken"}
                autoFocus
              ></DigiFormFilter>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
