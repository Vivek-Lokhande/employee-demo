import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom"

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    showEmployee();
    // console.log("How r u?");
  }, []);

  const showEmployee = async () => {
    const employeeData = await axios.get("http://localhost:3003/employees");
    setEmployee(employeeData.data);
  };

  const deleteEmployee = async id => {
    await axios.delete(`http://localhost:3003/employees/${id}`);
    showEmployee();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">Role</th>
              <th scope="col">Skill</th>
              <th scope="col">About</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                employee.map((employees , index) =>(
                    <tr>
                    <th>{index + 1}</th>
                    <td>{employees.firstname}</td>
                    <td >{employees.lastname}</td>
                    <td>{employees.gender}</td>
                    <td>{employees.dob}</td>
                    <td>{employees.role}</td>
                    <td>{employees.skill}</td>
                    <td>{employees.about}</td>
                    <td className="text-center">
                        <NavLink className="btn btn-outline-primary me-2" to={`/employees/edit/${employees.id}`}>Edit</NavLink>
                        <NavLink className="btn btn-outline-danger" to="" onClick={() => deleteEmployee(employees.id)}>Delete</NavLink>
                    </td>
                  </tr>
                    
                ))
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
