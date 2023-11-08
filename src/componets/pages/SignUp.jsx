import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { AiOutlineGoogle } from "react-icons/ai"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextInfo } from '../../authProvider/AuthProvider';

const SignUp = () => {
    const { signUp, loginWithGoogle } = useContext(AuthContextInfo)
    const navigate = useNavigate()
    const { state } = useLocation()
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)
        signUp(email, password)
            .then(res => {
                if (res.user) {
                    updateProfile(res.user, {
                        displayName: name,
                        photoURL: photo,
                    }).then().catch()
                }
                toast(`Welcome ${name}`, { position: "top-right", autoClose: 2000 });
                navigate(state ? state : "/")
            })
            .catch(err => {
                toast(`${err.message}`, { position: "top-right", })
            })
        form.reset();
    }
    // login with google
    const handlegoolgeLogin = () => {
        loginWithGoogle()
            .then(res => {
                res.user && toast(`Welcome back ${res.user.displayName}`, {
                    autoClose: 2000,
                    position: "top-right"
                })
                navigate(state ? state : "/")
            }).catch(err => {
                toast(err)
            })
    }
    return (
        <main className='py-20 bg-slate-400 lg:h-screen'>
            <div className="container mx-auto">
                <div className='max-w-[600px] mx-auto border rounded-lg p-4 md:p-10 shadow-lg'>
                    <h2 className='mb-5 font-bold text-center md:text-xl'>Please Register</h2>
                    <form onSubmit={handleSignup}>
                        <div className='space-y-6 font-semibold'>
                            <div>
                                <label htmlFor="">Name</label><br />
                                <input type="text" className='w-full p-2 rounded-md' name='name' placeholder='Name' required />
                            </div>
                            <div>
                                <label htmlFor="">Photo url</label><br />
                                <input type="text" className='w-full p-2 rounded-md' name='photo' placeholder='Photo url' required />
                            </div>
                            <div>
                                <label htmlFor="">Email</label><br />
                                <input type="email" className='w-full p-2 rounded-md' name='email' placeholder='Email' required />
                            </div>
                            <div>
                                <label htmlFor="">Password</label><br />
                                <input type="password" className='w-full p-2 rounded-md' name='password' placeholder='Password' required />
                                <span></span>
                            </div>
                            <input type="submit" value="Sign Up" className='btn btn-secondary w-full bg-slate-500 cursor-pointer text-white py-2 rounded-md mt-5 hover:bg-slate-600 duration-200' />
                        </div>
                    </form>
                    <p className='mt-7'>Do you have an Account? please <Link to="/login" className='text-primary font-bold'>Login</Link></p>
                    <div className='mt-10'>
                        <p className='font-bold'>You can login with following media</p>
                        <div>
                            <span onClick={handlegoolgeLogin} className='bg-slate-500 cursor-pointer flex justify-center text-4xl w-full text-white mt-5  rounded-full hover:bg-slate-600 duration-200'><AiOutlineGoogle /></span>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;