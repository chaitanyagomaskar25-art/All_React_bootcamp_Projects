import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export { ThemeContext, ThemeProvider };
