import { useContext, useEffect } from "react";
import { JobContext } from "../contexts/JobContext";

export const JobsPresentation = () => {
  const { jobs } = useContext(JobContext);

  useEffect(() => {
    console.log("Jobs array:", jobs);
  }, [jobs]);

  return (
    <>
{jobs.length === 0 ? (
        <p>Inga jobb hittades.</p>
      ) : (
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
        )}
    </>
  );
};
