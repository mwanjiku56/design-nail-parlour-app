import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ onLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        navigate("/");
      });
  }, []);
}
export default Logout;
