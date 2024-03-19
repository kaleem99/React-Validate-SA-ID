import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import image from "./SAFlag.png";
import { ValidateID } from "./Helpers/LuhnsAlogorithm";
import DateOfBirth from "./Helpers/DateOfBirth";
import CheckGender from "./Helpers/CheckGender";
interface StateType {
  name: string;
  surname: string;
  IDNumber: string;
}

function App() {
  const [state, setState] = useState<StateType>({
    name: "Kaleem",
    surname: "Mohammad",
    IDNumber: "9908195163089",
  });
  const [submit, setSubmit] = useState(true);
  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newState = { ...state, [name]: value };
    setState(newState);
  };
  const validateDetails = () => {
    if (state.name === "" && state.surname === "" && state.IDNumber === "") {
      return alert("Please enter all details");
    }
    if (state.IDNumber.length !== 13) {
      return alert("Invalid ID Number");
    }
    setSubmit(true);
  };
  return (
    <div className="App">
      {!submit ? (
        <div className="card">
          <img className="SAFlag" src={image} alt="" />
          <form className="my-form">
            <label htmlFor="fname">First name:</label>
            <input
              onChange={(e) => changeState(e)}
              type="text"
              id="fname"
              name="name"
              defaultValue=""
            />
            <label htmlFor="lname">Last name:</label>
            <input
              onChange={(e) => changeState(e)}
              type="text"
              id="lname"
              name="surname"
              defaultValue=""
            />
            <label htmlFor="lname">ID Number:</label>
            <input
              onChange={(e) => changeState(e)}
              type="text"
              id="idnumber"
              name="IDNumber"
              defaultValue=""
            />
            {/* <br />
            <br /> */}
          </form>
          <button onClick={(e) => validateDetails()} value="Submit">
            Submit
          </button>
        </div>
      ) : (
        <div className="card">
          <img className="SAFlag" src={image} alt="" />
          <h1 className="SANAME">South Africa</h1>
          <div className="container">
            <h2>
              <b className="ValidOrInvalid">
                {ValidateID(state.IDNumber)
                  ? "ID Number is Valid"
                  : "ID Number is not Valid"}
              </b>
            </h2>
            <h4>
              <b>Name: {state.name}</b>
            </h4>
            <h4>
              <b>Surname: {state.surname}</b>
            </h4>
            <h4>
              <b>
                Date of Birth: {DateOfBirth(state.IDNumber)}-
                {state.IDNumber.slice(2, 4)}-{state.IDNumber.slice(4, 6)}
              </b>
            </h4>
            <h4>
              <b>Gender: {CheckGender(state.IDNumber)}</b>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
