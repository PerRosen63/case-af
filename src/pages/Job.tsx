import { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../contexts/JobContext";
import { JobPresentation } from "../components/JobPresentation.tsx";

export const Job = () => {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);
  
  const selectedJob = jobs.find((job) => job.id === id);

  if (!selectedJob) {
    return <p>Här hittar du inget jobb.</p>;
  }

  return (
    <>
      <JobPresentation job={selectedJob} />
    </>
  );
};
