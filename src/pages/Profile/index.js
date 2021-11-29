import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import "./style.css";
import API from '../../utils/API';
import Navbar from '../../components/NavBar';


function Profile(props) {
    const [user, setUser] = useState({
        email:"",
        id:""
    })
    const {id} = useParams();
    useEffect(()=>{
        loadUser()
    },[id])

    const loadUser = ()=>{
        API.getUserData(id).then(res=>{
            if(res.data){
                setUser(res.data);
            }
        })
    }
    return (
        // <Navbar></Navbar>
        <div>
            {/* Commented out so we can see things without having signin working */}
        {/* {!user.email?<h1>No such user!</h1>:( */}
        <div>
            <h1>{user.email}'s profile!</h1>
            <div class="eventCard">
                <h2>Upcoming Meteor Showers:</h2>
                <div class="cardContent" id="meteorCard">Information Goes Here!</div> 
            </div>
            <div class="eventCard">
                <h2>Aurora Forecast</h2>
                <div id="AuroraCard">Information Goes Here!</div> 
            </div>
            <div class="eventCard">
                <h2>Lunar Events</h2>
                <div id="moonCard">Information Goes Here!</div>  
            </div>
            <div class="eventCard">
                <h2>Eclipse Alert!</h2>
                <div id="eclipseCard">Information Goes Here!</div>
            </div>
        </div>
        {/* )} */}
        </div>
    )
}

export default Profile;