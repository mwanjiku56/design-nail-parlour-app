import React from "react";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Manicurist from "./components/Manicurist";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/manicurist" element={<Manicurist />} />
        </Routes>
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
        <Routes>
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Routes>
          <Route path="/review" element={<Review />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
