/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGooglePlus } from 'react-icons/ai';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextInfo } from '../../../authProvider/AuthProvider';
import { toast } from 'react-toastify';
import HelmetProvider from '../../../shared/HelmetProvider';
import logo from "../../../assets/logo.png"

const Login = () => {
    const { logIn, loginWithGoogle } = useContext(AuthContextInfo)
    const { state } = useLocation();
    const [showPass, setShowpass] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()

    // console.log(state)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(res => {
                toast(`Welcome back ${res.user.displayName}`, {
                    position: "bottom-right",
                    autoClose: 2000
                })
                navigate(state ? state : "/")
            })
            .catch(err => {
                toast(`User or Password may have wrong`, {
                    position: "bottom-right"
                })
            })
    }
    const handlegoolgeLogin = () => {
        loginWithGoogle()
            .then(res => {
                res.user && toast(`Welcome ${res.user.displayName}`, {
                    autoClose: 2000,
                    position: "bottom-right"
                })
                navigate(state ? state : "/")
            })
    }
    return (
        <>
            <HelmetProvider pagename="Login"></HelmetProvider>
            <main className='py-20 bg-slate-400 lg:h-screen'>
                <div className="container mx-auto">
                    <div className='max-w-[600px] mx-auto border rounded-lg p-4 md:p-10 shadow-lg'>
                        <div className='items-center flex justify-between'>
                            <Link to="/" className=''><img src={logo} alt="" className='w-40 mb-7' /></Link>
                            <h2 className='mb-5 font-bold text-center md:text-xl whitespace-nowrap'>Please Login</h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className='space-y-6 font-semibold'>
                                <div>
                                    <label htmlFor="">Email</label><br />
                                    <input type="email" className='w-full p-2 rounded-md' name='email' placeholder='Email' required />
                                </div>
                                <div className='pb-6 relative'>
                                    <label htmlFor="">Password</label><br />
                                    <input type={`${!showPass ? "password" : "text"}`} className='w-full p-2 rounded-md' name='password' placeholder='Password' required />
                                    <span onClick={() => setShowpass(!showPass)} className='absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer'>{!showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
                                </div>
                                <div className=''>
                                    <input type="submit" value="Login" className='btn flex-1 btn-secondary w-full bg-slate-500 cursor-pointer text-white py-2 rounded-md mt-5 hover:bg-slate-600 duration-200' />

                                </div>
                            </div>
                        </form>
                        <p className='mt-7'>Are you new here? Please <Link to="/signup" className='text-primary font-bold'>Sign Up</Link></p>
                        <div className='mt-10'>
                            <p className='font-bold'>You can login with following media</p>
                            <div>
                                <span className='bg-slate-500 cursor-pointer flex justify-center text-4xl w-full text-white mt-5  rounded-full hover:bg-slate-600 duration-200' onClick={handlegoolgeLogin}><AiOutlineGooglePlus /></span>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </>
    );
};

export default Login;