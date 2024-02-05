import React from "react";
import cross from "../assets/icons/cross.svg";
const SearchSkillsTag = ({ item, deleteskills }) => {
  if (!item) return null;
  return (
    <li>
      <span>{item}</span>
      <span className="cross" onClick={() => deleteskills(item)}>
        <img src={cross} alt="cross" />
      </span>
    </li>
  );
};

export default SearchSkillsTag;
