import React from 'react';
import { useParams } from "react-router-dom"
// import "./style.css";
import API from '../../utils/api.js';
import Card from 'react-bootstrap/Card';


function magView(props) {
    const baseURL = `https://services.swpc.noaa.gov/images/animations/geospace/velocity/latest.png`
    return (
        <Card bg="dark" variant="dark">
            <Card.Img variant="top" src="https://services.swpc.noaa.gov/images/animations/geospace/velocity/latest.png" />
            <Card.Title>Aurora Forecast Map</Card.Title>
            <Card.Text>
                Current NOAA Aurora Probability Map
            </Card.Text>
        </Card>
    )
}
export default magView;