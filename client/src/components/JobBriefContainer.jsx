import { Link, useNavigate } from "react-router-dom";
import icon1 from "../assets/icons/group.svg";
import icon2 from "../assets/icons/ruppee.svg";
const JobBriefContainer = ({
  user,
  logoUrl,
  jobPosition,
  monthlySalary,
  countryFlag,
  location,
  jobType,
  locationPreference,
  skillsRequired,
  createdBy,
  jobId,
}) => {
  const navigate = useNavigate();
  const isOwner = user?._id === createdBy;
  const handleDetailButtonClick = () => {
    navigate(`/details/${jobId}`);
  };
  return (
    <article>
      <div className="contOne">
        <img src={logoUrl} alt="logo" className="img logo-img" />
        <div className="company-brief">
          <p className="position">{jobPosition}</p>
          <ul>
            <li>
              <img src={icon1} alt="group" className="icon-img" />
              <span>11-50</span>
            </li>
            <li>
              <img src={icon2} alt="ruppee" className="icon-img currency-img" />
              <span>{monthlySalary}</span>
            </li>
            <li>
              <img src={countryFlag} alt="country flag" className="flag-img" />
              <span className="location">{location}</span>
            </li>
          </ul>
          <p className="job-type">
            <span>{jobType}</span>
            <span>{locationPreference}</span>
          </p>
        </div>
      </div>
      <div className="contTwo">
        <ul className="skills">
          {skillsRequired.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <div className="cta-btns">
          {user && isOwner && (
            <Link to={`/edit/${jobId}`} className="btn edit-btn">
              Edit
            </Link>
          )}
          <button
            type="button"
            className="btn detail-btn"
            onClick={handleDetailButtonClick}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobBriefContainer;
