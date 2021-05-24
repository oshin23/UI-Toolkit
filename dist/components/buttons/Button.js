import React from "react";
import "./Button.css";

const Button = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement("button", {
    className: "buttonComponent"
  }, children.toUpperCase());
};

export default Button;