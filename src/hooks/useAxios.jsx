import axios, { } from 'axios';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AuthContextInfo } from '../authProvider/AuthProvider';


//------------------ "http://localhost:5000"
// ----------------------------------------  "https://littlestarscare-server.vercel.app"

const baseURL = "https://littlestarscare-server.vercel.app"


const useAxiosSecure = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

const useAxios = () => {
    const { logOut } = useContext(AuthContextInfo)
    useEffect(() => {
        useAxiosSecure.interceptors.response.use(res => {
            return res
        }, err => {
            // return err
            // console.log(err.response)
            if (err?.response?.status === 401 || err?.response?.status === 403) {
                logOut()
                    .then(() => {
                        toast("You have loggout for You UnAuthorized Access", {
                            position: "top-right",
                            autoClose: 3000,
                        })
                        // navigate("/login")
                    }).catch(err => {
                        toast(err)
                    })
            }
        })
    }, [logOut])
    return useAxiosSecure
};
export default useAxios;