import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Components
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

// Data
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = React.useState(employeeData);
  const [owners] = React.useState(ownerData);
  const [pets] = React.useState(petData);

  return (
    <Router>
      <div className="wrapper">
        <Nav />
        <Routes>
          <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/pets" element={<Navigate replace to="/pets/cats" />} />
          <Route path="/pets/cats" element={<PetsList pets={pets} kind="Cat" />} />
          <Route path="/pets/dogs" element={<PetsList pets={pets} kind="Dog" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
