import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button className="main-btn">
      <a href="">
        {props.name} {props.icon}
      </a>
    </button>
  );
};

export default Button;
