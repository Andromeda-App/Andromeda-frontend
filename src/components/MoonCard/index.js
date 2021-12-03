// Lunar Events
import React, { useReducer } from 'react'
import "./style.css"
var Xray = require('x-ray')
var x = Xray()

export default function moonData(props) {
    const [moon, setMoon] = useState({
        moonrise: "",
        peak: "",
        moonset: "",
        phase: ""
    })
    // var url = "https://www.mooncalc.org/#/" + user.lat + "," + user.long;
    // x(url, '#FensterF2', 'span')(function (err, header) {
    //     header // => Pear
    // }
} (function (err, obj) {
    /*
    {
      title: 'mat.io',
      items: [
        {
          title: 'The 100 Best Children\'s Books of All Time',
          description: 'Relive your childhood with TIME\'s list...'
        }
      ]
    }
  */
})
useEffect(() => {
    moonData()
}, [user.lat, user.long])

const moonData = () => {
    API.moonData(user.lat, user.long).then(res => {
        if (res.data) {
            setMoon(res.data);
        }
    })
}

return (
    <div class="eventCard">
        <h2>Lunar Events</h2>
        <img src="" alt="moon phase" id="moonPhase" />
        <div id="moonCard">
            Moonrise:<span id="moonrise"></span>
            Moonset:<span id="moonset"></span>
        </div>
    </div>
)


