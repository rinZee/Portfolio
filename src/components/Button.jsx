import React from "react";
import "./Button.css";
export const Button = (props) => (
  <button className={"btn"}>{props.children}</button>
);
