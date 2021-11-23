import React,{useState,useEffect} from 'react';
import "./style.css";
import API from '../../utils/API';


function Home(props) {
    const [user, setUser] = useState([])
    useEffect(()=>{
       loadUsers()
    },[])
    const loadUsers = ()=>{
        API.getAllUsers().then(res=>{
            setUser(res.data);
        })
    }
    return (
        <div className="Home">
            <h1>Home</h1>
        </div>
    )
}

export default  Home;