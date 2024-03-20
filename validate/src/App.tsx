import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import image from "./SAFlag.png";
import { ValidateID } from "./Helpers/LuhnsAlogorithm";
import DateOfBirth from "./Helpers/DateOfBirth";
import CheckGender from "./Helpers/CheckGender";
import { IoSaveOutline } from "react-icons/io5";
import { RiPassportLine } from "react-icons/ri";

interface StateType {
  name: string;
  surname: string;
  IDNumber: string;
}

function App() {
  const [state, setState] = useState<StateType>({
    name: "",
    surname: "",
    IDNumber: "",
  });
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    const getSavedID = () => {
      let localStorageData = localStorage.getItem("IDNumber");
      let element = document.getElementsByClassName("SaveIcon")[0];

      if (element.classList.length === 1) {
        if (localStorageData) {
          localStorageData = JSON.parse(localStorageData);
          element.className += " Valid";
        } else {
          element.className += " Invalid";
        }
      }
    };
    getSavedID();
  }, []);
  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newState = { ...state, [name]: value };
    setState(newState);
  };
  const saveDetails = (e: any) => {
    const className = e.currentTarget.className;
    if (className.includes("Valid")) {
      localStorage.setItem("IDNumber", JSON.stringify(state));
      alert("ID Details have been saved");
    }
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
  const addSavedDataToState = () => {
    let localStorageData = localStorage.getItem("IDNumber");
    if (localStorageData != null) {
      // setState({...state, IDNumber: localStorageData.IDNumber})
      try {
        const ID = JSON.parse(localStorageData).IDNumber;
        const Name = JSON.parse(localStorageData).name;
        const Surname = JSON.parse(localStorageData).surname;

        setState({ ...state, IDNumber: ID, name: Name, surname: Surname });
        setSubmit(true);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  };
  return (
    <div className="App">
      {!submit ? (
        <div className="card">
          <img className="SAFlag" src={image} alt="" />
          <div style={{ width: "90%", margin: "auto" }} className="NameAndIcon">
            <h2>Load Saved ID</h2>
            <div onClick={() => addSavedDataToState()} className="SaveIcon">
              <RiPassportLine />
            </div>
          </div>
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
            <div className="NameAndIcon">
              <h2>
                <b
                  className={`ValidOrInvalid ${
                    ValidateID(state.IDNumber) ? "valid" : "invalid"
                  }`}
                >
                  {ValidateID(state.IDNumber)
                    ? "ID Number is Valid"
                    : "ID Number is not Valid"}
                </b>
              </h2>
              <div
                onClick={(e) => saveDetails(e)}
                className={`SaveIcon ${
                  ValidateID(state.IDNumber) ? "Valid" : "Invalid"
                }`}
              >
                <IoSaveOutline />
              </div>
            </div>
            <h4>
              Name:<b> {state.name}</b>
            </h4>
            <h4>
              Surname:<b> {state.surname}</b>
            </h4>
            <h4>
              Date of Birth:
              <b>
                {DateOfBirth(state.IDNumber)}-{state.IDNumber.slice(2, 4)}-
                {state.IDNumber.slice(4, 6)}
              </b>
            </h4>
            <h4>
              Gender:<b> {CheckGender(state.IDNumber)}</b>
            </h4>
            <h4>
              Citizen:
              <b>
                {state.IDNumber.slice(10, 11) === "0"
                  ? "SA Citizen"
                  : state.IDNumber.slice(10, 11) === "1"
                  ? "Permanent Resident"
                  : "Invalid"}
              </b>
            </h4>
            <input
              onChange={(e) => changeState(e)}
              type="text"
              id="idnumber"
              name="IDNumber"
              className="InputID"
              value={state.IDNumber}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
