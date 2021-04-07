import React from "react";
import PropTypes  from 'prop-types';

const Button = (props) => {
  return <button>{props.text}</button>;
};

Button.propTypes = {
  text: PropTypes.string
}

export default Button;
