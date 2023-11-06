/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react';
import { AuthContextInfo } from '../authProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading';
// import loadingImg from "loading.json"
const PrivetRoute = ({ children }) => {
    // const navigate = useNavigate();
    const location = useLocation();
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContextInfo);
    if (loading) {
        return <Loading></Loading>
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    // useEffect(() => {
    //     navigate("/login")
    // }, [navigate])

};

export default PrivetRoute;