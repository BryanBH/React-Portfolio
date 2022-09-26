import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light pt-0">
      <div className="container-fluid ">
        <a className="navbar-brand " href="/#">
          BRYAN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsable-navbar"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsable-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
