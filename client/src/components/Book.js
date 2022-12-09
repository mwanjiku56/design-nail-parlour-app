import React, { useEffect, useState } from "react";
import "./Appointment.css";

function Appointment() {
  const [appoint, setAppoint] = useState([]);

  useEffect(() => {
    fetch("/appointments")
      .then((response) => response.json())
      .then((data) => setAppoint(data));
  }, []);
  return (
    <div className="appointment-form">
      <h1>Book Appointment</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name" />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" value="" placeholder="Date" />
        <p>Nail design </p>
        <select name="design-selection" id="design-selection">
          <option value="Nailart1">Tribal design</option>
          <option value="Nailart2">French detail</option>
          <option value="Nailart3">Nude colour</option>
          <option value="Nailart4">Stelleto design</option>
          <option value="Nailart5">Cofffin Design</option>
        </select>
        <p>Manicurist </p>
        <select name="mani-selection" id="mani-selection">
          <option value="Mani1">Greg</option>
          <option value="Mani2">Mr.Guru</option>
          <option value="Mani3">Bob</option>
          <option value="Mani4">mellisa</option>
          <option value="Mani5">Mercy</option>
        </select>

        <button type="submit" className="btn btn-success">Book</button>
      </form>
    </div>
  );
}

export default Appointment;
