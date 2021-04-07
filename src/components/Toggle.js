import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "./Context";

const Toggle = () => {
  const { theme, handleTheme } = useTheme();
  return <button onClick={handleTheme}>{theme}</button>;
};

Toggle.propTypes = {
  text: PropTypes.string,
};

export default Toggle;
