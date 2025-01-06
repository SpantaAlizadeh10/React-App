import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemeToggler from "./ThemeToggler";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}

export default App;
