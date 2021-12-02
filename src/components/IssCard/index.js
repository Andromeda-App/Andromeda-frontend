import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import API from "../../utils/API";


function issFlyover(props) {

    const { id } = useParams();



    return (
        <div className="eventCard">
            <h2>ISS Flyover</h2>
            <div id="issCard">
            <div className="header">
    <div>
      <h1>International Space Station Tracker</h1>
    </div>
    <div className="head-img-container">
      <img src="../src/assets/Images/International_Space_Station_white.svg.png" alt="" srcset="">
    </div>
  </div>
  <div className="main-container">
    <div className="panel-container">
      <div className="orbital-data">
        <h4>Orbital Data</h4>
        <p>Latitude: <span id="lat-data"></span></p>
        <p>Longitude: <span id="long-data"></span></p>
        <p>Velocity: <span id="velocity"></span><strong> km/s</strong></p>
        <p>Altitude: <span id="altitude"></span><strong> km</strong></p>
        <p>ISS Visibility: <strong><span id="visibility"></span></strong></p>
        <p id="iss-horizon"><img id="iss-horizon-img" src="../src/assets/Images/PinClipart.com_pete-the-cat-buttons_1571732.png" alt=""><span> ISS Horizon</span></p>
      </div>
      <div>
        <button onclick="centreMap()">Find ISS <i className="fas fa-crosshairs"></i></button>
      </div>
      <div className="spacecraft-data">
        <h4>Spacecraft @ ISS</h4>
        <p><a id="craftwiki0" href="" target="_blank"><span id="craftname0"></span></a> <span id="craftflag0"><img id="craftimg0" src=""/></span></p>
        <p><a id="craftwiki1" href="" target="_blank"><span id="craftname1"></span></a> <span id="craftflag1"><img id="craftimg1" src=""/></span></p>
        <p><a id="craftwiki2" href="" target="_blank"><span id="craftname2"></span></a> <span id="craftflag2"><img id="craftimg2" src=""/></span></p>
        <p><a id="craftwiki3" href="" target="_blank"><span id="craftname3"></span></a> <span id="craftflag3"><img id="craftimg3" src=""/></span></p>
        <p><a id="craftwiki4" href="" target="_blank"><span id="craftname4"></span></a> <span id="craftflag4"><img id="craftimg4" src=""/></span></p>
        <p><a id="craftwiki5" href="" target="_blank"><span id="craftname5"></span></a> <span id="craftflag5"><img id="craftimg5" src=""/></span></p>
      </div>
    </div>
    <div id="map-container"></div>
    <div className="panel-container">
        <div className="astro-data">
          <h4>Current Crew</h4>
          <p><a id="crewwiki0" href="" target="_blank"><span id="crewname0"></span></a>* <span id="crewflag0"><img id="crewimg0" src=""/></span></p>
          <p><a id="crewwiki1" href="" target="_blank"><span id="crewname1"></span></a> <span id="crewflag1"><img id="crewimg1" src=""/></span></p>
          <p><a id="crewwiki2" href="" target="_blank"><span id="crewname2"></span></a> <span id="crewflag2"><img id="crewimg2" src=""/></span></p>
          <p><a id="crewwiki3" href="" target="_blank"><span id="crewname3"></span></a> <span id="crewflag3"><img id="crewimg3" src=""/></span></p>
          <p><a id="crewwiki4" href="" target="_blank"><span id="crewname4"></span></a> <span id="crewflag4"><img id="crewimg4" src=""/></span></p>
          <p><a id="crewwiki5" href="" target="_blank"><span id="crewname5"></span></a> <span id="crewflag5"><img id="crewimg5" src=""/></span></p>
          <p><a id="crewwiki6" href="" target="_blank"><span id="crewname6"></span></a> <span id="crewflag6"><img id="crewimg6" src=""/></span></p>
          <p>* <span id="commander">Expedition Commander</span></p>
          <p id="expedition">Expedition<span id="exp"></span></p>
          <div id="exp-img-container">
            <a href="https://en.wikipedia.org/wiki/Expedition_64" target="_blank"><img id="exp-img" src="../src/assets/Images/1024px-ISS_Expedition_64_Patch.png"
                  alt="ISS Expedition 64 mission patch"
                  title="ISS Expedition 64 mission insignia">
            </a>
          </div>
        </div>
      </div>
  </div>  
            </div>
        </div>
    );
}

export default issFlyover;