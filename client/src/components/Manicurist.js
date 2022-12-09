import React, { useState, useEffect } from "react";

function Manicurist() {
  const [manicurists, setManicurists] = useState([]);

  useEffect(() => {
    fetch("/manicurists")
      .then((response) => response.json())
      .then((data) => setManicurists(data));
  }, []);
  return (
    <div className="trainers-container">
      <h1 className="trainers-heading">Best Manicurist Team</h1>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Job Title</th>
          </tr>
        </thead>
        <tbody>
          {manicurists.length < 1 ? (
            <tr>
              <td colSpan="3">No Manicurist Available</td>
            </tr>
          ) : (
            manicurists.map((mani) => (
              <tr>
                <td key={mani.id}>{mani.id}</td>
                <td>{mani.name}</td>
                <td>{mani.job_title}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Manicurist;
