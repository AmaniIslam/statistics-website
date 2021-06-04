import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Sapp from "../Sapp";
import Tapp from "../Tapp";
import { Link } from "react-router-dom";
import Sheets from "../Sheets";

function Home() {
  return (
    <>
      <HeroSection />
      <h1>
        {" "}
        <Link to="/league-schedules" className="h-link">
          Schedules
        </Link>
      </h1>
      <Sapp /> <br /> <br />
      <h1>
        {" "}
        <Link to="/statistics" className="h-link">
          Statistics
        </Link>
      </h1>
      <Tapp />
      <Sheets />
    </>
  );
}

export default Home;
