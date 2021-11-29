import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import "./style.css"
import API from '../../utils/api.js';

export default function Preferences(props) {
    const [userPrefs, setUserPrefs] = useState({
        meteor:true,
        aurora:true,
        eclipseL:true,
        eclipseS:true,
        moonPhase:true
    })
    const navigate = useNavigate();
    useEffect(() => {
        if(!props.token){
            navigate('/home')
        }
    }, [props.token])

    const handleInputChange= e=>{
        const {name,value} = e.target;
        setUserPrefs({
            ...userPrefs,
            [name]:value
        })
    }

    const handleFormSubmit = e=>{
        e.preventDefault();
        API.addUserPref(userPrefs,props.token).then(res=>{
            console.log(res.data);
            navigate('/home')
        })
    }


    return (
        <div className="Preferences">
            <h1>Preferences</h1>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange} value={userPrefs.meteor} name="meteor" placeholder="meteor"/>
                <button>Meteor Shower?</button>
            </form>
        </div>
    )
}