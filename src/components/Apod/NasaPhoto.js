import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;
const backUpPicture = `<div class="video-div"> <img id="backUpImage" src="../../assets/background.jpg" frameborder="0" /></div>`

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=m6Wr9MihDDvs5EkySGkFdMXckAHmh3vUi40nganr`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <>
            <div style={{
                backgroundImage: `url(${photoData.url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vw'
            }}>
                <div className="nasa-photo">
                    {photoData.media_type === "image" ? (
                        <img
                            src=""
                            alt=""
                            className="photo"
                        />
                    ) : (
                        <img
                            src={{ backUpPicture }}
                            alt=""
                        />
                    )}
                    <div>
                        {/* <h1>{photoData.title}</h1> */}
                        {/* <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p> */}
                    </div>
                </div>
            </div>
        </>
    );
}