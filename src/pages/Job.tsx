import { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../contexts/JobContext";
import { JobPresentation } from "../components/JobPresentation.tsx";

export const Job = () => {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);

  if (id) {
    const job = jobs.find((p) => p.id === id);
    
    if (job) {
      return (
        <>
          <JobPresentation job={job} detailMode={true} />
        </>
      );
    }
  }

  return <div>No job found</div>;
};
