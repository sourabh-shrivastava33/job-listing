import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {
  HomeLayout,
  LandingPage,
  Login,
  Register,
  EditJob,
  DetailsPage,
  Error,
  AddJob,
} from "./pages";
import { loader as HomeLayoutLoader } from "./pages/HomeLayout";
import { loader as LandingPageLoader } from "./pages/LandingPage";
import { loader as detailsPageLoader } from "./pages/DetailsPage";
import { loader as editPageLoader } from "./pages/EditJob";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";
import { action as editJobAction } from "./pages/EditJob";
import AuthenticateRouteComponent from "./components/AuthenticateRouteComponent";
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: "/",
    element: <HomeLayout />,
    loader: HomeLayoutLoader,
    errorElement: <Error />,
    children: [
      { index: true, element: <LandingPage />, loader: LandingPageLoader },

      {
        path: "details/:id",
        element: <DetailsPage />,
        loader: detailsPageLoader,
      },
    ],
  },
  {
    path: "/edit/:editId",
    errorElement: <Error />,
    element: <AuthenticateRouteComponent element={<EditJob />} />,
    loader: editPageLoader,
    action: editJobAction,
  },
  {
    path: "/create",
    errorElement: <Error />,
    element: <AuthenticateRouteComponent element={<AddJob />} />,
    action: addJobAction,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
