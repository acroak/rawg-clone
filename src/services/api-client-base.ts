import axios from "axios";

// remove the -base appended to the file name for customized personal API useage
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '' // API key can be found in your rawg account
    }
})