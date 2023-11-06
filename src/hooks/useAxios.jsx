import axios, { } from 'axios';
// 
// 
// "http://localhost:5000"
// import axios from 'axios';
const baseURL = "http://localhost:5000"
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