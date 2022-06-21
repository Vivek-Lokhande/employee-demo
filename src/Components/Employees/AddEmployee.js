import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddEmpolyee = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    role: "",
    skill: "",
    about: "",
  });

  const onInputChange = (e) => {
    console.log(e.target.value);
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("http://localhost:3003/employees", employee);
    setLoading(false);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-primary">Add Employee</h1>
        { loading ? 
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        :
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
              
                placeholder="Enter Your First Name"
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
              
                placeholder="Enter Your last Name"
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
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio1"
                  value="Male"
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <label class="form-check-label me-1" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="Female"
                  required
                  onChange={(e) => onInputChange(e)}
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio3"
                  value="other"
                  required
                  onChange={(e) => onInputChange(e)}
                />
                <label class="form-check-label" for="inlineRadio3">
                  Other
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <label for="dob" className="h6 me-2">
                Date Of Birth:
              </label>
              <input
                type="date"
                id="birthday"
                name="dob"
                required
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
                required
                name="role"
                onChange={(e) => onInputChange(e)}
              >
                <option className="h6">Select Role</option>
                <option  value="Developer">
                  Developer
                </option>
                <option value="Tester">
                  Tester
                </option>
                <option  value="Manager">
                  Manager
                </option>
                <option value="Team Leader">
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
                  class="form-check-input"
                  type="checkbox"
                  value="Java"
                  name="skill"
                  onChange={(e) => onInputChange(e)}
                  id="flexCheckDefault"
                
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Java
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Node JS"
                  name="skill"
                  id="flexCheckChecked"
                  onChange={(e) => onInputChange(e)}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Node JS
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="React JS"
                  name="skill"
                  id="flexCheckChecked"
                  onChange={(e) => onInputChange(e)}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  React JS
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Angular"
                  name="skill"
                  id="flexCheckChecked"
                  onChange={(e) => onInputChange(e)}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Angular
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Android"
                  name="skill"
                  id="flexCheckChecked"
                  onChange={(e) => onInputChange(e)}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Android
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
                name="about"
                required
                onChange={(e) => onInputChange(e)}
              ></textarea>
            </div>

            <div class="col-12 text-center">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>

        }
      </div>
    </>
  );
};
export default AddEmpolyee;
