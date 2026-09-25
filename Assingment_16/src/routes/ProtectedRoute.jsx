import React from "react";
import { useIsAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const isAuth = useIsAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export const IsLoggedIn = ()=>{
    const isAuth = useIsAuth();
    if(!isAuth){
        return <Outlet />
    }
    return <Navigate to="/movie" replace />
}