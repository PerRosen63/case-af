import { useContext, useEffect } from "react";
import { JobContext } from "../contexts/JobContext";
import { JobPresentation } from "./JobPresentation";

export const JobsPresentation = () => {
  const { jobs } = useContext(JobContext);

  useEffect(() => {
    console.log("Jobs array:", jobs);
  }, [jobs]);


  
  return (
    <>
      <h1>Jobs</h1>
      <p>Antal jobb: {jobs.length}</p>
      {jobs.length === 0 && <p>Inga jobb tillgängliga</p>}
      {jobs.map((job) => (
        <JobPresentation job={job} key={job.id} />
      ))}
    </>
  );
};