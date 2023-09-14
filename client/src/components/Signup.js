import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import "./Signup.css";

function Signup({ onLogin }) {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: fname,
        password,
        email,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate("/login");
      } else {
        r.json().then((err) => {
          console.log(err);
        });
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card bg-light col-12">
          <article className="card-body mx-auto">
            <h4 className="card-title mt-3 text-center">Create Account</h4>
          </article>
          <form onSubmit={handleSubmit}>
            {/*=========================================================== */}
            <div className="form-group row">
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="firstName"
                  autoComplete="off"
                  className="form-control form-control-lg"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
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
                  Create Account
                </button>
                {/* <p className="text-center">OR</p> */}
                {/* <Link to="/login">
                  <button type="button" className="btn btn-primary">
                    Log In
                  </button>
                </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
