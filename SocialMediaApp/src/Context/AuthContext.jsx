import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { headerObjectData } from "../helpers/headersObj";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState();

  const { data, isLoading, isFetching, isFetched, isError } = useQuery({
    queryFn: getLoggedInUserData,
    queryKey: ["loggedInUserData"],
    enabled: Boolean(token), // default value
  });

  async function getLoggedInUserData() {
    try {
      const data = await axios.get(
        `https://route-posts.routemisr.com/users/profile-data`,
        headerObjectData(),
      );
      setUserData(data.data.data.user);
      return data.data.data.user;
    } catch (err) {
      console.log(err, "error from AuthContext");
      throw err;
    }
  }

  useEffect(() => {
    if (token) {
      getLoggedInUserData();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, userData }}>
      {children}
    </AuthContext.Provider>
  );
}
