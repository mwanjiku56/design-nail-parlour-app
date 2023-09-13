import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="sections">
      <footer className="footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="header text-uppercase fw-bold">NailPro Parlour</h6>
              <p className="text-muted">
                NailPro Parlour will help you find the most unique nail design.
                We keep you updated on all latest nail designs in Town.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="header text-uppercase fw-bold">Services</h6>
              <p>
                <a href="#!" className="text">
                  Manicure
                </a>
              </p>
              <p>
                <a href="#!" className="text">
                  Pedicure
                </a>
              </p>
              <p>
                <a href="#!" className="text">
                  Gel polish
                </a>
              </p>
              <p>
                <a href="#!" className="text">
                  Acrylics
                </a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="header text-uppercase fw-bold">Quick links</h6>
              <p>
                <a href="/" className="text">
                  Home
                </a>
              </p>
              <p>
                <a href="/appointments" className="text">
                  Book Appointment
                </a>
              </p>
              <p>
                <a href="/ourservices" className="text">
                  Our Services
                </a>
              </p>
              <p>
                <a href="/signup" className="text">
                  Signup
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="header text-uppercase fw-bold"> Contacts</h6>
              <p className="text-muted">
                <i className="fas fa-home mr-3 text-muted"></i> Westlands,
                Nairobi, Kenya
              </p>
              <p className="text-muted">
                <i className="fas fa-envelope mr-3 text-muted"></i>{" "}
                NailPro@example.com
              </p>
              <p className="text-muted">
                <i className="fas fa-phone mr-3 text-muted"></i> + 254 234 567
                883
              </p>
              <p className="text-muted">
                <i className="fas fa-print mr-3 text-muted"></i> + 254 234 567
                897
              </p>
            </div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  &copy;{new Date().getFullYear()}NailPro Parlour | All Rights
                  Reserved
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <a
                    href="https://www.facebook.com/"
                    className="text-muted me-4"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    className="text-muted me-4"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.google.com/" className="text-muted me-4">
                    <i className="fab fa-google"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="text-muted me-4"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="text-muted me-4"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.github.com/" className="text-muted me-4">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
