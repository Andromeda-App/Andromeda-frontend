import React,{useState,useEffect} from 'react';
import "./style.css";
import API from '../../utils/API';
import Navbar from '../../components/NavBar';


function Home(props) {
    // const [background,setBackground] = useState([])
    // const getBackground = ()=>{
    //     API.getAPOD().then(res=>{
    //         // TODO Work on APOD API
    //         setBackground(res.data);
    //     })
    // };    
    // useEffect(()=>{
    //     getBackground()
    //  },[])

    const [user, setUser] = useState([])
    useEffect(()=>{
       loadUsers()
    },[])
    const loadUsers = ()=>{
        API.getAllUsers().then(res=>{
            setUser(res.data);
        })
    };

    return (
        // <Navbar></Navbar>
        // <div className="home"></div>
        <div className="about">
            {/* Modal for future development of about us */}
            <h1>About Andromeda</h1>
            <div>Welcome to Andromeda! Get alerts on space weather for optimal stargazing!</div>
        </div>
    )
}

export default  Home;