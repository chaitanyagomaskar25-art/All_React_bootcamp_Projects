import React from "react";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router";
import App from "../App";

const Main = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> <br />
        <br />
        <NavLink to="/favorites">favorites</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};


const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    HydrateFallback: () => <div>Loading app resources...</div>,   
    errorElement: <h1>Errorr...</h1>,
    children:[
        {
    index: true,
    element:<App />
  },
        {
    path: "/favorites",
    element: <h1>Favorites</h1>
  }
    ]
  },
  
]);

const AppLayout = () => {
  return (
      <RouterProvider router={route} />
  );
};

export default AppLayout;

