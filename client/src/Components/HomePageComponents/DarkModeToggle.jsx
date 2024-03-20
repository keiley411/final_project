import React, { useState } from "react";
import { useEffect } from "react";
import { changeColorScheme, retriveTheme } from "./index.js";
import SunIcon from "../IconComponent/SunIcon";
import MoonIcon from "../IconComponent/MoonIcon";
import "./DarkMode.scss"
const DarkModeToggle = () => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    // selects the theme to be changed to
    const theme = !state ? "dark" : "light";
    changeColorScheme(theme).then(() => {
      setState(theme === "dark");
    });
  };

  useEffect(() => {
    retriveTheme().then((theme) => {
      setState(state === "dark");
    });
  }, []);

  return (
    <>
      <button className="dark-mode" onClick={handleClick}>
        {state ? (
          <SunIcon width={20} height={20} />
        ) : (
          <MoonIcon width={20} height={20} />
        )}
      </button>
    </>
  );
};

export default DarkModeToggle;