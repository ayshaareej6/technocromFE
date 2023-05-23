import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialLinks = ({ absoluteLinks = false, contactPage = false }) => {
  return (
    <>
      <ul className={"social-links " + (absoluteLinks ? "absolute-links" : "") + (contactPage ? "contactPageLinks" : "")}>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100089760781830" target="_blank" rel="noopener noreferrer" className="facebook-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Technocrom" target="_blank" rel="noopener noreferrer" className="twitter-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/87414564" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
