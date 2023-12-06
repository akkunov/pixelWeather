import axios from "axios";
//q=Бишкек&appid=d47577b8e70310f099256fd7de350c6d&lang=ru
const basUrl = `https://api.openweathermap.org/data/2.5/weather`

export const $api = axios.create({
    baseURL: basUrl,
})

// $api.interceptors.request.use((config) =>{
//     console.log(config)
//     return config
// } )