import { useContext, useEffect } from "react";
import { JobContext } from "../contexts/JobContext";
import { Pagination } from "./Pagination";


interface JobsPresentationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const JobsPresentation = ({
  currentPage,
  totalPages,
  onPageChange,
}: JobsPresentationProps) => {

  const { jobs } = useContext(JobContext);

  useEffect(() => {
    console.log("Jobs array:", jobs);
  }, [jobs]);

  return (
    <>
{jobs.length === 0 ? (
        <p>Inga jobb hittades.</p>
      ) : (
        <div>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <h3>{job.occupation.label}</h3>
                <h4 style={{ display: "inline" }}>
                  {job.employer.name},  {job.workplace_address.city 
                  ? job.workplace_address.city 
                  : job.workplace_address.municipality}
                </h4>
                <p>Publicerad: {job.publication_date}</p>
              </li>
            ))}
          </ul>
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          />
    </div>
        )}
    </>
  );
};
