import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import Movie from "./components/Movie";
import { AuthContext } from "./context/AuthContext";
import { IsLoggedIn, ProtectedRoute } from "./routes/ProtectedRoute";
import Details from "./components/Details";
import "./App.css"
const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<IsLoggedIn />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="/movie" element={<ProtectedRoute />}>
            <Route index element={<Movie />} />
            <Route path='details' element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
