import React, { useState, useEffect } from "react";
import "./style.css"
import API from "../../utils/api"


export default function LoginForm(props) {
    // User Login
  const [userState, setUserState] = useState({
    email: "",
    id: 0
  });
  // Token 
  const [token, setToken] = useState("")
  // Login Form
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: ""
  });
  // Signup Form
  const [signupFormState, setSignupFormState] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    console.log("Token:" + myToken)
    if (myToken) {
      API.getProfile(myToken).then(res => {
        console.log("worked")
        setToken(myToken)
        setUserState({
          email: res.data.email,
          id: res.data.id
        })
      }).catch(err => {
        console.log("failed")
        console.log(err)
        localStorage.removeItem('token')
      })
    }
  }, [])

  const handleLoginChange = event => {
    if (event.target.name === "email") {
      setLoginFormState({
        ...loginFormState,
        email: event.target.value
      })
    } else {
      setLoginFormState({
        ...loginFormState,
        password: event.target.value
      })
    }
  }

    const handleLoginSubmit = e => {
        e.preventDefault();
        API.login(loginFormState).then(res => {
          console.log(res.data)
          setUserState({
            email: res.data.user.email,
            id: res.data.user.id
          })
          setToken(res.data.token)
          localStorage.setItem("token", res.data.token)
        }).catch(err => {
          console.log(err);
        })
    
      }

    return (
        <form onSubmit={props.submit} className="LoginForm">
            <h3>Login Form</h3>
            <input  className="form-control" onChange={props.change} name="email" value = {props.loginState.email} placeholder="email"/>
            <input  className="form-control" onChange={props.change} name="password" value = {props.loginState.password} type = "password"/>
            <button className="btn btn-light">Submit</button>
        </form>
    )
}