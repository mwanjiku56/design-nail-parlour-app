import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
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
    }).then((r) => r.json())
    .then(onLogin);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="card bg-light col-12">
          <article className="card-body mx-auto">
            <h4 className="card-title mt-3 text-center">Login</h4>
          </article>
          <form onSubmit={handleSubmit}>
            {/*=========================================================== */}
            <div className="form-group row">
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/*===========================================================*/}
            {/*=========================================================== */}
            <div className="form-group row">
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {/*===========================================================*/}
            <div className="row">
              <div className="col-sm-10"></div>
              <div className="col-sm-2">
                <button type="submit" className="btn btn-primary">
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
