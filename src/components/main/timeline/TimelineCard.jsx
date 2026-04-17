import React from 'react';
import { MdAddCall } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const TimelineCard = ({ action, friend, date }) => {
    const now = new Date(date);
    console.log(action, friend, now);
    const actionIcon = action.toLowerCase() === "call" ? <MdAddCall /> : action.toLowerCase() === "video" ? <FaVideo/> : <IoIosText/>
    return (
        <div>

        </div>
    );
};

export default TimelineCard;