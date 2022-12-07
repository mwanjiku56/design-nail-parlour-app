import React, {useState} from "react";
import "./Signup.css";
import {Link} from "react-router-dom"


function Signup({onLogin}) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name:fname,
        last_name:lname,
        password,
        email,
        confirm_password: passwordConfirmation,
       
      }),
    })
    .then((r) => r.json())
      .then((data) => onLogin(data));
  }

  return (
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">
                  Sign Up
                </h2>

                <form onSubmit={handleSubmit}>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <label class="form-label" for="form3Example1cg">
                      First Name
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                    <label class="form-label" for="form3Example1cg">
                      Last Name
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label class="form-label" for="form3Example3cg">
                      Your Email
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={8}
                    />
                    <label class="form-label" for="form3Example4cg">
                      Password
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cdg"
                      class="form-control form-control-lg"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <label class="form-label" for="form3Example4cdg">
                      Confirm your password
                    </label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3cg"
                    />
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in{" "}
                      <a href="#!" class="text-body">
                        <u>Terms of service</u>
                      </a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Create Account
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Have an account already?{" "}
                    <a href="#!" class="fw-bold text-body">
                    <Link to='/login' id='create-acc'> Log In</Link>
                    </a>
                  </p>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
