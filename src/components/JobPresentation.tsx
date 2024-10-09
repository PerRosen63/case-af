import { Link } from "react-router-dom";
import { IJob } from "../models/IJob";
import { JobContext } from "../contexts/JobContext";
import { useContext } from "react";
import { DigiList } from "@digi/arbetsformedlingen-react";
import { ListType } from "@digi/arbetsformedlingen";

interface IJobPresentation {
  job: IJob | null;
  detailMode?: boolean;
}

export const JobPresentation = ({ job, detailMode = false }: IJobPresentation) => {
  const { dispatch } = useContext(JobContext);

  if (!job) {
    return <div>No job data available</div>;
  }

  return (
    <div>
      <DigiList
        afListType={ListType.BULLET}>
        <li key={job.id}>
          {!detailMode && (
            <>
              <h3>
                <Link to={`/job/${job.id}`}>{job.occupation.label}</Link>
              </h3>
              <h4 style={{ display: "inline" }}>
                {job.employer.name},  {job.workplace_address.city 
                ? job.workplace_address.city 
                : job.workplace_address.municipality}
              </h4>
              <p>Publicerad: {job.publication_date}</p>
            </>
          )}
          {detailMode && (
            <>
              <h2>{job.occupation.label}</h2>
              <h4 style={{ display: "inline" }}>
                {job.employer.name},  {job.workplace_address.city 
                ? job.workplace_address.city 
                : job.workplace_address.municipality}
              </h4>
              <p>Publicerad: {job.publication_date}</p>
            </>
          )}
        </li>
      </DigiList>
    </div>
  );
}
