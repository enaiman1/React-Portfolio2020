import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      data__page={props.data__page}
      onClick={props.onClick}
      className="btn btn--white btn--animated"
    >
      {props.children}
    </button>
  );
};

export default Button;
