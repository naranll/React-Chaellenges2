import React, { createContext, useContext, useEffect, useState } from "react";

//1. theme context
const ThemeContext = createContext(null);

//2. useTheme custom hook
export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
}

//3. export ThemeContextProvider component
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
