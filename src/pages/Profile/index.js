import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import "./style.css";
// import Navbar from '../../components/NavBar';
import API from '../../utils/api.js';
import Card from 'react-bootstrap/Card';
import Map from '../../components/IssCard/Map';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import magView from '../../components/swpcAlert.js/geospace';


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
        <div>
            {/* Commented out so we can see things without having signin working */}
            {/* {!user.email?<h1>No such user!</h1>:( */}
            <div>
                {/* <h1>Get ready for some top-tier stargazing, {user.name}!</h1>
            {/* )} */}
                <Container fluid className="justify-content-md-center content">
                    <Row>
                        <Col>
                            <Card bg="dark" variant="dark">
                                <Card.Img variant="top" src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" />
                                <Card.Title>Aurora Forecast Map</Card.Title>
                                <Card.Text>
                                    Current NOAA Aurora Probability Map
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Map />
                        </Col>
                                                <Col>
                        <Card bg="dark" variant="dark">
                                <Card.Img variant="top" src="https://services.swpc.noaa.gov/images/animations/lasco-c3/latest.jpg" />
                                <Card.Title>Coronal Mass Ejections</Card.Title>
                                <Card.Text>
                                    Check for Coronal Mass Ejections in this live-view of the Sun's Corona!
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card bg="dark" variant="dark">
                                <Card.Img variant="top" src="https://services.swpc.noaa.gov/images/animations/geospace/velocity/latest.png" />
                                <Card.Title>Magnetosphere</Card.Title>
                                <Card.Text>
                                    Current state of the earth's magnetosphere.
                                </Card.Text>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Profile;