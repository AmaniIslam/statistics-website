import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>ROCHELLE PARK BASKETBALL</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/videos"
        >
          PLAYER
          <br />
          HIGHLIGHTS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/statistics"
        >
          STATS
          <br />
          LEADERBOARDS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/league-schedules"
        >
          LEAGUE
          <br />
          SCHEDULES
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
