import React, {useState} from 'react'
import "./style.css"
import API from "../../utils/api"
import { useNavigate } from 'react-router-dom'

export default function SignupForm(props) {
    const navigate = useNavigate();
    // Signup Form State
    const [signupState, setsignupState] = useState({
        email: "",
        password: "",
        username: "",
        zipcode: "",
      });

      // State Change Event Listener
      const handleSignupChange = e => {
        const {name, value} = e.target;
        setsignupState({
          ...signupState,
          [name]:value
        })
      }

    // Submit event listener
      const handleSignupSubmit = (e) => {
        e.preventDefault();
        API.signup(signupState)
          .then((res) => {
            props.setErrorMsg("");
            API.login(signupState)
              .then((res) => {
                props.setUserState({
                  username: res.data.user.username,
                  email: res.data.user.email,
                  id: res.data.user.id,
                  zipcode: res.data.user.zipCode
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
        <form onSubmit={props.submit} className="SignupForm">
            <h3 className="">Login Form</h3>

            <input className="form-control" onChange={props.change} name="userName" value = {props.signupState.user_name} placeholder="username"/>
            <input className="form-control" onChange={props.change} name="email" value = {props.signupState.email} placeholder="email"/>
            <input className="form-control" onChange={props.change} name="password" value = {props.signupState.password} type = "password"/>
            <input className="form-control" onChange={props.change} name="zipcode" value = {props.signupState.zipCode} placeholder="zipcode"/>

            <button  className="btn btn-light">Signup</button>
        </form>
    )
};