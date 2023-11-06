import axios, { } from 'axios';
// 
// 
// "http://localhost:5000"
// import axios from 'axios';
const baseURL = "https://littlestarscare-server-2ysiyfh4e-sumonpaul55s-projects.vercel.app"
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