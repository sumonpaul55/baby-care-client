/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react';
import { AuthContextInfo } from '../authProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import loadingImg from "loading.json"
const PrivetRoute = ({ children }) => {
    // const navigate = useNavigate();
    const location = useLocation();
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContextInfo);
    if (loading) {
        return <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
            Loading
        </button>
    }
    if (user?.email) {
        return children
    }
    // <Navigate state={location.pathname} to="/login"></Navigate>
    useEffect(() => {
        navigate("/login")
    }, [navigate])

};

export default PrivetRoute;