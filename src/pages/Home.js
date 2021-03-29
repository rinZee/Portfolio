import React from "react";
import "./Home.css";
import "../components/FortAwesomeIcons";

import { Socials } from "../components/Socials";
import {Form} from "../components/Form"
import {Projects} from "../components/Projects";
import {Footer} from "../components/Footer";
export default function Home() {
  return (
    <div className="Home">
      <div className="content">
        <h1>Hi, it’s Tsheten Sherpa</h1>
        <p>
          I’m a self-taught web developer based in Kathmandu, Nepal with passion
          for developing web technologies.
        </p>
        
        <Socials />
        
      </div>
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}
