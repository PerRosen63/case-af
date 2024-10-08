import { IJob } from "../models/IJob";

interface IJobPresentationProps {
  job: IJob | null;
}

export const JobPresentation = ({ job }: IJobPresentationProps) => {

  if (!job) {
    return <div>No job data available</div>;
  }
  return (
    <div>
      <ul>
        <li key={job.id}>
          <h2>{job.id}</h2>
          <h2>{job.occupation.label}</h2>
        </li>
      </ul>
    </div>
  );
};
