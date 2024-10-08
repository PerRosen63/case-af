import { useContext, useEffect } from "react";
import { JobContext } from "../contexts/JobContext";
import { OccupationContext } from "../contexts/OccupationContext";

export const JobsPresentation = () => {
  const { occupations } = useContext(OccupationContext);

  const { jobs } = useContext(JobContext);

  useEffect(() => {
    console.log("Filtered Occupations:", occupations);
  }, [occupations]);

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
                  {job.employer.name},{" "}
                  {job.workplace_address.city
                    ? job.workplace_address.city
                    : job.workplace_address.municipality}
                </h4>
                <p>Publicerad: {job.publication_date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
