import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { Navigate } from "react-router-dom";

const AuthenticateRouteComponent = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  console.log("hello");
  useEffect(() => {
    async function checkUser() {
      const { data } = await customFetch.get("/users/current-user");
      return data;
    }
    const fetchUserData = async () => {
      const { user } = await checkUser();
      console.log(user);
      if (!user) {
        // Use await when setting state inside an asynchronous function
        setIsAuthenticated(false);
      }
    };

    // Call the async function
    fetchUserData();
  }, []);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default AuthenticateRouteComponent;
