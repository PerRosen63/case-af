import { useContext, useEffect } from "react";
import { JobPresentation } from "./JobPresentation";
import { JobContext } from "../contexts/JobContext";
import { OccupationContext } from "../contexts/OccupationContext";
import { IJob } from "../models/IJob";

export const JobsPresentation = () => {
  const { occupations } = useContext(OccupationContext);
  const { filteredOccupations } = occupations;
  const { jobs } = useContext(JobContext);

  const filteredJobs = jobs.filter((job: IJob) => {
    return filteredOccupations.some(
      (occupation) => occupation.id === job.occupation_field.concept_id
    );
  });

  useEffect(() => {
    // console.log("All Occupations:", occupations.allOccupations);
    console.log("Filtered Occupations:", occupations.filteredOccupations);
    console.log("filtered jobs", filteredJobs);
  }, [filteredJobs, occupations]);

  /* useEffect(() => {
    console.log("Jobs array:", jobs);
  }, [jobs]); */

  return (
    <>
      {filteredJobs.length === 0 ? (
        <p>Inga jobb hittades.</p>
      ) : (
        <div>
          <ul>
            {filteredJobs.map((job) => (
              <JobPresentation job={job} key={job.id}></JobPresentation>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
