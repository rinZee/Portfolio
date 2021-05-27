import React from "react";

import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../assets/resume.pdf";

export const Socials = () => (
  <div className="socials">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={"https://github.com/rinZee"}
    >
      <FontAwesomeIcon icon={["fab", "github"]} color="white" />
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href={"https://www.linkedin.com/in/tsheten/"}
    >
      <FontAwesomeIcon icon={["fab", "linkedin"]} color="white" />
    </a>

    <a target="_blank" rel="noopener noreferrer" href={resume}>
      <FontAwesomeIcon icon="file" color="white" />
    </a>
  </div>
);
