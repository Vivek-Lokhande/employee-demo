import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import AddEmpolyee from "./Components/Employees/AddEmployee";
import EditEmployee from "./Components/Employees/EditEmpolyee";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/employees/add" element={<AddEmpolyee/>} />
          <Route path="/employees/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
