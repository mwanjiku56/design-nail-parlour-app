import React from "react";
import { Link } from "react-router-dom";
import tribal from "../images/nailart.jpg";
import './Home.css'

function Home() {
  return (
    <div className="home-banner">
      <div className="home-banner-img">
        <img src={tribal} alt="Banner" />
      </div>
      <div className="home-banner-content">
        <h2>THE NAIL BEST PARLOUR IN THE CITY</h2>
        <p>
          Welcome to By Design Nail Parlour. This is the best nail parlour where you get all nail designs of your choice. This includes any custom design nail art which will be perfectly executed by our  Proffesional manicurist.
        </p>
        <Link to="/appointment">
          <button type="button">BOOK APPOINTMENT</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
