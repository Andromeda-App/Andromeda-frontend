// import { getAllByPlaceholderText } from "@testing-library/dom";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
// import API from "../../utils/API";

// const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
// const apiKey = "m6Wr9MihDDvs5EkySGkFdMXckAHmh3vUi40nganr";
// const title = document.querySelector("#title");
// const copyright = document.querySelector("#copyright");
// const mediaSection = document.querySelector("#media-section");
// const information = document.querySelector("#description");
// const imageSection = `<a id="hdimg" href="" target="-blank">
//      <div class="image-div">
//      <img id="image_of_the_day" src="" alt="image-by-nasa">
//      </div>
//      </a>`

// const videoSection = `<div class="video-div"> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`
// const backUpPicture = `<div class="video-div"> <img id="backUpImage" src="../../../assets/background.jpg" frameborder="0" /></div>`

// function fetchData() {
//     try {
//         fetch(baseUrl + apiKey)
//             .then(response => response.json())
//             .then(json => {
//                 console.log(json)
//                 displaydata(json)
//             })
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchData()

// function displaydata(data) {
//     title.innerHTML = data.title;
//     information.innerHTML = data.explanation;
//     if (data.hasOwnProperty("copyright")) {
//         copyright.innerHTML = data.copyright;
//     } else {
//         copyright.innerHTML = ""
//     }
//     if (data.media_type == "image") {
//         mediaSection.innerHTML = imageSection;
//         document.getElementById("hdimg").href = data.hdurl;
//         document.getElementById("image_of_the_day").src = data.url;

//     } else {
//         // mediaSection.innerHTML = backUpPicture;
//         document.body.style.background = `url("../../../assets/background.jpg") no-repeat center fixed`
//         document.body.style.backgroundSize = `cover`
//     }
// function getApod(props) {
//     // Props will 

//     const { id } = useParams();


    
//     return (
//         // <Put background url in>
//         </>
//     );
//   }
  
//   export default getApod;