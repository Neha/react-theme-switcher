import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useTheme = () => {
  return useContext(Context);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Context.Provider value={{ theme, handleTheme }}>
      {children}
    </Context.Provider>
  );
};
