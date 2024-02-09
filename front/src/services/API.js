import axios from 'axios'


export default ()=>{
    return axios.create({
        //baseURL: `http://localhost:2100/`
        baseURL: `http://172.16.0.40:3100/`
    })
}