import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

// import "./Appointment.css";

function UpdateAppointment() {
  const { id } = useParams();
  const [customerId, setCustomerId] = useState("");
  const [appointment, setAppointment] = useState("");
  const [nailDesign, setNailDesign] = useState("");
  const [date, setDate] = useState("");
  const [manicuristId, setManicuristId] = useState("");
  const [manicurists, setManicurists] = useState([]);
  //const [errors, setErrors] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/session")
      .then((response) => response.json())
      .then((data) => setCustomerId(data.id))
      .catch((err) => {
        navigate("/login");
      });

    fetch("/appointments/" + id).then((r) => {
      if (r.ok) {
        r.json().then((appointment) => {
          setAppointment(appointment);
          setNailDesign(appointment.nail_design);
          setManicuristId(appointment.manicurist_id);
          setDate(appointment.date);
        });
      } else {
        r.json().then((err) => {});
      }
    });

    fetch("/manicurists")
      .then((response) => response.json())
      .then((data) => setManicurists(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (customerId == null) return <Login onLogin={customerId} />;

  function handleSubmit(e) {
    e.preventDefault();
    var url = "/appointments/" + id;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: customerId,
        nail_design: nailDesign,
        date: date,
        manicurist_id: manicuristId,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          navigate("/appointments");
        });
      } else {
        r.json().then((err) => {
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
            <h4 className="card-title mt-3 text-center">Update Appointment</h4>
          </article>
          {/*=========================================================== */}
          <form onSubmit={handleSubmit}>
            {/*=========================================================== */}
            <div className="row">
              <div className="col-sm-2">Date</div>
              <div className="col-sm-10">
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
            <div className="row">
              <div className="col-sm-2">Nail design</div>
              <div className="col-sm-10">
                <select
                  name="nailDesign"
                  className="form-control"
                  id="nailDesign"
                  value={nailDesign}
                  required="required"
                  onChange={(e) => setNailDesign(e.target.value)}
                >
                  <option key="Tribal design" value="Tribal design">
                    Tribal design
                  </option>
                  <option key="French detail" value="French detail">
                    French detail
                  </option>
                  <option key="Nude colour" value="Nude colour">
                    Nude colour
                  </option>
                  <option key="Stelleto design" value="Stelleto design">
                    Stelleto design
                  </option>
                  <option key="Cofffin Design" value="Cofffin Design">
                    Cofffin Design
                  </option>
                </select>
              </div>
            </div>
            {/*=========================================================== */}
            <div className="row">
              <div className="col-sm-2">Manicurist</div>
              <div className="col-sm-10">
                <select
                  name="manicuristId"
                  value={manicuristId}
                  className="form-control"
                  id="manicuristId"
                  required="required"
                  onChange={(e) => setManicuristId(e.target.value)}
                >
                  {manicurists.length < 1 ? (
                    <option>No Manicurist Found</option>
                  ) : (
                    manicurists.map((mani) => (
                      <option key={mani.id} value={mani.id}>
                        {mani.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
            {/*=========================================================== */}

            <div className="row">
              <div className="col-sm-11"></div>
              <div className="col-sm-1">
                <button type="submit" className="btn btn-primary">
                  Update
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
export default UpdateAppointment;
