import React from "react";
import "./style.css";
import useLightDark from "./useLightDark";

const LightDarkMode = () => {
  const [theme, setTheme] = useLightDark("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
 
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello World !</h1>
        <button onClick={() => handleToggleTheme()}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
