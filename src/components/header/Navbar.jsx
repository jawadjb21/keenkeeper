"use client";
import React from 'react';
import navLinks from "@/static/navLinks.json"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-5 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                            {navLinks.map(link => <Link key={link.id} href={link.path}><button className='cursor-pointer'>{link.icon} {link.name}</button></Link>)}
                        </ul>
                    </div>
                    <p className='text-center md:text-left text-green-500 text-4xl'><span className='font-bold'>Keen</span>Keeper</p>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {navLinks.map(link => <Link key={link.id} href={link.path}><button className={`${pathname === link.path ? 'active-link text-white' : ''} btn text-black cursor-pointer`}>{link.icon} {link.name}</button></Link>)}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;