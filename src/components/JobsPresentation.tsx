import { useContext, useEffect, useState } from "react";
import { JobPresentation } from "./JobPresentation";
import { JobContext } from "../contexts/JobContext";
import { OccupationContext } from "../contexts/OccupationContext";
import { IJob } from "../models/IJob";

interface IJobsPresentationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  jobs: IJob[];
}

export const JobsPresentation: React.FC<IJobsPresentationProps> = () => {
  const { filteredJobs } = useContext(JobContext); // Access filteredJobs

  const { occupations } = useContext(OccupationContext);
  /* const { filteredOccupations } = occupations;
  const { jobs } = useContext(JobContext); */

  /* const filteredJobs = jobs.filter((job: IJob) => {
    return filteredOccupations.some(
      (occupation) => occupation.id === job.occupation_field.concept_id
    );
  }); */

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("All Occupations:", occupations.allOccupations);
    console.log("Filtered Occupations:", occupations.filteredOccupations);

    setIsLoading(false);
  }, [filteredJobs, occupations]);

  /* useEffect(() => {
    console.log("Jobs array:", jobs);
  }, [jobs]); */

  if (isLoading) {
    return <p>Laddar jobb...</p>; // Display a loading message
  }
  console.log("filtered jobs", filteredJobs);
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
