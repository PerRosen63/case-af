import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../service/jobService";
import { IJob } from "../models/IJob";

export const Job = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<IJob | null>(null);

  useEffect(() => {
    const fetchJob = async () => {

      const jobs = await getJobs();
      const foundJob = jobs.find(job => job.id === id);
      setJob(foundJob || null);
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{job.occupation.label}</h2>
    </div>
  );
};
