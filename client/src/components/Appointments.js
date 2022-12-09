import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Appointment.css";

function Appointments() {
  const [appoint, setAppoint] = useState([]);

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/appointments")
      .then((response) => response.json())
      .then((data) => setAppoint(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setSuccess(user);
          navigate("/appointment");
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
    <div className="row">
      <div className="card bg-light col-12">
        <article className="card-body mx-auto">
          <h4 className="card-title mt-3 text-center">Appointment</h4>
        </article>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Date</th>
              <th scope="col">Nail Design</th>
              <th scope="col">Manicurist ID</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {appoint.length < 1 ? (
              <tr>
                <td colSpan="3">No Appointments Available</td>
              </tr>
            ) : (
              appoint.map((data) => (
                <tr>
                  <td key={data.customer_id}>{data.id}</td>
                  <td>{data.date}</td>
                  <td>{data.nail_design}</td>
                  <td>{data.manicurist_id}</td>
                  <td>
                    {/*===========================================================*/}
                    <div className="row">
                      <div className="col-sm-6">
                        <form>
                          <input
                            type="hidden"
                            id="id"
                            value={data.id}
                            onChange={(e) => setId(e.target.value)}
                          />
                          <button type="submit" className="btn btn-success">
                            Update
                          </button>
                        </form>
                      </div>
                      <div className="col-sm-6">
                        <form>
                          <input
                            type="hidden"
                            id="id"
                            value={data.id}
                            onChange={(e) => setId(e.target.value)}
                          />
                          <button type="submit" className="btn btn-danger">
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointments;