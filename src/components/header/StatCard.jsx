import React from 'react';
import { stats } from "@/static/stats.json";

const StatCard = ({ stat }) => {
    return (
        <div className='flex flex-col justify-center items-center w-full border-2  border-mist-300 shadow p-5 space-y-2'>
            <p className='font-semibold text-2xl'>{stat.value}</p>
            <p className='font-medium w-full max-w-lg'>{stat.name}</p>
        </div>
    );
};

export default StatCard;