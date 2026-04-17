"use client";
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Suspense, useState, useEffect } from 'react';


const Footer = () => {
    const [year, setYear] = useState(null);

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return (
        <footer className="footer footer-horizontal footer-center bg-green-900 text-primary-content p-10">
            <aside>
                <p className="font-bold text-4xl">
                    KeenKeeper
                </p>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-3xl">
                    <a href={"https://www.facebook.com"}>
                        <FaFacebook />
                    </a>
                    <a href={"https://www.x.com"}>
                        <FaTwitter />
                    </a>
                    <a href={"https://www.youtube.com"}>
                        <FaYoutube />
                    </a>
                </div>
            </nav>
            <p>Copyright © {year} - All right reserved</p>
        </footer>

    );
};

export default Footer;