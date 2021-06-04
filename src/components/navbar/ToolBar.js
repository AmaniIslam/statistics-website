import React from "react";
import Menu from "./Menu";
import "./ToolBar.css";
import rplion from "../rplion.jpg";

const ToolBar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div className="toolbar_logo">
        <a href="/">
          RP BASKETBALL <pre> </pre>
          <img src={rplion} alt="rplion" />
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/videos">Videos</a>
          </li>
          <li>
            <a href="/statistics">Statistics</a>
          </li>

          <li>
            <a href="/league-schedules">Schedules</a>
          </li>
        </ul>
      </div>
      <div className="toggle-btn">
        <Menu click={props.drawerToggleClickHandler} />
      </div>
    </nav>
  </header>
);

export default ToolBar;
