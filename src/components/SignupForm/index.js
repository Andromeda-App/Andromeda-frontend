import React, { useState } from 'react'
import "./style.css"
import API from "../../utils/api"
import { useNavigate } from 'react-router-dom'
import { init } from 'emailjs-com';
init("user_LyOVScD7bGjFy04qPNZ4J");

export default function SignupForm(props) {
  // User Login
  const [userState, setUserState] = useState({
    email: "",
    id: 0
  });
  // Token 
  const [token, setToken] = useState("")

  const navigate = useNavigate();
  // Signup Form State
  const [signupState, setSignupState] = useState({
    email: "",
    password: "",
    user_name: "",
    zipCode: "",
  });

  // State Change Event Listener
  const handleSignupChange = e => {
    const { name, value } = e.target;
    if (e.target.name === "email") {
      setSignupState({
        ...signupState,
        email: e.target.value
      })
    } else if (e.target.name === "user_name") {
      setSignupState({
        ...signupState,
        user_name: e.target.value
      })
    } else if (e.target.name === "password") {
      setSignupState({
        ...signupState,
        password: e.target.value
      })
    } else if (e.target.name === "zipCode") {
      setSignupState({
        ...signupState,
        zipCode: e.target.value
      })
    }
  }
  // function sendEmail(templateId, variables) {
  //   window.emailjs.send("service_ff42zsa", templateId, variables, "user_LyOVScD7bGjFy04qPNZ4J"
  //   ).then(res => {
  //     console.log('Email successfully sent!')
  //   })
  //     .catch(err => console.error('Unable to send email:', err))
  // }
  // Submit event listener
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    API.signup(signupState)
      .then((res) => {
        // props.setErrorMsg("");
        API.login(signupState)
          .then((res) => {
            props.setUserState({
              email: res.data.user.email,
              id: res.data.user.id,
            });
            props.setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
            // const templateId = 'template_lung0vq';
            // sendEmail(templateId, { message_html: "Welcome to Andromeda", from_name: "Andromeda Space Weather App", reply_to: "andromedaReactApp@gmail.com" })
            navigate('/profile')
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("Signup Failed.", err);
      });
  }





  return (
    <form onChange={handleSignupChange} onSubmit={handleSignupSubmit} className="SignupForm">

      <input id="usernameSignup" className="form-control p3" onChange={handleSignupChange} name="user_name" value={signupState.user_name} placeholder="username" />
      <input id="emailSignup" className="form-control p3" onChange={handleSignupChange} name="email" value={signupState.email} placeholder="email" />
      <input id="passwordSignup" className="form-control p3" onChange={handleSignupChange} name="password" value={signupState.password} type="password" placeholder="password" />
      <input id="zipcodeSignup" className="form-control p3" onChange={handleSignupChange} name="zipCode" value={signupState.zipCode} placeholder="zipcode" />
      <button className="btn btn-info">Signup!</button>
    </form>
  )
};