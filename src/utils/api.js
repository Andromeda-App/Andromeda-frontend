import axios from "axios";
// Local for testing:
// const URL_PREFIX = "http://localhost:3001"
// Deploy at:"https://reactauthdemo-back.herokuapp.com"

const URL_PREFIX = process.env.URL_PREFIX 

const API = {
    getProfile: (tkn)=>{
        return axios.get(`${URL_PREFIX}/profile`,{headers:{
        "Authorization": `Bearer ${tkn}`
      }})
    },
    login:(usrData)=>{
        return axios.post(`${URL_PREFIX}/login`,usrData)
    },
    signup:(usrData)=>{
        return axios.post(`${URL_PREFIX}/signup`,usrData)
    },
    getUserData:(id)=>{
        return axios.get(`${URL_PREFIX}/api/users/${id}`)
    },
    addUserPref:(userPref, token)=>{
        return axios.post(`${URL_PREFIX}/api/users/preferences`,userPref,{
            headers:{
                "Authorization": `Bearer ${token}`
              }
        })
    },
    getAPOD:(data)=>{
        // Here we want to invoke the APOD api to get background image, with a default option to set as assets/background.jpg 
        return 
    }
}

export default API;