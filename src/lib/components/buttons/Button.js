import React from "react";
import "./Button.css";

const Button = (props) => {
  const { children } = props;

  return <button className="buttonComponent">{children.toUpperCase()}</button>;
};

export default Button;
