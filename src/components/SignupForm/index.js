import React, {useState} from 'react'
import "./style.css"
import API from "../../utils/api"
import { useNavigate } from 'react-router-dom'

export default function SignupForm(props) {
<<<<<<< HEAD
<<<<<<< HEAD
    
    return (
        <form onSubmit={props.submit} className="SignupForm">
            <h3 className="">Login Form</h3>

            <input className="form-control" onChange={props.change} name="userName" value = {props.signupState.user_name} placeholder="username"/>
            <input className="form-control" onChange={props.change} name="email" value = {props.signupState.email} placeholder="email"/>
            <input className="form-control" onChange={props.change} name="password" value = {props.signupState.password} type = "password"/>
            <input className="form-control" onChange={props.change} name="zipcode" value = {props.signupState.zipCode} placeholder="zipcode"/>

            <button  className="btn btn-light">Signup</button>
=======
=======
    // User Login
    const [userState, setUserState] = useState({
      email: "",
      id: 0
    });
    // Token 
    const [token, setToken] = useState("")

>>>>>>> dev
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
        const {name, value} = e.target;
        if (e.target.name === "email") {
        setSignupState({
          ...signupState,
          email: e.target.value
        })} else if (e.target.name === "user_name") {
        setSignupState({
          ...signupState,
          user_name: e.target.value        })
        } else if (e.target.name === "password") {
        setSignupState({
          ...signupState,
          password: e.target.value
        })}  else if (e.target.name === "zipCode") {
        setSignupState({
          ...signupState,
          zipCode: e.target.value
        })
      }}

    // Submit event listener
      const handleSignupSubmit = (e) => {
        e.preventDefault();
        API.signup(signupState)
          .then((res) => {
            props.setErrorMsg("");
            API.login(signupState)
              .then((res) => {
                props.setUserState({
                  user_name: res.data.user.user_name,
                  email: res.data.user.email,
                  id: res.data.user.id,
                  zipCode: res.data.user.zipCode
                });
                props.setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                navigate('/profile')
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            props.setErrorMsg("Signup Failed.");
          });
      }
    
    return (
        <form onChange={handleSignupChange} signupState={signupState} onSubmit={signupState.submit} className="SignupForm">
            
            <input id="usernameSignup" className="form-control p3" onChange={handleSignupChange} name="user_name" value = {signupState.user_name} placeholder="username"/>
            <input id="emailSignup" className="form-control p3" onChange={handleSignupChange} name="email" value = {signupState.email} placeholder="email"/>
            <input id="passwordSignup" className="form-control p3" onChange={handleSignupChange} name="password" value = {signupState.password} type="password" placeholder="password"/>
            <input id="zipcodeSignup" className="form-control p3" onChange={handleSignupChange} name="zipCode" value = {signupState.zipCode} placeholder="zipcode"/>
            <button className="btn btn-info">Signup!</button>
>>>>>>> dev
        </form>
    )
};