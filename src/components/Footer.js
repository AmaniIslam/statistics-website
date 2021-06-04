import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items-2">
            <h2>Pages</h2>
            <Link to="/">Home</Link>
            <Link to="/videos">Videos</Link>{" "}
            <Link to="/statistics">Statistics</Link>
            <Link to="/league-schedules">Schedules</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <a href="tel:201-587-7743">Tel: 201-587-7743</a>
            <a href="mailto: recreation@rochelleparknj.gov">
              Email: recreation@rochelleparknj.gov
            </a>
          </div>
          <div class="footer-link-items-3">
            <br></br>
            <br></br>
            <br></br>

            <a>
              Location:
              <br />
              151 W. Passaic Street
              <br />
              Rochelle Park, NJ 07662
            </a>
            <a>
              {" "}
              <br></br>
              rochelleparknj.gov/recreation-2/basketball
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
