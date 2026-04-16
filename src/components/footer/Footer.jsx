import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
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
                    <Link href={"https://www.facebook.com"}>
                        <FaFacebook />
                    </Link>
                    <Link href={"https://www.x.com"}>
                        <FaTwitter />
                    </Link>
                    <Link href={"https://www.youtube.com"}>
                        <FaYoutube />
                    </Link>
                </div>
            </nav>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>

    );
};

export default Footer;