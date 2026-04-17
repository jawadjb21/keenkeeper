import React from 'react';
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaArchive } from "react-icons/fa";
import Image from 'next/image';

const FriendCard = ({ friend }) => {
    const statusColor = friend.status === "On track" ? "bg-green-500" : friend.status === "Overdue" ? "bg-red-500" : "bg-yellow-300";
    return (
        <div className='flex flex-col gap-4 w-75'>
            <div className='flex flex-col items-center border border-gray-300 rounded-xl p-4 shadow-sm gap-3'>
                <Image
                    className='rounded-full border border-gray-300'
                    src={friend.picture}
                    alt='Image of the friend'
                    width={100}
                    height={100}
                    loading='eager'
                />
                <p className='font-bold text-2xl'>{friend.name}</p>

                <p className={`${statusColor} rounded-xl px-4 py-2 border border-gray-300`}>
                    {friend.status}
                </p>

                <div className='flex flex-wrap justify-center gap-2'>
                    {friend.tags?.map((tag, index) => (
                        <p
                            key={index}
                            className='bg-green-300 rounded-2xl px-3 py-1 border border-gray-300'
                        >
                            {tag}
                        </p>
                    ))}
                </div>

                <p className='text-sm border-t pt-2 w-full'>{friend.bio}</p>
                <p className='text-sm text-gray-600'>{friend.email}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 shadow-sm hover:bg-gray-100 cursor-pointer'>
                    <RiNotificationSnoozeFill /> Snooze 2 weeks
                </button>

                <button className='flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 shadow-sm hover:bg-gray-100 cursor-pointer'>
                    <FaArchive /> Archive
                </button>

                <button className=' text-red-500 flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 shadow-sm hover:bg-red-50 cursor-pointer'>
                    <MdDelete /> Delete
                </button>
            </div>
        </div>
    );
};

export default FriendCard;