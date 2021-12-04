import '../../App.css';
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
     <div>Andromeda</div>
     <div className='navlinks'>
         {/* <a href='#'>Login</a>
         <a href='#'>Sign Up</a> */}
         <Link to = '/iss'>ISS Tracker</Link>
     </div>
    </div>
  );
}

export default Navbar;