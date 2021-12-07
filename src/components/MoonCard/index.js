// Lunar Events
// import Config from "./config.json"
import React, { useState, useEffect } from 'react'
var moment = require('moment'); // require

// Build request URL
// Below are versions for localhost
const appId = "793276f6-845c-4a40-8a17-7c5e48e2cb79";
const appSecret = "b7b4ce73652c6f54f008d1ab20713ce886a0f39ce6bf8c0185f522e607b7f775f83e61a0a4e6a1716f3ff2d7d2ea8bb72e166d20d282a8c083428fd194ed2ff4d4238bfa64928db7395edba8e418a0d7a304b21c1ced1b9da1b21cc34e66c10d77e3aafdc269cc4c8fc14501bbb49609";

//Below are versions for deployed
const baseURL = `https://api.astronomyapi.com/api/v2/bodies/positions/moon`
//const appId = "b7652871-3d9b-41c5-94b3-34898afc0346";//process.env.REACT_APP_ASTRO_APP_ID;
//const appSecret = "b7b4ce73652c6f54f008d1ab20713ce886a0f39ce6bf8c0185f522e607b7f775f83e61a0a4e6a1716f3ff2d7d2ea8bb72e166d20d282a8c083428fd194ed2ff427f59def7b666555fd4e7d170defdfadf38926e0b8deb7b95cb7869c9aae789e4f567bb187a6dbc5efcf7c4de001e0b2";//process.env.REACT_APP_ASTRO_APP_SECRET;
const hash = Buffer.from(`${appId}:${appSecret}`).toString('base64')
const header = {
    //   "X-Requested-With": "XMLHttpRequest",
    Authorization: `Basic ${hash}`,
}
// \ --header 'Authorization: Basic <hash>' \\
export default function MoonCard(props) {
    // class Moon extends React.Component {
    // state = { 
    //     moonrise: null,
    //     peak: null,
    //     moonset: null,
    //     phase: null
    // }
    const [moonData, setmoonData] = useState(null);
    const observer = {
        latitude: "47.6062", //props.lat,
        longitude: "122.3321", //props.long,
        date: moment().format("YYYY-MM-DD")
    };

    useEffect(() => {
        fetchData()
        async function fetchData() {
            //const res = await fetch (baseURL, header, observer);
            const res = await fetch(baseURL, { header }, { observer });
            const data = await res.json()
            console.log(data);
            setmoonData(data);


        }
    }, []);
    //     // Set moon image based on moon phase
    //         <div class="eventCard">
    //             <h2>Lunar Events</h2>
    //             <img src="" alt="moon phase" id="moonPhase" />
    //             <div id="moonCard">
    //                 Moonrise:<span id="moonrise">{moon.moonrise}</span>
    //                 Moonset:<span id="moonset">{moon.moonset}</span>
    //             </div>
    //         </div>
    return (
        <>
            <div>MoonCard</div>

        </>
    )
};