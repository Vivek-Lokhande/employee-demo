import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditEmpolyee = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    role: "",
    skill: "",
    about: "",
  });

  const { firstname, lastname, gender, dob, role, skill, about } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getEmployee();
  },[]);

  const getEmployee = async () => {
    const employeeData = await axios.get( `http://localhost:3003/employees/${id}`);
    setEmployee(employeeData.data);
  };

  

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/employees/${id}`, employee);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-dark">Edit Employee Data</h1>
        <form
          class="row g-3 needs-validation"
          onSubmit={(e) => onSubmit(e)}
        >
          <div class="col-md-5">
            <label for="validationCustom01" class="form-label h6">
              First Name
            </label>
            <input
              name="firstname"
              type="text"
              class="form-control"
              id="validationCustom01"
              placeholder="Enter Your First Name"
              defaultValue={firstname}
              onChange={(e) => onInputChange(e)}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-5">
            <label for="validationCustom02" class="form-label h6">
              Last Name
            </label>
            <input
              name="lastname"
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Enter Your last Name"
              defaultValue={lastname}
              onChange={(e) => onInputChange(e)}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label for="validationCustomUsername" class="form-label h6 me-2">
              Select Your Gender :
            </label>
            <div class="form-check form-check-inline">
              <input
                checked={ gender === 'Male' ? true : ''}
                class="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="Male"
                onChange={(e) => onInputChange(e)}
              />
              <label class="form-check-label me-1" for="inlineRadio1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                checked={ gender === 'Female' ? true : ''}
                class="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio2"
                value="Female"
                onChange={(e) => onInputChange(e)}
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                checked={ gender === 'Other' ? true : ''}
                class="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio3"
                value="Other"
                onChange={(e) => onInputChange(e)}
              />
              <label class="form-check-label" for="inlineRadio3">
                Other
              </label>
            </div>
          </div>
          <div class="col-md-4">
            <label for="dob" className="h6 me-2">
              Date Of Birth:{" "}
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label h6">
              Select Your Role :
            </label>
            <select
              class="form-select form-select"
              aria-label=".form-select example"
              name="role"
              onChange={(e) => onInputChange(e)}
            >
           <option className="h6">Select Role</option>
              <option selected={ role === 'Developer' ? true : ''} value="Developer">
                Developer
              </option>
              <option selected={ role === 'Tester' ? true : ''} value="Tester">
                Tester
              </option>
              <option selected={ role === 'Manager' ? true : ''} value="Manager">
                Manager
              </option>
              <option selected={ role === 'Team Leader' ? true : ''} value="Team Leader">
                Team Leader
              </option>
            </select>
          </div>
          <div class="col-md-9">
            <label for="validationEmployeeSkill" class="form-label h6">
              Select Your Skills :
            </label>
            <div class="form-check">
              <input
                checked={ skill === 'Java' ? true : ''}
                class="form-check-input"
                type="checkbox"
                value={skill}
                id="flexCheckDefault"
                name="skill"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Java
              </label>
            </div>
            <div class="form-check">
              <input
                checked={ skill === 'Node JS' ? true : ''}
                class="form-check-input"
                type="checkbox"
                value={skill}
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Node JS
              </label>
            </div>
            <div class="form-check">
              <input
                checked={ skill === 'React JS' ? true : ''}
                class="form-check-input"
                type="checkbox"
                value={skill}
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                React JS
              </label>
            </div>
            <div class="form-check">
              <input
                checked={ skill === 'Angular' ? true : ''}
                class="form-check-input"
                type="checkbox"
                value={skill}
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Angular
              </label>
            </div>
          </div>
          <div class="col-md-10 mb-2">
            <label for="exampleFormControlTextarea1" class="form-label h6">
              About Employee :
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              maxLength={300}
              placeholder="Enter Some Text Here"
              defaultValue={about}
              onChange={(e) => onInputChange(e)}
              name="about"
            ></textarea>
          </div>

          <div class="col-12 text-center">
            <button class="btn btn-warning" type="submit">
              Update Employee Data
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default EditEmpolyee;
