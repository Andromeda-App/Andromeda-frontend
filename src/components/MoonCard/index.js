// Lunar Events
import React from 'react'
import Config from "./config.json"

const hash = Buffer.from(`${Config.appId}:${Config.appSecret}`).toString('base64')
const baseURL = `${Config.apiEndpoint}/api/v2/bodies/positions/moon`

// \ --header 'Authorization: Basic <hash>' \\

class Moon extends React.Component{
    state = {
        moonrise: null,
        peak: null,
        moonset: null,
        phase: null
    }}

    //let tempURL = baseURL + props.lat
    // // useEffect(() => {
    //     fetchData();

    //     function fetchData() {
    //         // moonURL = baseURL + "/";
    //         const header =  {
    //             //   "X-Requested-With": "XMLHttpRequest",
    //               Authorization: `Basic ${hash}`,
    //             }
    //         const observer = {
    //             latitude: props.lat,
    //             longitude: props.long,
    //             date: moment(this.date).format("YYYY-MM-DD")
    //         }
    //         const res = await fetch(baseURL, {header}, {observer});
    //         const data = await res.json();
            // axios
            // .post(
            //   `${Config.apiEndpoint}/api/v2/bodies/positions/moon`,
            //   {
            //     style: this.style,
            //     observer: {
            //       latitude: this.latitude,
            //       longitude: this.longitude,
            //       date: moment(this.date).format("YYYY-MM-DD"),
            //     },
            //     view: {
            //       type: this.viewType,
            //       parameters,
            //     },
            //   },
            //   {
            //    
            //   }
            // )
            // .then((response) => {
            //   this.imageUrl = response.data.data.imageUrl;
  
            //   this.loading = false;
            // });
//             console.log(data);
//             setMoon(data);
//         }
//    // };

//     // Set moon image based on moon phase

//     return (
//         <div class="eventCard">
//             <h2>Lunar Events</h2>
//             <img src="" alt="moon phase" id="moonPhase" />
//             <div id="moonCard">
//                 Moonrise:<span id="moonrise">{moon.moonrise}</span>
//                 Moonset:<span id="moonset">{moon.moonset}</span>
//             </div>
//         </div>
//     )
// }

// export default Moon
//  (function (err, obj) {

// })
// useEffect(() => {
//     moonData()
// }, [user.lat, user.long])

// const moonData = () => {
//     API.moonData(user.lat, user.long).then(res => {
//         if (res.data) {
//             setMoon(res.data);
//         }
//     })
// }