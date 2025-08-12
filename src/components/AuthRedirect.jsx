// components/AuthRedirect.jsx
import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/context/auth";

export default function AuthRedirect({ toIfAuth, toIfGuest }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to={toIfAuth} replace />;
  }
  return <Navigate to={toIfGuest} replace />;
}
