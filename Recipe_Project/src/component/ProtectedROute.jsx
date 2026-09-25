import { Navigate, Outlet } from "react-router";
import { useIsAuth } from "../context/AuthContext";
import Login from "./Login";

export const ProtectedRoute = () => {
  const isAuth = useIsAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
