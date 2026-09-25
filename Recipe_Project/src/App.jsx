import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./App.css";
import Login from "./component/Login";
import { AuthProvider } from "./context/AuthContext";
import Fav from "./component/Fav";
import Home from "./component/Home";
import { ProtectedRoute } from "./component/ProtectedROute";
import Details from "./component/Details";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> <br /> <br />
          <Link to="/fav">Fav</Link> <br /> <br />
          <Link to="/login">Log in</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />}/>
          <Route path="/fav" element={<ProtectedRoute />}>
            <Route index element={<Fav />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
