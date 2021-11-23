import axios from "axios";
// Local for testing:
const URL_PREFIX = "http://localhost:3001"
// Deploy at:
// const URL_PREFIX = "https://reactauthdemo-back.herokuapp.com"

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
    }
}

export default API;