import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="menubar">
        <Link to="/" style={{ color: "#3aeaca", textDecoration: "none" }}>
          <h1>By design Nail Parlour</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {" "}
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manicurist"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Manicurists
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/signup" id="menu-login-link">
          <button type="button" id="menu-login-button">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
