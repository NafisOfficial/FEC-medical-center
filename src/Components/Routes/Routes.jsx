import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Pages/Home/Login";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
  ]);