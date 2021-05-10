import React from "react";
import { Link } from "react-router-dom";

import Schedule from "./Schedule";
import "./Calendar.css";

class Sapp extends React.Component {
  render() {
    return (
      <div className="googleCalendar">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%236d0005&amp;ctz=America%2FNew_York&amp;src=YmI5NzdzYW84Z21pajRqbDZramYzM3Rka29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23C0CA33&amp;showPrint=1&amp;showCalendars=0&amp;showTz=0&amp;showNav=1&amp;showTitle=0"></iframe>{" "}
      </div>
    );
  }
}

export default Sapp;
