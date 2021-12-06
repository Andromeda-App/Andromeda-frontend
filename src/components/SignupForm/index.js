import React, {useState} from 'react'
import "./style.css"
import API from "../../utils/api"
import { useNavigate } from 'react-router-dom'

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
    const [signupState, setsignupState] = useState({
        email: "",
        password: "",
        user_name: "",
        zipCode: "",
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
        <form submit={handleSignupSubmit} change={handleSignupChange} signupState={signupState} onSubmit={props.submit} className="SignupForm">
            
            <input id="usernameSignup" className="form-control p3" onChange={props.change} name="userName" value = {props.signupState.user_name} placeholder="username"/>
            <input id="emailSignup" className="form-control p3" onChange={props.change} name="email" value = {props.signupState.email} placeholder="email"/>
            <input id="passwordSignup" className="form-control p3" onChange={props.change} name="password" value = {props.signupState.password} type="password" placeholder="password"/>
            <input id="zipcodeSignup" className="form-control p3" onChange={props.change} name="zipcode" value = {props.signupState.zipCode} placeholder="zipcode"/>
            <button className="btn btn-info">Signup!</button>
        </form>
    )
};