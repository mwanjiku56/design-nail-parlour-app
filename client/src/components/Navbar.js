// import React, { useEffect, useState } from "react";

// import { NavLink, Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <header>
//       <div className="menubar">
//         <Link to="/" style={{ color: "#3aeaca", textDecoration: "none" }}>
//           <h1>By design Nail Parlour</h1>
//         </Link>
//         <nav>
//           <ul>
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "link active" : "link"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/services"
//                 className={({ isActive }) =>
//                   isActive ? "link active" : "link"
//                 }
//               >
//                 {" "}
//                 Our Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/appointments"
//                 className={({ isActive }) =>
//                   isActive ? "link active" : "link"
//                 }
//               >
//                 Appointments
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/manicurist"
//                 className={({ isActive }) =>
//                   isActive ? "link active" : "link"
//                 }
//               >
//                 Manicurists
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contactus"
//                 className={({ isActive }) =>
//                   isActive ? "link active" : "link"
//                 }
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//         <Link to="/signup" id="menu-login-link">
//           <button type="button" id="menu-login-button">
//             Sign Up
//           </button>
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [State, setState] = useState(false);

  return (
    <>
      <nav>
        <Link to="/" style={{ color: "#3aeaca", textDecoration: "none" }}>
          <h1>NailPro</h1>
        </Link>
        <div>
          <ul
            className={State ? "nav-links-mobile" : "nav-links"}
            onClick={() => setState(false)}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>HOME</li>
            </Link>
            <Link to="/ourservices" style={{ textDecoration: "none" }}>
              <li> SERVICES</li>
            </Link>
            <Link to="/appointments" style={{ textDecoration: "none" }}>
              <li>BOOKING</li>
            </Link>
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <li>CONTACT US</li>
            </Link>

            <Link to="/signup" style={{ textDecoration: "none" }}>
              <li>SIGNUP</li>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li>LOGIN</li>
            </Link>
            <Link to="/logout" style={{ textDecoration: "none" }}>
              <li>LOG OUT</li>
            </Link>
          </ul>

          <button className="mobile-menu-icon" onClick={() => setState(!State)}>
            {State ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
