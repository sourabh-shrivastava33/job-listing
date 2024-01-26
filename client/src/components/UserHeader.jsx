import React, { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import Loading from "./Loading";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const UserHeader = () => {
  const { data } = useHomeLayoutContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await customFetch.get("/auth/logout");
      toast.success("Logged out successfull");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
    }
  };
  useEffect(() => {
    // Check if user data is available
    if (data && data.user) {
      setLoading(false); // Set loading to false when user data is available
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  const { user } = data;

  let firstName = user && user.name ? user.name.split(" ")[0] : "";

  return (
    <div className="user-header">
      <button type="button" className="btn logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <p className="greet">
        Hello! <span>{firstName}</span>
      </p>
      {user && user.avatar ? (
        <img src={user.avatar} alt="user avatar" />
      ) : (
        <FaCircleUser />
      )}
    </div>
  );
};

export default UserHeader;
