import React from 'react'
import "./style.css"

export default function SignupForm(props) {
    return (
        <form onSubmit={props.submit} className="SignupForm">
            <input onChange={props.change} name="userName" value = {props.signupState.user_name} placeholder="username"/>
            <input onChange={props.change} name="email" value = {props.signupState.email} placeholder="email"/>
            <input onChange={props.change} name="password" value = {props.signupState.password} type = "password"/>
            <input onChange={props.change} name="zipcode" value = {props.signupState.zipCode} placeholder="zipcode"/>

            <button>Signup</button>
        </form>
    )
}