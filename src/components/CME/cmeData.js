import axios from "axios"

const nasaEndpoint = "https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=m6Wr9MihDDvs5EkySGkFdMXckAHmh3vUi40nganr"
const nasaApiKey = "m6Wr9MihDDvs5EkySGkFdMXckAHmh3vUi40nganr"

axios.interceptors.request.use(
    config => {
        config.params = config.params ? config.params : {}
        const configUrl = config.url
        if (configUrl.includes(nasaEndpoint)) {
            config.params["api_key"] = nasaApiKey
        }

        return config
    },
    error => {
        return Promise.reject(error)
    },
)

export default {
    getCME() {
        console.log(axios.get(`${nasaEndpoint}`))
        return axios.get(`${nasaEndpoint}`)

    },
}
