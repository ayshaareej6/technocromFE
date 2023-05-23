import {
  faAdd,
  faBook,
  faBookSkull,
  faComment,
  faHome,
  faList,
  faUserTie,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../assets/images/logo-white.svg";
import { MainContext } from "../../context";

const SideMenu = () => {
  const context = useContext(MainContext);
  return (
    <>
      <div className="dashboard-SideMenu">
        <div className="dashboard-logo">
          <Link to="/">
            <WebsiteLogo />
          </Link>
        </div>
        <div className="dashboard-menu">
          <ul>
            <li>
              <Link to="/admin">
                <FontAwesomeIcon icon={faHome} />
                Dashboard
              </Link>
            </li>
          </ul>
          {context.state.userData.userType === "admin" ? (
            <>
              <h3>Case Studies & Stories</h3>
              <ul>
                <li>
                  <Link to="/admin/case-study-list">
                    <FontAwesomeIcon icon={faBook} />
                    Case Studies List
                  </Link>
                </li>
                <li>
                  <Link to="/admin/add-case-study">
                    <FontAwesomeIcon icon={faAdd} />
                    Add Case Studies
                  </Link>
                </li>
              </ul>
              <h3>Blogs</h3>
              <ul>
                <li>
                  <Link to="/admin/blog-category">
                    <FontAwesomeIcon icon={faList} />
                    Blogs Category
                  </Link>
                </li>
                <li>
                  <Link to="/admin/add-blog-category">
                    <FontAwesomeIcon icon={faAdd} />
                    Add Blog Category
                  </Link>
                </li>
                <li>
                  <Link to="/admin/blog-list">
                    <FontAwesomeIcon icon={faBookSkull} />
                    Blogs List
                  </Link>
                </li>
                <li>
                  <Link to="/admin/add-blog">
                    <FontAwesomeIcon icon={faAdd} />
                    Add Blog
                  </Link>
                </li>
              </ul>
              <h3>Jobs</h3>
              <ul>
                <li>
                  <Link to="/admin/job-list">
                    <FontAwesomeIcon icon={faUserTie} />
                    Jobs List
                  </Link>
                </li>
                <li>
                  <Link to="/admin/application-list">
                    <FontAwesomeIcon icon={faUserTimes} />
                    Applications List
                  </Link>
                </li>
                <li>
                  <Link to="/admin/add-job">
                    <FontAwesomeIcon icon={faAdd} />
                    Add Jobs
                  </Link>
                </li>
              </ul>
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link to="/admin/contact-queries">
                    <FontAwesomeIcon icon={faComment} />
                    Queries List
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            
            <>
              <h3>Jobs</h3>
              <ul>
                <li>
                  <Link to="/admin/user-applications">
                    <FontAwesomeIcon icon={faUserTimes} />
                    Applications List
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="dashboard-logoutArea">
          <Link
            to="/admin/"
            onClick={(e) => {
              e.preventDefault();
              context.SignOut();
            }}
          >
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
