import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import "./style.css";
import Navbar from '../../components/NavBar';
import API from '../../utils/api.js';


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
    // Lunar Events
    // 

    const [moon, setMoon] = useState({
        moonrise:"",
        peak:"",
        moonset:"",
        phase:""
    })

    return (
        // <Navbar></Navbar>
        <div>
            {/* Commented out so we can see things without having signin working */}
        {/* {!user.email?<h1>No such user!</h1>:( */}
        <div>
            <h1>Get ready for some top-tier stargazing, {user.name}!</h1>
            <div class="eventCard">
                <h2>Upcoming Meteor Showers:</h2>
                <div class="cardImage" id="meteorImage"></div>
                <div class="cardContent" id="meteorCard">
                    <h3 id="meteorTitle">Geminid Mete</h3>
                    <p id="meteorText"></p>
                </div> 
            </div>
            <div class="eventCard">
                <h2>Aurora Forecast</h2>
                <img src="./moon.jpg"/>
                <div id="AuroraCard">Information Goes Here!</div> 
            </div>

            <div class="eventCard">
                <h2>Lunar Events</h2>
                <img src="" alt="moon phase" id="moonPhase"/>
                <div id="moonCard">
                    Moonrise:<span id="moonrise"></span>
                    Moonset:<span id="moonset"></span>
                </div>  
            </div>

            <div class="eventCard">
                <h2>Eclipse Alert</h2>
                <div id="eclipseCard">The next lunar eclipse at this location
                
                </div>
            </div>
            <div class="eventCard">
                <h2>ISS Flyover</h2>
                <div id="issCard">Information Goes Here!</div>
            </div>
        </div>
        {/* )} */}
        </div>
    )
}

export default Profile;