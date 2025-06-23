import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
//   console.log(location.pathname)

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
