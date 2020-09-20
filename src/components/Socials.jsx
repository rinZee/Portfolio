import React from "react";

import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Socials = () => (
  <div>
    <a href={"https://github.com/rinZee"}>
      <FontAwesomeIcon icon={["fab", "github"]} />
    </a>
    <a href={"https://codepen.io/renjisherpa"}>
      <FontAwesomeIcon icon={["fab", "codepen"]} />
    </a>
  </div>
);
