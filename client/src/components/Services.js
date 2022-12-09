import React from "react";
import "./Services.css";
import tribal from "../images/nail_art.webp";
import almond from "../images/almond1.png";
import stilleto from "../images/stilleto.jpg";
import coffin from "../images/coffin1.webp";
import natural from "../images/narutal.jpeg";
import colourful from "../images/ColorfulTribal.webp";
import french from "../images/french-tips.jpg";

function Services() {
  return (
    <>
      <h1 id="title">Nail Designs</h1>
      <div className="services">
        <div className="card">
          <img src={tribal} alt="nail" />
          <h4>Tribal design</h4>
          <h4>Done by Greg</h4>
          <h4>Price: $ 200</h4>
        </div>
      </div>
      <div className="services">
        <div className="card">
          <img src={almond} alt="nail" />
          <h4>Almond design</h4>
          <h4>Done by triza</h4>
          <h4>Price: $ 150</h4>
        </div>
      </div>
      <div className="services">
        <div className="card">
          <img src={stilleto} alt="nail" />
          <h4>Stilleto design</h4>
          <h4>Done by mellisa</h4>
          <h4>Price: $ 200</h4>
        </div>
      </div>
      <div className="services">
        <div className="card">
          <img src={french} alt="nail" />
          <h4>french tips design</h4>
          <h4>Done by bob</h4>
          <h4>Price: $ 200</h4>
        </div>
      </div>
      <div className="services">
        <div className="card">
          <img src={coffin} alt="nail" />
          <h4>Coffin design</h4>
          <h4>Done by Greg</h4>
          <h4>Price: $ 250</h4>
        </div>
      </div>
      <div className="services">
        <div className="card">
          <img src={natural} alt="nail" />
          <h4>natural nails design</h4>
          <h4>Done by Triza</h4>
          <h4>Price: $ 100</h4>
        </div>
      </div>
      <div className="services">
        <div className="card">
          <img src={colourful} alt="nail" />
          <h4>ColorfulTribal design</h4>
          <h4>Done by Bob</h4>
          <h4>Price: $ 250</h4>
        </div>
      </div>
    </>
  );
}

export default Services;
