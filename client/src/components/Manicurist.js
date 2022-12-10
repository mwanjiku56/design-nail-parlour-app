import React, { useState, useEffect } from "react";

function Manicurist() {
  const [manicurists, setManicurists] = useState([]);

  useEffect(() => {
    fetch("/manicurists")
      .then((response) => response.json())
      .then((data) => setManicurists(data));
  }, []);
  return (
    <div className="row">
      <div className="card bg-light col-11">
        <article className="card-body mx-auto">
          <h4 className="card-title mt-3 text-center">Best Manicurist Team</h4>
        </article>
        
        <table className="table stripped">
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
              manicurists.map((manicurist) => (
                <tr>
                  <td key={manicurist.id}>{manicurist.id}</td>
                  <td>{manicurist.name}</td>
                  <td>{manicurist.job_title}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manicurist;
