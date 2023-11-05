import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "./navbar.css"
import { AuthContextInfo } from '../../authProvider/AuthProvider';
import { toast } from 'react-toastify';
import { RxAvatar } from 'react-icons/rx'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContextInfo)
    const [toggle, setToggle] = useState(false)
    const handleToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle)
    }
    document.body.addEventListener("click", () => {
        setToggle(false)
    })
    // hadle logout
    const handleLogout = () => {
        logOut()
            .then(res => {
                res && toast("You have logout successfully")
            }).catch(err => {
                toast(err)
            })
    }
    return (
        <nav className='px-1 md:px-1 border-bottom py-1 bg-slate-700 items-center shadow relative'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} className='w-52' alt="logo" />
                    </div>
                    <div>
                        <ul className='flex gap-5 absolute w-full left-0 top-20 z-[9999] flex-col lg:flex-row bg-slate-500 lg:bg-transparent justify-center items-center py-5 lg:py-0 lg:static'>
                            <li><NavLink className="text-slate-300 border py-2 px-4 rounded-md border-slate-500" to="/">Home</NavLink></li>
                            <li><NavLink className="text-slate-300 border py-2 px-4 rounded-md border-slate-500" to="/all-service">All Service</NavLink></li>
                            <li><NavLink className="text-slate-300 font-semibold border py-2 px-4 rounded-md border-slate-500" to="/my-schedule">My Schedule</NavLink></li>
                            <li><NavLink className="text-slate-300 border py-2 px-4 rounded-md border-slate-500" to="/my-bookings">Bookings</NavLink></li>
                            <li><NavLink className="text-slate-300 border py-2 px-4 rounded-md border-slate-500" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className='user text-white font-semibold relative'>
                        <div>
                            {
                                user?.email ?
                                    <div className='flex items-center gap-1 cursor-pointer' onClick={handleToggle}>
                                        <img src={user?.photoURL} className='w-10 rounded-full h-10' alt="" />
                                        <h3 className=''>{user?.displayName}</h3>
                                    </div> :

                                    <div className='flex items-center gap-1'>
                                        <span><RxAvatar /></span>
                                        <Link to="/login">Login</Link>
                                    </div>}
                        </div>
                        <div className={`absolute -bottom-20 p-4 bg-slate-500 ${toggle ? "block" : "hidden"}`}>
                            <button className='text-white z-10 relative' onClick={handleLogout}>Log out</button>
                            <div className="absolute w-10 h-10 bg-slate-500 rotate-45 top-0 left-1/2 -translate-x-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <button className='text-white border p-1 border-slate-600 rounded-md'>Dashboard</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;