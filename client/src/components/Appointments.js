import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import "./Appointment.css";

function Appointments() {
  const [appoint, setAppoint] = useState([]);
  const [appointmentId, setAppointmentId] = useState("");
  /*const [nailDesign, setNailDesign] = useState("");
  const [date, setDate] = useState("");
  const [manicuristId, setManicuristId] = useState("");
  const [manicurists, setManicurists] = useState([]);
  const [errors, setErrors] = useState([]);
 
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
*/
  useEffect(() => {
    fetch("/appointments")
      .then((response) => response.json())
      .then((data) => setAppoint(data));
  }, []);

  function handleDelete(e) {
    e.preventDefault();
    console.log("==========>" + appointmentId);
    fetch("/appointments/" + appointmentId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      //window.location.reload(false);
    });
  }

  const handleDeletes = (index, e) => {
    e.preventDefault();
    console.log("==========>" + index);
    fetch("/appointments/" + index, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      window.location.reload(false);
    });
  };

  return (
    <div className="row">
      <div className="card bg-light col-12">
        <article className="card-body mx-auto">
          <h4 className="card-title mt-3 text-center">Appointment</h4>
        </article>

        <table className="table stripped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Date</th>
              <th scope="col">Nail Design</th>
              <th scope="col">Manicurist ID</th>
              <th scope="col">
                <Link to="/create-appointment">
                  <button type="submit" className="btn btn-success">
                    Book Appointment
                  </button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {appoint.length < 1 ? (
              <tr>
                <td colSpan="3">No Appointments Available</td>
              </tr>
            ) : (
              appoint.map((data) => (
                <tr key={data.id}>
                  <td key={data.id}>{data.id}</td>
                  <td>{data.date}</td>
                  <td>{data.nail_design}</td>
                  <td>{data.manicurist_id}</td>
                  <td>
                    {/*===========================================================*/}
                    <div className="row">
                      <div className="col-sm-6">
                        <Link to={`/update-appointment/${data.id}`}>
                          <button type="submit" className="btn btn-success">
                            Update Appointment
                          </button>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <button
                          className="btn btn-danger"
                          onClick={(e) => handleDeletes(data.id, e)}
                        >
                          Delete
                        </button>
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
