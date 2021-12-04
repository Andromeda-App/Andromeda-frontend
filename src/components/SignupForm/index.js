import React from 'react'
import "./style.css"

export default function SignupForm(props) {
    
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
}