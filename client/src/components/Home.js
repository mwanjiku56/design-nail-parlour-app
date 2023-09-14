import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import tribal from "../images/nailart.jpg";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
  // return (
  //   <div className="home-banner">
  //     <div className="home-banner-img">
  //       <img src={tribal} alt="Banner" />
  //     </div>
  //     <div className="home-banner-content">
  //       <h2>THE NAIL BEST PARLOUR IN THE CITY</h2>
  //       <p>
  //         Welcome to By Design Nail Parlour. This is the best nail parlour where you get all nail designs of your choice. This includes any custom design nail art which will be perfectly executed by our  Proffesional manicurist.
  //       </p>
  //       <Link to="/appointments">
  //         <button type="button">BOOK APPOINTMENT</button>
  //       </Link>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <div className="Home">
        <div className="home-header">
          <h1>
            DISCOVER THE TRUSTED NAIL SPA THAT WILL EXCEED YOUR EXPECTATIONS.
          </h1>
          <h2>Keep calm we glam your nails.</h2>

          <div className="link-btn">
            <button
              onClick={() => {
                navigate("/appointments");
              }}
              type="button"
            >
              Make a booking
            </button>
          </div>
        </div>
      </div>
      <div className="container grey">
        <div className="row">
          <div className="col-md-12">
            <h3>About Us</h3>
            <p>
              NailPro is a beauty spa that helps your nails remain glammed in
              Nairobi County. <br />
              We pride ourselves in being an all round company that gives you
              the best experience.We look forward to serving people from all
              walks of life.
            </p>
          </div>

          <div className="cards">
            <img
              className="card-img-top"
              src="https://img.freepik.com/free-vector/woman-pedicure-salon-nails-care-procedure_33099-1904.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.2.704823238.1693896145&semt=ais"
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title">Exquisute space</h4>
              {/* <p className="card-text ">
                Experience a dedicated end-to-end service. Offering the best
                event management within the city, get tickets and get to attend
                events considered highly in the market{" "}
              </p> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="port">
            <h3>Our Work Portfolio</h3>
            <p>
              Our portfolio and experiences are vast. However, one fact remains
              true for all our services creating a perfect experience for you is
              our top priority. Whatever your nail needs, budget we got you.
              NailPro guarantees maximum engagement and an unforgettable client
              experiences. You will love our services
            </p>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Basic Manicure </li>
                  <li>Gel Manicure</li>
                  <li>Basic pedicure</li>
                  <li>Gel pedicure</li>
                  <li>Cuticle Care</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Nail Trim & Shape</li>
                  <li>Paraffin Treatment</li>
                  <li>Sugar Scrub</li>
                  <li>Foot Scrub</li>
                  <li>Callus Treatment</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Acrylic Fill</li>
                  <li>Acrylic Overlay</li>
                  <li>Color Powder Fill</li>
                  <li>Valentino Fill</li>
                  <li>Hard Gel Full Set Tips</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Custom Design</li>
                  <li>Deep French </li>
                  <li>Gel Ombre </li>
                  <li>Chrome, Hologram</li>
                  <li>Light Elegance Rock Star Glitter</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3"></div>
            <img
              className="card-img-top"
              src="https://img.freepik.com/free-photo/hands-with-beautiful-nails_23-2149936852.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.1.704823238.1693896145&semt=ais"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
