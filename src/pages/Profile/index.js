import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import "./style.css";
import API from '../../utils/API';


function Profile(props) {
    const [user, setUser] = useState({
        email:"",
        id:""
    })
    const {id} = useParams();
    useEffect(()=>{
        loadUser()
    },[id])

    const loadUser = ()=>{
        API.getUserData(id).then(res=>{
            if(res.data){
                setUser(res.data);
            }
        })
    }
    return (
        <div>
        {!user.email?<h1>No such user!</h1>:(
        <div>
            <h1>{user.email}'s profile!</h1>
        </div>
        )}
        </div>
    )
}

export default Profile;