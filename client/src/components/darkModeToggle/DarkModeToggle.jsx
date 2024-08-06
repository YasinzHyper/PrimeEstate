import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
// import "react-toggle/style.css"; // import the toggle style
import "./DarkModeToggle.scss";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a preferred theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const handleToggleChange = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div>
      <Toggle
        defaultChecked={isDarkMode}
        onChange={handleToggleChange}
        icons={{ checked: "🌜", unchecked: "🌞" }}
        aria-label="Dark mode toggle"
      />
    </div>
  );
};

export default DarkModeToggle;
