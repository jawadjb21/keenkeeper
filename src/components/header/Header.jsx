import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <Banner></Banner>
        </div>
    );
};

export default Header;