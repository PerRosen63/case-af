import { useContext } from "react";
import { IJob } from "../models/IJob";
import { JobContext } from "../contexts/JobContext";

interface IJobPresentation {
  job: IJob;
  
}

export const JobPresentation = ({
  job
}: IJobPresentation) => {
  const { dispatch } = useContext(JobContext)

  
  return (<>
    <div >
      <h2>{job.headline}</h2>
  
      
    </div>


  </>)
}

