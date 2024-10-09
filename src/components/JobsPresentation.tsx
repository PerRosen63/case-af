import { useContext } from "react";
import { JobPresentation } from "./JobPresentation";
import { JobContext } from "../contexts/JobContext";


export const JobsPresentation = () => {

  const { jobs } = useContext(JobContext);


  return (<>
    {jobs.map(job => 
      <JobPresentation job={job} key={job.id}></JobPresentation>

   )}
  
  </>)
};
