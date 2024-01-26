import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <>
      <Link to="/login" className="btn login-btn">
        Login
      </Link>
      <Link to="/register" className="btn register-btn">
        Register
      </Link>
    </>
  );
};

export default NavLinks;
