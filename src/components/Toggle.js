import React from "react";
import PropTypes  from 'prop-types';

const Toggle = (props) => {
  return <button onClick={() => props.themeChange()}>{props.text}</button>;
};

Toggle.propTypes = {
  text: PropTypes.string
}

export default Toggle;
