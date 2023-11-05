import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "./navbar.css"
import { AuthContextInfo } from '../../authProvider/AuthProvider';
import { toast } from 'react-toastify';
import { RxAvatar } from 'react-icons/rx'
import { AiOutlineBars } from 'react-icons/ai';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContextInfo)
    const [toggle, setToggle] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false)
    const [dashtoggle, setDashtoggle] = useState(false)
    const handleToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle)
    }
    console.log(user)
    document.body.addEventListener("click", () => {
        setToggle(false)
        setDashtoggle(false)
        setMenuToggle(false)
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
    const handleDashboard = (e) => {
        e.stopPropagation();
        setDashtoggle(!dashtoggle)
    }
    const handleMenu = (e) => {
        e.stopPropagation();
        setMenuToggle(!menuToggle)
    }
    return (
        <nav className='px-1 md:px-1 border-bottom py-1 bg-slate-700 items-center shadow relative'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to="/"><img src={logo} className='w-28 md:w-40 lg:w-48' alt="logo" /></Link>
                    </div>
                    <div>
                        <ul className={`flex gap-5 duration-300 absolute w-full top-12 z-[9999] flex-col lg:flex-row bg-slate-500 lg:bg-transparent justify-center items-center py-5 lg:py-0 lg:static ${!menuToggle ? "right-full" : "right-0"}`}>
                            <li><NavLink className="text-slate-300 py-2 px-4 rounded-md" to="/">Home</NavLink></li>
                            <li><NavLink className="text-slate-300 py-2 px-4 rounded-md" to="/all-service">All Service</NavLink></li>
                            <li><NavLink className="text-slate-300 font-semibold py-2 px-4 rounded-md" to="/my-schedule">My Schedule</NavLink></li>
                            <li><NavLink className="text-slate-300 py-2 px-4 rounded-md" to="/my-bookings">Bookings</NavLink></li>
                            <li><NavLink className="text-slate-300 py-2 px-4 rounded-md" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className='user text-white font-semibold relative'>
                        <div>
                            {
                                user?.email ?
                                    <div className='flex items-center gap-1 cursor-pointer' onClick={handleToggle}>
                                        <img src={user.photoURL} className='w-10 rounded-full h-10' alt="" />
                                        <h3 className=''>{user?.displayName}</h3>
                                    </div> :
                                    <div className='flex items-center gap-1'>
                                        <span><RxAvatar /></span>
                                        <Link to="/login">Login</Link>
                                    </div>}
                        </div>
                        <div className={`absolute -bottom-20 p-4 z-[9999] bg-slate-500 ${toggle ? "block" : "hidden"}`}>
                            <button className='text-white z-10 relative' onClick={handleLogout}>Log out</button>
                            <div className="absolute w-10 h-10 bg-slate-500 rotate-45 top-0 left-1/2 -translate-x-1/2"></div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <button className='text-white border p-1 border-slate-600 rounded-md' onClick={handleDashboard}>Dashboard</button>
                        <div className='lg:hidden'>
                            <span className='text-white border-slate-600 block shadow border text-xl p-1 rounded-sm px-2' onClick={handleMenu}><AiOutlineBars /></span>
                        </div>
                        <div onClick={(e) => e.stopPropagation()} className={`p-4 bg-slate-500 absolute top-full border z-[9999] -translate-x-[30%] md:-translate-x-[50%] duration-200 shadow-2xl shadow-slate-600 rounded-md ${!dashtoggle ? "right-full" : "right-0"}`}>
                            <ul>
                                <li className='text-white hover:text-slate-300 duration-200'><Link to="/add-service">Add Service</Link></li>
                            </ul>
                            {/* <div className="absolute w-10 h-10 bg-slate-500 rotate-45 top-0 -z-10 left-1/2 -translate-x-1/2"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;