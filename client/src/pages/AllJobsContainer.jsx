import { useOutletContext } from "react-router-dom";
import { useLandingPageContext } from "./LandingPage";
import JobBriefContainer from "../components/JobBriefContainer";
import Wrapper from "../assets/wrappers/AllJobsContainer";
const AllJobsContainer = () => {
  const { data } = useLandingPageContext();
  const { user } = useOutletContext();
  const { jobs } = data;
  if (!jobs || jobs.length < 1) {
    return (
      <Wrapper>
        <h2 className="no-jobs">No jobs created....</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {jobs &&
        jobs.map((job) => {
          return (
            <JobBriefContainer
              key={job._id}
              user={user}
              logoUrl={job.logoUrl}
              jobPosition={job.jobPosition}
              monthlySalary={job.monthlySalary}
              countryFlag={job.countryFlag}
              location={job.location}
              jobType={job.jobType}
              locationPreference={job.locationPreference}
              skillsRequired={job.skillsRequired}
              createdBy={job.createdBy}
              jobId={job._id}
            />
          );
        })}
    </Wrapper>
  );
};
export default AllJobsContainer;
