import GoogleMapReact from 'google-map-react'
import React from "react";
import ISS_IMG from "../../assets/Images/64px-International_Space_Station_(Expedition_58_Patch).svg.png";
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const ISS_URL = "http://api.open-notify.org/iss-now.json"
const MAP_KEY = process.env.REACT_APP_MAP_KEY
const img = <img src={ISS_IMG} alt="iss" height="30px" />
const SpaceStation = () => <div className="findme">{img}</div>

class Map extends React.Component {
    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }

    componentDidMount() {
        this.getCoordinates()
        this.interval = setInterval(this.getCoordinates, 3000)
    }

    componentWillUnmount() {
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

    render() {
        return (
            <Card bg="dark" variant="dark" className="card-class">
                <Card.Body className="card-body">
                    <div className="map" style={{ height: '80%', width: '100%' }}>
                        <GoogleMapReact className="map"
                            bootstrapURLKeys={{ key: 'AIzaSyBPEAWkce7s-bwIJV7yMw_5oOt0N1kRPk0' }}
                            center={this.state.center}
                            zoom={this.state.zoom}
                        >
                            <SpaceStation
                                lat={this.state.center.lat}
                                lng={this.state.center.lng}
                                img={img}
                            />
                        </GoogleMapReact>
                    </div>
                
                <Card.Title >ISS Tracker</Card.Title>
                <Card.Text>
                    Latitude: {this.state.center.lat}
                    Longitude: {this.state.center.lng}
                </Card.Text>
                </Card.Body>
            </Card>
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