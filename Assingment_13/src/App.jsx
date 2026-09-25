import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Counter from "./components/Counter";
const App = () => {
  return (
    <ThemeProvider>
      <Counter />
    </ThemeProvider>
  );
};

export default App;
