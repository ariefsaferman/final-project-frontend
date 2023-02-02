import React from "react";
import "./index.scss";
import SearchIcon from "@mui/icons-material/Search";
import GlobeIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          DigiLodge
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="search-bar">
                <div className="search-bar-text">Anywhere</div>
                <div className="search-bar-text">Any week</div>
                <div className="search-bar-text-2">Add guests</div>
                <div className="search-icon">
                  <SearchIcon />
                </div>
              </button  >
            </li>
          </ul>

          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <MenuIcon></MenuIcon>
                <PersonIcon></PersonIcon>
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link to={"/login"} className="dropdown-item">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/register"} className="dropdown-item">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <Link to={""} className="dropdown-item">
                    Airbnb Your Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={""} className="dropdown-item">
                    Host an Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={""} className="dropdown-item">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
