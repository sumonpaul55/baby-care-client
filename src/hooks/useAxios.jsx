import axios, { } from 'axios';


// "http://localhost:5000"
// const baseURL = "https://littlestarscare-server.vercel.app"
const baseURL = "https://littlestarscare-server.vercel.app"
const useAxiosSecure = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

// const instance = axios.create({
//     baseURL: "http://localhost:5000",
//     withCredetials: true,
// })
const useAxios = () => {
    return useAxiosSecure
};
export default useAxios;