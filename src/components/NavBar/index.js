import '../../App.css';
import { Link } from "react-router-dom"
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';
<<<<<<< HEAD

function Navbar(props) {



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">Andromeda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className="dropdown-item">Login Form</li>
                <li className="dropdown-item">Signup Form</li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sign Up
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className="dropdown-item">Login Form</li>
                <li className="dropdown-item">Signup Form</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='navlinks'>
          {/* <a href='#'>Login</a>
         <a href='#'>Sign Up</a> */}
          <Link to='/iss'>ISS Tracker</Link>
        </div>
      </div>
    </nav>
  );
=======
import { useState, useEffect } from "react"
import API from "../../utils/api"
// import Dropdown from 'react-bootstrap/Dropdown';
// import Container from 'react-bootstrap/Container';
// import { NavDropdown } from 'react-bootstrap';
// import Nav from 'react-bootstrap'

function Navbar(props) {
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
  const handleSignupChange = event => {
    if (event.target.name === "email") {
      setSignupFormState({
        ...signupFormState,
        email: event.target.value
      })
    } else {
      setSignupFormState({
        ...signupFormState,
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
  const handleSignupSubmit = e => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      API.login(signupFormState).then(res => {
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
    })
  }
  {/* {!userState.email ? (
        <Container className="p-5 mb-4 bg-dark rounded-3">
          <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} />
          <SignupForm submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} />
        </Container>
      ) : ( */}

  return (
    <div>test</div>
//     <Navbar variant="dark" bg="dark" expand="lg">
//   <Container fluid>
//     <Navbar.Brand href="#home">Andromeda</Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbar-dark" />
//     <Navbar.Collapse id="navbar-dark">
//       <Nav>
//         <NavDropdown
//           id="nav-dropdown-dark"
//           title="Login"
//           menuVariant="dark"
//         >
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>)
  )
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">

    //     <a className="navbar-brand" href="#">Andromeda</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
    //       <ul className="navbar-nav">
    //         {!userState.email ? (
    //           <Dropdown>
    //             <Dropdown.Toggle id="dropdown-basic">
    //               Sign Up
    //             </Dropdown.Toggle>

    //             <Dropdown.Menu>
    //               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //             </Dropdown.Menu>
    //           </Dropdown>
              // <div className="nav-item dropdown">
              //   <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              //     Sign Up
              //   </a>
              //   <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              //     <div className="dropdown-item" >Test</div>
              //     <SignupForm className="dropdown-item" submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} />
              //   </div>
              // </div>
//             ) : (
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Log In
//                 </a>
//                 <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
//                   <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} />
//                   <li className="dropdown-item">Login Form</li>
//                   <li className="dropdown-item">Signup Form</li>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//         <div className='navlinks'>
//           {/* <a href='#'>Login</a>
//          <a href='#'>Sign Up</a> */}
//           <Link to="/">Home</Link>
//           <Link to='/iss'>ISS Tracker</Link>
//           <Link to='/nasaphoto'>APOD</Link>
//         </div>
//       </div>
//     </nav>
//   );
>>>>>>> dev
}

export default Navbar;