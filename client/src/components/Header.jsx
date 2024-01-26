import React from "react";
import { Link } from "react-router-dom";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import NavLinks from "./NavLinks";
import UserHeader from "./UserHeader";

const Header = () => {
  const {
    data: { user },
  } = useHomeLayoutContext();

  return (
    <header>
      <div className="nav-container">
        <Link to="/" className="logo">
          JobFinder
        </Link>
        <nav> {user === null ? <NavLinks /> : <UserHeader user={user} />}</nav>
      </div>
    </header>
  );
};

export default Header;
