// import React, { useState } from "react";
// import { useParams } from "react-router-dom"
// import API from "../../utils/API";

import GoogleMapReact from 'google-map-react'
import React from "react";
// import { useSearchParams } from 'react-router-dom'
// import iss from '../../assets/Images/International_Space_Station_white.svg.png'

const ISS_URL = "http://api.open-notify.org/iss-now.json"
// const MAP_KEY = process.env.REACT_APP_MAP_KEY
const img = <img src = "../../assets/Images/International_Space_Station_white.svg.png" alt = "iss" height = "30px"/>
const SpaceStation = ({ img }) => <div>{img}</div>

class Map extends React.Component{
    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }

    componentDidMount(){
        this.getCoordinates()
        this.interval = setInterval(this.getCoordinates, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    getCoordinates = () => {
        fetch(ISS_URL)
            .then(res => res.json())
            .then(data => this.setState({
                center: {
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude
                }
            }))
    }

    render(){
        console.log("LAT:", this.state.center.lat)
        console.log("LNG:", this.state.center.lng)
        return(
            <div>
                <p>Latitude: {this.state.center.lat}</p>
                <p>Longitude: {}</p>
                <div className = "map" style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact className = "map"
                        bootstrapURLKeys={{key: 'AIzaSyBPEAWkce7s-bwIJV7yMw_5oOt0N1kRPk0' }}
                        center={this.state.center}
                        zoom={this.state.zoom}
                    >
                    <SpaceStation

                        lat = {this.state.center.lat}
                        lng = {this.state.center.lng}
                        img = {img}
                    />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Map

// YT vid (kp)
// IssCard.defaultprops = {
//     center: {
//         lat: 47.6062,
//         lng: 122.3321,
//     },
//     zoom: 6,
// }
// function IssCard () {
//     const [center,setCenter]= useState(
//         {
//             issCenter: {
//                 lat: 47.6062,
//                 lng: 122.3321,
//             },
//             zoom: 6,
//         }
//     )
//     setCenter({issCenter.lat:"", issCenter.lng:""})
//     return <div className='Iss-card-container'>
//         <GoogleMapReact
//             bootstrapURLKeys={{ key:'AIzaSyBPEAWkce7s-bwIJV7yMw_5oOt0N1kRPk0' }}
//             defaultCenter={center.issCenter}
//             defaultZoom={center.zoom}
//         >
//             <img 
//                 src={iss} 
//                 alt="iss-icon" 
//                 className="iss-icon" 
//                 lat={center.issCenter.lat}
//                 lng={center.issCenter.lng}
//             />

//         </GoogleMapReact>
//     </div>
// }

// IssCard.defaultprops = {
//     center: {
//         lat: 47.6062,
//         lng: 122.3321,
//     },
//     zoom: 6,
// }

// export default IssCard