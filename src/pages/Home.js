import React from "react";
import "./Home.css";
import "../components/FortAwesomeIcons";

import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Socials } from "../components/Socials";

export default function Home() {
  return (
    <div className="Home">
      <div className="content">
        <h1>Hi, it’s Tsheten Sherpa</h1>
        <p>
          I’m a self-taught web developer based in Kathmandu, Nepal with passion
          for learning new web technologies.
        </p>
        <Link to="/projects">
          <Button>View Projects</Button>
        </Link>
        <Socials></Socials>
      </div>
      <div className="footer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          qui!
        </p>
      </div>
    </div>
  );
}
