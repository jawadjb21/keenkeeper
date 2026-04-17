import React from 'react';
import { MdAddCall } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const TimelineCard = ({ action, friend, date }) => {
    console.log(date);
    const actionIcon = action.toLowerCase() === "call" ? <MdAddCall /> : action.toLowerCase() === "video" ? <FaVideo/> : <IoIosText/>
    return (
        <div className='w-100 flex justify-start items-center gap-4 text-left border border-gray-300 rounded-xl p-6 shadow-sm'>
            <span className='text-2xl'>{actionIcon}</span>
            <div className='flex flex-col justify-between items-start'>
                <h3 className='font-semibold text-2xl'>{action.toUpperCase()} with {friend.name}</h3>
                <p>{date.substring(0,10)}</p>
            </div>
        </div>
    );
};

export default TimelineCard;