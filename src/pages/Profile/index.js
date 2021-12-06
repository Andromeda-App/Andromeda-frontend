import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import "./style.css";
// import Navbar from '../../components/NavBar';
import API from '../../utils/api.js';
import Card from 'react-bootstrap/Card'
import Map from '../../components/IssCard/Map'
import auroraMap from '../../Aurora/auroraMap';


function Profile(props) {
    const [user, setUser] = useState({
        email: "",
        id: ""
    })
    const { id } = useParams();
    useEffect(() => {
        loadUser()
    }, [id])

    const loadUser = () => {
        API.getUserData(id).then(res => {
            if (res.data) {
                setUser(res.data);
            }
        })
    }
    // Lunar Events
    // 

    const [moon, setMoon] = useState({
        moonrise: "",
        peak: "",
        moonset: "",
        phase: ""
    })

    // Aurora Forecast Map
    const northURL = "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg";
    const southURL = "https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg";
     // Show correct hemisphere based on user location
    // if (props.User.lat <= 0) {
    //     reqURL = southURL;
    // } else {
    //     reqURL = northURL;
    // }

    return (
        // <Navbar></Navbar>
        <div>
            {/* Commented out so we can see things without having signin working */}
            {/* {!user.email?<h1>No such user!</h1>:( */}
            <div>
                {/* <h1>Get ready for some top-tier stargazing, {user.name}!</h1>
            <div className="card eventCard">
                <h2>Upcoming Meteor Showers:</h2>
                <div class="cardImage" id="meteorImage"></div>
                <div class="cardContent" id="meteorCard">
                    <h3 id="meteorTitle">Geminid Mete</h3>
                    <p id="meteorText"></p>
                </div> 
            </div>
            <div className="card eventCard">
                <h2>Aurora Forecast</h2>
                <img src="./moon.jpg"/>
                <div id="AuroraCard">Information Goes Here!</div> 
            </div>

            <div className="card eventCard">
                <h2>Lunar Events</h2>
                <img src="" alt="moon phase" id="moonPhase"/>
                <div id="moonCard">
                    Moonrise:<span id="moonrise"></span>
                    Moonset:<span id="moonset"></span>
                </div>  
            </div>

            <div className="card eventCard">
                <h2>Eclipse Alert</h2>
                <div id="eclipseCard">The next lunar eclipse at this location
                
                </div>
            </div> */}
                <div className="card-group">
                    <Card>
                        <Card.Img variant="top" src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" />
                        <Card.Title>Aurora Forecast Map</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card>

                    <Map />

                </div>
            </div>
            {/* )} */}
        </div>
    )
}

export default Profile;