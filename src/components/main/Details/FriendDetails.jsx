import React from 'react';
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaArchive } from "react-icons/fa";


const FriendDetails = ({ friendId }) => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='flex flex-col justify-center items-center'>
                <div></div>
                <div className='flex justify-center items-center gap-2'><RiNotificationSnoozeFill/> Snooze 2 weeks</div>
                <div className='flex justify-center items-center gap-2'><FaArchive/> Archive</div>
                <div className='flex justify-center items-center gap-2'><MdDelete/> Delete</div>
                <div></div>
            </div>
            <div></div>
        </div>
    );
};

export default FriendDetails;