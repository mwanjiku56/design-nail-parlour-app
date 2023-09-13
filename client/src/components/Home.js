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
            <h3>About NailPro</h3>
            <p>
              NailPro is a beauty spa that helps your nails remain glammed in
              Nairobi County. <br />
              We pride ourselves in being an all round company that gives you
              the best experience.We look forward to serving people from all
              walks of life.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/id/1358219358/photo/woman-entrepreneur-at-seminar-giving-presentation.jpg?b=1&s=170667a&w=0&k=20&c=vjZ4nVfRDVx9v8riD6d5D4RkBCs1D36Cyn3RXPvkPeE="
                alt="Banner"
              />
              <div class="card-body">
                <h5 class="card-title">Technology</h5>
                <p className="card-text ">
                  Tech is the future! At Eventify we hook you up with all tech
                  related events such as Hackathons.We give you all the
                  information that helps you prepare for tech events. We ensure
                  that we give best prices for anyone attending our events.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/id/1358219358/photo/woman-entrepreneur-at-seminar-giving-presentation.jpg?b=1&s=170667a&w=0&k=20&c=vjZ4nVfRDVx9v8riD6d5D4RkBCs1D36Cyn3RXPvkPeE="
                alt="Banner"
              />
              <div className="card-body">
                <h5 className="card-title">Business</h5>
                <p className="card-text ">
                  Business? We got you! Eventify helps you sell your business,
                  in business events. We ensure to hook you up with the best
                  where you can get investors This gives you a networking
                  platform as well as marketing. Sell your business and network!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/id/1358219358/photo/woman-entrepreneur-at-seminar-giving-presentation.jpg?b=1&s=170667a&w=0&k=20&c=vjZ4nVfRDVx9v8riD6d5D4RkBCs1D36Cyn3RXPvkPeE="
                alt="Banner"
              />
              <div className="card-body">
                <h5 className="card-title">Music</h5>
                <p className="card-text ">
                  Eventify ensures that you are updated on all your best
                  artist's performances. We make sure that all the music event
                  all around the year are on our app. This includes making
                  tickets timely so you dont miss out. You are welcome.
                </p>
              </div>
            </div>
          </div>
          <div className="port">
            <h3>Our Work Portfolio</h3>
            <p>
              Our portfolio and experiences are vast. However, one fact remains
              true for all our events creating a perfect experience for your
              guests is our top priority. Whatever your event requirements,
              budget or location, Eventify guarantees maximum engagement and an
              unforgettable guest experience.
            </p>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Meetings</li>
                  <li>Hybrid & Virtual Events</li>
                  <li>Private Dining</li>
                  <li>Drinks Receptions</li>
                  <li>Graduation parties</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Christmas & Seasonal Parties</li>
                  <li>Awards Ceremonies</li>
                  <li>Team Building</li>
                  <li>Exhibitions</li>
                  <li>Networking Events</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Wellness Occasions</li>
                  <li>Corporate Hospitality</li>
                  <li>Training Sessions</li>
                  <li>Launch Events</li>
                  <li>Private Functions</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-4">
                <ul>
                  <li>Event coordination</li>
                  <li>Event reporting </li>
                  <li>Guest management</li>
                  <li>Events Ticketing</li>
                  <li>Event rehearsal</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
