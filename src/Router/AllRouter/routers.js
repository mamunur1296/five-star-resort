import { createBrowserRouter } from "react-router-dom";
import Booking from "../../booking/Booking";
import LeftSideBar from "../../Pages/leftSideBar/LeftSideBar";
import Login from "../../Pages/LogIn/Login";
import Main from "../../Pages/MainContaint/Main";
import MainContainer from "../../Pages/MainContaint/MainContainer";
import Signin from "../../Pages/Signin/Signin";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Root from "../Roots/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <MainContainer></MainContainer>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signin></Signin>,
      },
      {
        path: "/catogory/:id",
        loader: ({ params }) => {
          return params.id;
        },
        element: <Main></Main>,
      },
      {
        path: "/booking",
        element: (
          <PrivateRouter>
            <Booking></Booking>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
