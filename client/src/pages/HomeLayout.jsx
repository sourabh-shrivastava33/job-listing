import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/HomeLayout";
import customFetch from "../utils/customFetch";
import { createContext, useContext } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return error;
  }
};
const HomeLayoutContext = createContext();
const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const data = useLoaderData();
  return (
    <HomeLayoutContext.Provider value={{ data }}>
      <Wrapper>
        <Header />
        {isLoading ? <Loading /> : <Outlet context={data} />}
      </Wrapper>
    </HomeLayoutContext.Provider>
  );
};

export const useHomeLayoutContext = () => {
  const context = useContext(HomeLayoutContext);
  if (!context)
    throw new Error("useHomeLayoutContext is used outside provider");
  return context;
};

export default HomeLayout;
