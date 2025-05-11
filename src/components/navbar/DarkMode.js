import React, { useState, useEffect } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";
import './DarkMode.css'; 

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="position-relative">
      <img
        src={lightPng}
        alt="Switch to light mode"
        onClick={() =>
          setTheme((data) => (data === "dark" ? "light" : "dark"))
        }
        className={`img-fluid pointer position-absolute end-0 z-1 transition-all shadow-light ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        style={{ width: "48px" }}
      />

      <img
        src={darkPng}
        alt="Switch to dark mode"
        onClick={() =>
          setTheme((data) => (data === "dark" ? "light" : "dark"))
        }
        className="img-fluid pointer transition-all shadow-dark"
        style={{ width: "48px" }}
      />
    </div>
  );
};

export default DarkMode;
