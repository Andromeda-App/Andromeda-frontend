import React from "react";
import Card from 'react-bootstrap/Card';
const baseURL = "https://services.swpc.noaa.gov/text/aurora-nowcast-hemi-power.txt";
// Southern Hemisphere
const southURL = "https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg";
// Northern Hemisphere
const northURL = "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg";
// I love the NOAA!
let reqURL = "";




class auroraMap extends React.Component {
    // Show correct hemisphere based on user location
    // if (props.User.lat <= 0) {
    //     reqURL = southURL;
    // } else {
    //     reqURL = northURL;
    // }

    render() {
        return (
            <Card className="card-class" >
                <h2>Aurora Forecast Map</h2>
                <div id="auroraMap" style={{
                    backgroundImage: `url(${northURL})`,
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </Card>

        )
    }
}

export default auroraMap
