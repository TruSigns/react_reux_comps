import React from "react";
import { createContext, useState, useEffect } from "react";

// creating the context file PLEASE USE NAMING CONVENTION
const NaviContext = createContext();

// figuring what path the user is currently located
const directionPath = window.location.pathname;

// creating the function for the provider while passing in the child prop
function NaviProvider({ children }) {
  useEffect(() => {
    const handler = () => {
      setCurrentPath(directionPath);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  //useState
  const [currentPath, setCurrentPath] = useState(directionPath);

  // navigation function that will change the path where ever the user goes
  const navi = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);

    // const history = window.history.pushState({}, '', to);
    // setCurrentPath(history)
  };

  return (
    <NaviContext.Provider value={{ currentPath, navi }}>
      {children}
    </NaviContext.Provider>
  );
}

export { NaviProvider };
export default NaviContext;
