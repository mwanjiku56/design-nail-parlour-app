import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <header>
       <div class='menubar'>
       <Link to='/' style={{ color: '#3aeaca', textDecoration: 'none' }}><h1>By design Nail Parlour</h1></Link>
       <nav>
          <ul>
            <li>
              <NavLink
                exact
                to='/'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/services'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/manicurist'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Manicurists
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contactus'
                exact
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link exact to="/Signup" id='menu-login-link'>
          <button type='button' id='menu-login-button'>
            Sign Up
          </button>
        </Link>
       </div>
    </header>
  )
}

export default Navbar
