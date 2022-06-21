import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
          <div className="container">
            <NavLink className="navbar-brand" exact to="/">
             EMS
            </NavLink>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
                
              </div>
            </div>
            <Link className="btn btn-outline-light" to="/employees/add">Add Employee</Link>
          </div>
        </nav>
     
    </>
  );
};

export default Navbar;
