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
  const { filteredJobs } = useContext(JobContext);

  const { occupations } = useContext(OccupationContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [filteredJobs, occupations]);

  if (isLoading) {
    return <p>Laddar jobb...</p>;
  }

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
