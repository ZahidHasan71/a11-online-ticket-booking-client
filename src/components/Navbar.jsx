// Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/" >Home</NavLink></li>
    </>


    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="navbar h-16 flex items-center justify-between">

                    {/* Navbar Start - Logo + Mobile Dropdown */}
                    <div className="navbar-start">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-1">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">
                            <Logo></Logo>
                        </a>
                    </div>

                    {/* Navbar Center - Desktop Links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            {links}
                        </ul>
                    </div>

                    {/* Navbar End - Desktop Buttons */}
                    <div className="navbar-end hidden lg:flex gap-2">
                        <a className="btn btn-outline">Login</a>
                        <a className="btn btn-primary">Register</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;