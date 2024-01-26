import React, { createContext, useContext } from "react";
import SearchContainer from "../components/SearchContainer";
import AllJobsContainer from "./AllJobsContainer";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/jobs", {
      params,
    });

    return { data, searchValues: params };
  } catch (error) {
    console.log(error);
    return error;
  }
};
const LandingPageContext = createContext();
const LandingPage = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <Wrapper className="container">
      <LandingPageContext.Provider value={{ data, searchValues }}>
        <SearchContainer />
        <AllJobsContainer />
      </LandingPageContext.Provider>
    </Wrapper>
  );
};
export const useLandingPageContext = () => {
  const context = useContext(LandingPageContext);
  if (!context)
    throw new Error("useLandingPageContext is used outside provider");
  return context;
};

export default LandingPage;
