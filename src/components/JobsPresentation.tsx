import { useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import { JobPresentation } from "./JobPresentation";

export const JobsPresentation = () => {
  const { jobs } = useContext(JobContext);



  return (<>
  <h1>Jobs</h1>
    {jobs.map(job => 
      <JobPresentation job={job} key={job.id}>
        
      </JobPresentation>

   )}
  
  
  </>)
}