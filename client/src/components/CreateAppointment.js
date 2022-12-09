import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

// import "./Appointment.css";

function CreateAppointment() {
  const [customerId, setCustomerId] = useState("");
  const [nailDesign, setNailDesign] = useState("");
  const [date, setDate] = useState("");
  const [manicuristId, setManicuristId] = useState("");
  const [manicurists, setManicurists] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/customer-session-id").then((r) => {
      if (r.ok) {
        r.json().then((customerId) => setCustomerId(customerId));
      }
    });

    console.log(customerId);
    fetch("/manicurists")
      .then((response) => response.json())
      .then((data) => setManicurists(data));
  }, []);

  if (!customerId) return <Login onLogin={customerId} />;

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: customerId,
        nail_design: nailDesign,
        date,
        manicurist_id: manicuristId,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setSuccess(user);
          navigate("/appointments");
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          console.log(err);
        });
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="card bg-light col-12">
          <article className="card-body mx-auto">
            <h4 className="card-title mt-3 text-center">Create Appointment</h4>
          </article>
          {/*=========================================================== */}
          <form onSubmit={handleSubmit}>
            {/*=========================================================== */}
            <div class="row">
              <div class="col-sm-2">Date</div>
              <div class="col-sm-10">
                <input
                  type="date"
                  id="date"
                  autoComplete="off"
                  className="form-control form-control-lg"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            {/*=========================================================== */}
            <div class="row">
              <div class="col-sm-2">Nail design</div>
              <div class="col-sm-10">
                <select
                  name="nailDesign"
                  className="form-control"
                  id="nailDesign"
                  value={nailDesign}
                  onChange={(e) => setNailDesign(e.target.value)}
                >
                  {manicurists.length < 1 ? (
                    <option>No Manicurist Found</option>
                  ) : (
                    manicurists.map((mani) => (
                      <option value="{mani.id}">{mani.name}</option>
                    ))
                  )}
                </select>
              </div>
            </div>
            {/*=========================================================== */}
            <div class="row">
              <div class="col-sm-2">Manicurist</div>
              <div class="col-sm-10">
                <select
                  name="manicuristId"
                  className="form-control"
                  id="manicuristId"
                  value={manicuristId}
                  onChange={(e) => setManicuristId(e.target.value)}
                >
                  {manicurists.length < 1 ? (
                    <option>No Manicurist Found</option>
                  ) : (
                    manicurists.map((mani) => (
                      <option value="{mani.id}">{mani.name}</option>
                    ))
                  )}
                </select>
              </div>
            </div>
            {/*=========================================================== */}

            <div class="row">
              <div class="col-sm-11"></div>
              <div class="col-sm-1">
                <button type="submit" class="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </form>
          {/*=========================================================== */}
        </div>
      </div>
    </div>
  );
}
export default CreateAppointment;
