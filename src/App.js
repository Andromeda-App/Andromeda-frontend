import React, { useState, useEffect } from "react";
import { BrowserRouter as BrowserRouter, Routes, Route, Link } from "react-router-dom"

// Page Imports
import Home from "./pages/Home";
import Preferences from "./pages/Preferences";
import Profile from "./pages/Profile";

// Component Imports
import Donki from "./Donki"
import NasaPhoto from './components/Apod/NasaPhoto';
import Map from "../src/components/IssCard/Map"
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Navbar from 'react-bootstrap/Navbar';
import EmailForm from "./components/Email/Form";
import MoonCard from "./components/MoonCard";
import API from "./utils/api.js"
import cmeData from './components/CME/cmeData';
import auroraMap from "./Aurora/auroraMap";

//Bootstrap components
import './App.css'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
// import Jumbotron from 'react-boo'

// APOD
const apodKey = process.env.REACT_APP_NASA_KEY;

function App() {
  // User Login
  const [userState, setUserState] = useState({
    email: "",
    id: 0
  });
  // Token 
  const [token, setToken] = useState("")
  // Login Form
  // const [loginFormState, setLoginFormState] = useState({
  //   email: "",
  //   password: ""
  // });
  // // Signup Form
  // const [signupFormState, setSignupFormState] = useState({
  //   email: "",
  //   password: ""
  // });

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

  // const handleLoginChange = event => {
  //   if (event.target.name === "email") {
  //     setLoginFormState({
  //       ...loginFormState,
  //       email: event.target.value
  //     })
  //   } else {
  //     setLoginFormState({
  //       ...loginFormState,
  //       password: event.target.value
  //     })
  //   }
  // }
  // const handleSignupChange = event => {
  //   if (event.target.name === "email") {
  //     setSignupFormState({
  //       ...signupFormState,
  //       email: event.target.value
  //     })
  //   } else {
  //     setSignupFormState({
  //       ...signupFormState,
  //       password: event.target.value
  //     })
  //   }
  // }

  // const handleLoginSubmit = e => {
  //   e.preventDefault();
  //   API.login(loginFormState).then(res => {
  //     console.log(res.data)
  //     setUserState({
  //       email: res.data.user.email,
  //       id: res.data.user.id
  //     })
  //     setToken(res.data.token)
  //     localStorage.setItem("token", res.data.token)
  //   }).catch(err => {
  //     console.log(err);
  //   })

  // }
  // const handleSignupSubmit = e => {
  //   e.preventDefault();
  //   API.signup(signupFormState).then(res => {
  //     API.login(signupFormState).then(res => {
  //       console.log(res.data)
  //       setUserState({
  //         email: res.data.user.email,
  //         id: res.data.user.id
  //       })
  //       setToken(res.data.token)
  //       localStorage.setItem("token", res.data.token)
  //     }).catch(err => {
  //       console.log(err);
  //     })
  //   })
  // }

  const logMeOut = () => {
    setUserState({ email: '', id: 0 })
    setToken("");
    localStorage.removeItem("token")
  }

  // Get CME Forecast Events using DONKI
  const [cme, setCme] = useState()

  useEffect(() => {
    cmeData.getCME().then(cmeReturn => {
      // for (let i=0; i<=cmeReturn.data.length; i++) {
      //   if (cmeReturn.data)
      // }

      //console.log(cmeReturn.data)
      console.log(cmeReturn.data[0])
      // if (donkiData.data[0].cmeAnalyses[0].enlilList[0].estimatedShockArrivalTime === null) {
      //   setDonki("No upcoming event")
      // } else {
      //   setDonki(donkiData.data[33].cmeAnalyses[0].enlilList[0].estimatedShockArrivalTime)
      // }
    })
  }, []);


  // Get background photo from NASA's APOD
  const [photoData, setPhotoData] = useState("");

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=m6Wr9MihDDvs5EkySGkFdMXckAHmh3vUi40nganr`
      );
      const data = await res.json();
      if (data.url) {
        setPhotoData(data.url);
      }
      else {
        setPhotoData(`./assets/background.png`)
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>Andromeda</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="navbar-dark">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark"
                title="Login"
                menuVariant="dark"
                autoClose={false}
              >
                <NavDropdown.Item autoClose="false" href="#login">
                  <LoginForm />
                  {/* <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} /> */}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-dark"
                title="Sign Up"
                menuVariant="dark"
                autoClose={false}
              >
                <NavDropdown.Item href="#signup">
                  <SignupForm setUserState={setUserState}
                    setToken={setToken} />
                  {/* <SignupForm submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} /> */}
                </NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="rootEl" style={{
        backgroundImage: `url(${photoData})`,
        backgroundPosition: 'top',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}>

        <Routes>
          <Route exact path='/' element={<Home />} user={userState} token={token} />
          {/* <Route exact path='/preferences' element={<Preferences />} user={userState} token={token} /> */}
          <Route exact path='/profile' element={<Profile />} user={userState} token={token} />
          {/* <Route path="/nasaphoto" element={<NasaPhoto />}></Route> */}
          <Route exact path='/iss' element={<Map />} user={userState} token={token} />
        </Routes>
        {/* <cmeData /> */}
        {/* <MoonCard /> */}
      </div>



      {/* <Container className="p-5 mb-4 bg-dark rounded-3">
          <h1>Ready to go stargazing, {userState.user_name}?</h1>
          <button onClick={logMeOut}>Logout</button>
          <Link to="/">Home</Link>
          <Link to={`/profile/${userState.id}`}>Profile</Link>
          <div style={{ maxWidth: 900, padding: 30 }}>
            {donki && (
              <article>
                <header>
                  {donki}
                </header> */}
      {/* <img src="" alt="DONKI" width="800" height="auto" /> */}
      {/* <p>{donki.explanation}</p> */}
      {/* <pre
                  style={{
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                  }}
                >
                  <hr />
                  {JSON.stringify(donki, null, 2)}
                </pre>
              </article>
            )}
          </div> */}
      {/* iss return */}
      {/* <div>
            <h3>ISS Tracker</h3>
            <Map />
          </div> */}
      {/* </Container> */}
      {/* </div> */}

      {/* )} */}

    </BrowserRouter>);

}

export default App;