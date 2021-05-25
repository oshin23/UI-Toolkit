import React from "react";
import "./Button.css";
import Spinner from "./Spinner";

const Button = (props) => {
  const { children } = props;

  const disabled = {
    cursor: "not-allowed",
    pointerEvents: "none",
    color: "rgb(135 137 149)",
    borderColor: "#E6E8F0",
    background: "#e7e4e4"
  };
  const btn = {
    cursor: "pointer"
  };

  const loading = {
    padding: "0"
  };

  return (
    <button
      className={
        props.variant === "primary"
          ? "btn btn-primary"
          : props.variant === "secondary"
          ? "btn btn-secondary"
          : props.variant === "default"
          ? "btn btn-default"
          : "btn"
      }
      style={
        props.disabled
          ? disabled
          : props.isLoading
          ? { ...loading, ...disabled }
          : btn
      }
    >
      {props.isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
