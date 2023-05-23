import React from "react";
import { Link } from "react-router-dom";

const OurJourneyBar = () => {
  return (
    <>
      <div className="journey-barArea">
        <ul className="journey-ul journey-top">
          <li>
            <h3>
              <Link to="/point-of-sale">Point Of Sale</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to="/banking">Banking</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to="/gaming-apps">
                Gaming Apps
              </Link>
            </h3>
          </li>
        </ul>
        <ul className="journey-ul journey-bottom">
          <li>
            <h3>
              <Link to="/health-care">Health Care</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to="/business-intelligence">Business Intelligence</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to="/ecommerce">Ecommerce</Link>
            </h3>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OurJourneyBar;
