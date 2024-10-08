import { useEffect } from "react";
import { IJob } from "../models/IJob";
import { Link } from "react-router-dom";

interface IJobsPresentationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  jobs: IJob[]; // Pass the jobs as props
}

export const JobsPresentation = ({ currentPage, totalPages, onPageChange, jobs }: IJobsPresentationProps) => {

  //const { jobs } = useContext(JobContext);

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
                <h3><Link to={`/job/${job.id}`}>{job.occupation.label}</Link></h3>
                <h4 style={{ display: "inline" }}>
                  {job.employer.name},  {job.workplace_address.city 
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
