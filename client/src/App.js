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
import Appointments from "./components/Appointments";
import Review from "./components/Review";
import CreateAppointment from "./components/CreateAppointment";
import UpdateAppointment from "./components/UpdateAppointment";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/ourservices" element={<OurServices />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
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
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
        <Routes>
          <Route path="/create-appointment" element={<CreateAppointment />} />
        </Routes>
        <Routes>
          <Route path="/review" element={<Review />} />
        </Routes>
        <Routes>
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Routes>
          <Route
            path="/update-appointment/:id"
            element={<UpdateAppointment />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
