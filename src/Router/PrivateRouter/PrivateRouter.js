import React, { useContext } from "react";
import { Navigate, redirect, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const PrivateRouter = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation();
  if (loder) {
    return <p>looding.....</p>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} redirect></Navigate>;
};

export default PrivateRouter;
