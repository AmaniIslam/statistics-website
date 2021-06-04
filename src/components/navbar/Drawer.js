import React from "react";
import "./Drawer.css";

const Drawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
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
    </nav>
  );
};
export default Drawer;
