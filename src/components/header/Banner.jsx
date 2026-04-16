import React from 'react';
import { FaPlus } from "react-icons/fa";
import StatCard from './StatCard';
import friends from "@/static/friends.json";

const stats = [
    { "name": "Total", "value": friends.length },
    { "name": "On Track", "value": friends.filter(friend => friend.status === "On track").length },
    { "name": "Need Attention", "value": friends.filter(friend => friend.status !== "On track").length },
    { "name": "Interactions", "value": 0 }
]


const Banner = () => {
    return (
        <>
            <div className="w-full hero bg-base-200">
                <div className="hero-content text-center flex flex-col justify-center items-center">
                    <div className="max-w-lg py-8">
                        <h1 className="text-5xl font-bold">Friends to keep close.</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                        <button className="btn bg-green-900 text-white"><FaPlus /> Add a Friend</button>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 md:justify-evenly md:items-center py-5 px-4 gap-6 w-full max-w-6xl text-center bg-base-200'>
                        {
                            stats.map((stat, idx) => <StatCard key={idx} stat={stat}></StatCard>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;