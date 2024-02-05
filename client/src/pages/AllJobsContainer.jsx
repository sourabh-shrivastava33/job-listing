import { useOutletContext } from "react-router-dom";
import { useLandingPageContext } from "./LandingPage";
import JobBriefContainer from "../components/JobBriefContainer";
import Wrapper from "../assets/wrappers/AllJobsContainer";
const AllJobsContainer = () => {
  const { data } = useLandingPageContext();
  const { user } = useOutletContext();
  console.log(data);
  const { jobs } = data;
  console.log(jobs);
  if (!jobs || jobs.length < 1) {
    console.log("hello");
    return (
      <Wrapper>
        <h2 className="no-jobs">No jobs created....</h2>
      </Wrapper>
    );
  } else
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
                companySize={job.companySize}
                skillsRequired={job.skillsRequired}
                createdBy={job.createdBy}
                jobId={job._id}
                comments={job.comments}
              />
            );
          })}
      </Wrapper>
    );
};
export default AllJobsContainer;
