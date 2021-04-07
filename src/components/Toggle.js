import React from "react";
import { useTheme } from "./Context";

const Toggle = () => {
  const { theme, handleTheme } = useTheme();
  return <button onClick={handleTheme}>{theme}</button>;
};
export default Toggle;
