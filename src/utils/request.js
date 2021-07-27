import axios from 'axios'
const request = axios.create({
    baseURL:"/api",
    timeout:10000
})

request.interceptors.request.use((config)=>{
    return config
})

request.interceptors.response.use((res)=>{
    if(res.status ===200){
        return res.data
    }else{
        return Promise.reject(res.status)
    }
},(e)=>{
    return Promise.reject(e)
})

export default request