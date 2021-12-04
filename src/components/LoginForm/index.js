import React from 'react'
import "./style.css"

export default function LoginForm(props) {
    return (
        <form onSubmit={props.submit} className="LoginForm">
            <h3>Login Form</h3>
            <input  className="form-control" onChange={props.change} name="email" value = {props.loginState.email} placeholder="email"/>
            <input  className="form-control" onChange={props.change} name="password" value = {props.loginState.password} type = "password"/>
            <button className="btn btn-light">Submit</button>
        </form>
    )
}