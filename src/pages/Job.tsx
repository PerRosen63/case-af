import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../service/jobService";
import { IJob } from "../models/IJob";
import { JobPresentation } from "../components/JobPresentation";

export const Job = () => {
  const { id } = useParams<{ id: string }>();
console.log("Job ID from URL:", id);
  const [job, setJob] = useState<IJob | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const jobs = await getJobs();
      console.log("Jobs fetched:", jobs);
  
      const foundJob = jobs.find(job => String(job.id) === id);
      console.log("Job ID from URL:", id);
      console.log("Found job:", foundJob);
  
      setJob(foundJob || null);
    };
  
    fetchJob();
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }
  return (<>

    <JobPresentation job={job}/>

    </>);
};
