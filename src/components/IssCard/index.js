import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import API from "../../utils/API";

function issFlyover(props) {
    
    const { id } = useParams();


    
    return (
        <div class="eventCard">
        <h2>ISS Flyover</h2>
        <div id="issCard">Information Goes Here!</div>
    </div>
    );
  }
  
  export default issFlyover;