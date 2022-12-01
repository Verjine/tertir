import React, { useState, useEffect} from "react";
import MainPage from "./MainPage";
import SecondPage from "./SecondPage";
import Register from "./Register";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import {postData} from '../api/starter';

function UserForm(props) {
  const [state, setState] = useState({
    step: 1,
    username: "",
    idBankNumber: "",
    otherBankNumber: "",
    currentQrCodeId: "",
    previousQrCodeId:"",
  });
  // Proceed to next step

  // useEffect(() => {
   
  //    if(state.currentQrCodeId) {
  //     setState({
  //       ...state,
  //       step: 3
  //     })
  
  //    }
  //   })

  const hide = () => {
    
     if(state.currentQrCodeId) {
      setState({
        ...state,
        step: 3 
      })
    }
  }
  

      const nextStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: step + 1,
    });
  };



  // Go back to prev step
  const prevStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: step - 1,
    });
  };
  
  // Handle fields change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const { step } = state;

  switch (step) {
    case 1:
      return (
        <MainPage
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
        />
      );

    case 2:
      return (
        <SecondPage
          handleChange={handleChange}
          values={state}
          setState={setState}
          hide={hide}
        />
      );
    case 3:
      return (
        <Register
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 4:
      return (
        <FourthPage
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
          values={state}
          postData={postData}
        />
      );

    case 5:
      return (
        <FifthPage
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          setState={setState}
          values={state}
        />
      );

    default:
    console.log(props);
  }
}

export default UserForm;
