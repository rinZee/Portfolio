import React from "react";

import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Socials = () => (
  <div className="socials">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={"https://github.com/rinZee"}
    >
      <FontAwesomeIcon icon={["fab", "github"]} color='white' />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={"https://codepen.io/renjisherpa"}
    >
      <FontAwesomeIcon icon={["fab", "codepen"]} color='white' />
    </a>

  
    
  </div>
);
