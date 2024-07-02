import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '' // API key can be found in your rawg account
    }
})