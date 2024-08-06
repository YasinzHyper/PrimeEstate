import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "./DarkModeToggle.scss";
import { useMediaQuery } from "react-responsive";

const DarkModeToggle = () => {
  const prefersDarkMode = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      setPreferredColorScheme(savedTheme);
    } else if (prefersDarkMode) {
      setIsDarkMode(true);
      setPreferredColorScheme("dark");
    }
  }, [prefersDarkMode]);

  const setPreferredColorScheme = (theme) => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches === false) {
        document.body.style.setProperty("color-scheme", "dark");
      }
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
        document.body.style.setProperty("color-scheme", "light");
      }
    }
  };

  const handleToggleChange = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setPreferredColorScheme(newMode ? "dark" : "light");
  };

  return (
    <Toggle
      defaultChecked={isDarkMode}
      onChange={handleToggleChange}
      icons={{ checked: "🌖", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};

export default DarkModeToggle;
