import React from 'react';
import { FaPlus } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-2">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Friends to keep close.</h1>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-success text-white"><FaPlus/> Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;