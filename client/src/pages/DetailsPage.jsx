import {
  Link,
  redirect,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import calender from "../assets/icons/calender.svg";
import money from "../assets/icons/money.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import Description from "../components/Description";
import Wrapper from "../assets/wrappers/DetailsPage";
dayjs.extend(relativeTime);
export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const { data } = await customFetch.get(`/jobs/${id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/");
  }
};
const DetailsPage = () => {
  const { user } = useOutletContext();
  const data = useLoaderData();
  const { job } = data;

  // let dateDiff = calculateDateDifference(job.createdAt);
  const isOwner = user?._id === job.createdBy;
  const tillNow = dayjs(job.createdAt).fromNow();
  console.log(tillNow);
  return (
    <Wrapper>
      <div className="container">
        <div className="head">
          <h4>
            {job.jobPosition} work from{" "}
            {job.locationPreference === "remote" ? "home" : "office"}{" "}
            {job.jobType.toLowerCase()} work at{" "}
            <span className="company">{job.companyName}</span>
          </h4>
        </div>
        <div className="body">
          <ul className="small-brief">
            <li className="created-time">{tillNow}</li>
            <li className="job-type">{job.jobType}</li>
            <li>
              <img
                src={job.logoUrl}
                alt="company logo"
                className="img logo-img"
              />
            </li>
            <li className="company">{job.companyName}</li>
          </ul>
          <div className="job-position-cont">
            <h3 className="job-position">{job.jobPosition}</h3>
            {isOwner && (
              <Link to={`/edit/${job._id}`} className="btn edit-btn">
                Edit job
              </Link>
            )}
          </div>
          <p className="location">
            <span>{job.location}</span>|<span>{job.country}</span>
          </p>
          <div className="salary-duration-cont">
            <p>
              <small className="svg-box">
                <img src={money} alt="calender" />
                Stipend
              </small>
              <small className="salary">{job.monthlySalary}</small>
            </p>
            <p>
              <small className="svg-box">
                <img src={calender} alt="calender" /> duration
              </small>
              <small className="duration">{job.jobDuration}</small>
            </p>
          </div>
          <div className="description-container">
            <Description title="About Company" detail={job.aboutCompany} />
            <Description
              title="About the  job/internship"
              detail={job.jobDescription}
            />
            <h5 className="skill-required">Skills required</h5>
            <ul className="skill-tags">
              {job.skillsRequired.map((item) => {
                return (
                  <li key={item} className="skill">
                    {item}
                  </li>
                );
              })}
            </ul>
            <Description
              title="Additional information"
              detail={job.information}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailsPage;
