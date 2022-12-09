import React, { useEffect, useState } from "react";

import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [customerId, setCustomerId] = useState("");

  useEffect(() => {
    fetch("/customer-session-id").then((r) => {
      if (r.ok) {
        r.json().then((customerId) => setCustomerId(customerId));
      }
    });
  }, []);

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
        {customerId != null ? (
          <Link to="/signup" id="menu-login-link">
            <button type="button" id="menu-login-button">
              Sign Up
            </button>
          </Link>
        ) : (
          <Link to="/logout" id="menu-login-link">
            <button type="button" id="menu-login-button">
              Logout
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
