import { React, createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(false);
  return (
    <authContext.Provider value={{ isLoged, setIsLoged }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;
