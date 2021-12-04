import '../../App.css';
import { Link } from "react-router-dom"
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';

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
}

export default Navbar;