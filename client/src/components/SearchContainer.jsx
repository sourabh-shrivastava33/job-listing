/* eslint-disable no-debugger */
import { useEffect, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import techSkillsArray from "../utils/skills";
import { useLandingPageContext } from "../pages/LandingPage";
import SearchSkillsTag from "./SearchSkillsTag";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import Wrapper from "../assets/wrappers/SearchContainer";
const SearchContainer = () => {
  const { searchValues, data: jobsData } = useLandingPageContext();
  const { data } = useHomeLayoutContext();
  const { user } = data;

  const skillsSearchArray = searchValues?.skills?.split(",") || [];
  const [skills, setSkills] = useState(skillsSearchArray);
  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value === "any") return;
    if (skills.find((item) => item === e.target.value)) {
      return;
    }
    const newArray = [...skills, e.target.value];
    setSkills(newArray);
    const searchParams = new URLSearchParams(search);
    searchParams.set("skills", newArray);
    navigate(`${pathname}?${searchParams}`);
  };
  const handleDeleteSkills = (item) => {
    const filterArray = skills.filter((ele) => ele !== item);

    setSkills(filterArray);
    const searchParams = new URLSearchParams(search);
    if (filterArray.length === 1 && filterArray[0] === "") {
      searchParams.delete("skills");
      navigate(`${pathname}?${searchParams}`);
      return;
    }
    if (filterArray.length === 0) {
      searchParams.delete("skills");
      navigate(`${pathname}?${searchParams}`);
      return;
    }
    searchParams.set("skills", filterArray);
    navigate(`${pathname}?${searchParams}`);
  };
  return (
    <Wrapper>
      <Form>
        <div className="title-filter">
          <input
            type="text"
            name="position"
            placeholder="Search title..."
            defaultValue={searchValues.position}
          />
        </div>
        <div className="skill-filter">
          <select
            className="skills"
            onChange={handleChange}
            value={skills.length >= 1 ? skills[skills.length - 1] : ""}
          >
            {["", ...jobsData.allSkills].map((item) => {
              if (item === "")
                return (
                  <option key="any" value="any">
                    Please filter skills
                  </option>
                );
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {skills.length > 0 && (
            <ul className="tags">
              {skills.map((item) => {
                if (item === "any") {
                  return null;
                }
                return (
                  <SearchSkillsTag
                    key={item}
                    item={item}
                    deleteskills={handleDeleteSkills}
                  />
                );
              })}
            </ul>
          )}
          <div className="cta-btns">
            <button
              type="button"
              onClick={() => {
                if (!searchValues.position && !searchValues.skills) return;
                navigate("/");
              }}
              className="clear"
            >
              Clear
            </button>
            {user && (
              <Link to="/create" className="btn">
                Add Jobs +
              </Link>
            )}
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
