import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import AppLayout from "./AppLayout";
import { getFav, getMovies } from "../apis/loaders/movieLoder";
import { addToFav } from "../apis/actions/movieAction";
import Favorites from "./favorites";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: App,
        loader: getMovies,
        action: addToFav
      },
      {
        path: "/favorites",
        Component: Favorites,
        loader: getFav
      },
    ],
  },
]);


const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
