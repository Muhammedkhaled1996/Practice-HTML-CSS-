import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthPosts({ children }) {
  if (localStorage.getItem("token") == null) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
