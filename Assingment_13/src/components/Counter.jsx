import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Counter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const baseLayout = {
    margin: '0',
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease", 
    fontFamily: "sans-serif",
  };

  const themeStyles = {
    light: {
      ...baseLayout,
      backgroundColor: "#f0f2f5",
      color: "#1a1a1a",
    },
    dark: {
      ...baseLayout,
      backgroundColor: "#121212",
      color: "#ffffff",
    },
  };

  const buttonStyle = {
    padding: "10px 24px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    backgroundColor: theme === "light" ? "#333" : "#eee",
    color: theme === "light" ? "#fff" : "#000",
    marginBottom: "20px",
    transition: "transform 0.1s active",
  };

  return (
    <div style={themeStyles[theme]}>
      <button
        style={buttonStyle}
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <h1 style={{ maxWidth: "80%", textAlign: "center" }}>
        This is the first page of learning Context API 
      </h1>
    </div>
  );
};

export default Counter;