import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [DataUser, setDataUser] = useState({});

  const GetDataLocal = () => {
    try {
      const DataUser = JSON.parse(localStorage.getItem("token"));
      if (DataUser) {
        setDataUser(DataUser.user);
        console.log('Si señor--',DataUser)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetDataLocal()
  }, [])
  
  return (
    <AppContext.Provider value={{ DataUser, setDataUser, GetDataLocal }}>
      {children}
    </AppContext.Provider>
  );
};
