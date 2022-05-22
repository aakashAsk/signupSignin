/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect, useState} from 'react';
import InputBox from '../common/inputBox/inputBox';
import axios from 'axios';
import './style.css';

export default function Login(){
  let [isShowToaster, setisShowToaster] = useState(false);  
  let [errorMessage, setErrorMessage] = useState("");  
  useEffect(() => {

  }, [isShowToaster]);
  const [loginDetails, setLoginDetails] = useState({ number: "", password: "" });  
  const handelChangeEvent = (value, name) => {
    setLoginDetails({...loginDetails, [name]: value})
  }

  function Toaster({message}){
    setTimeout(() => {
      setisShowToaster(false);
    }, 3000)
    return (
      <div className="toaster">{message}</div>
    )
  }



  const formSubmit = (e) => {
    e.preventDefault();
    if (loginDetails.number === "" && loginDetails.password === ""){

    } 
    else{
      console.log(loginDetails);
      axios.post(`http://localhost:4040/user/userLogin`, { ...loginDetails })
      .then(result => {
        console.log(result.data);
        console.log(result.data.status);
        if(!result.data.status){
          setisShowToaster(true);
          setErrorMessage(result.data.message)
        }
        else{
          sessionStorage.setItem("isUserLogged", true);
          sessionStorage.setItem("token", result.data.token);
          window.location.href = "/home";
        }
      })
    }
  }
  return (
    <div className="container">
      <div className="signin-content">
        <div className="signin-image">
          <figure>
            <img
              src={process.env.PUBLIC_URL + "assets/images/signin-image.jpg"}
              alt="sing up image"
            />
          </figure>
        </div>

        <div className="signin-form">
          <h2 className="form-title">Sign In</h2>
          <form onSubmit={formSubmit} className="register-form" id="login-form">
            <InputBox
              type="number"
              id="number"
              value={loginDetails.number}
              placeholder="Enter Your number"
              changeEvent={handelChangeEvent}
            />
            <InputBox
              type="password"
              id="password"
              value={loginDetails.password}
              changeEvent={handelChangeEvent}
              placeholder="Enter Your Password"
            />

            <div className="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="form-submit"
                value="Log in"
              />
            </div>
          </form>
        </div>
      </div>
      {isShowToaster ? <Toaster message={errorMessage} /> : null}
    </div>
  );
}