"use client";
import React, { useContext } from 'react';
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { MdDelete, MdAddCall } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaArchive, FaVideo } from "react-icons/fa";
import Image from 'next/image';
import friends from "@/static/friends.json";
import { FriendsActionsContext } from '@/hooks/handleFriendActions';


const FriendDetails = ({ friendId }) => {
    const friend = friends.find(friend => friend.id == friendId);
    const statusColor = friend.status === "On track" ? "bg-green-500" : friend.status === "Overdue" ? "bg-red-500" : "bg-yellow-300";

    const {friendsActions, handleFriendsActions} = useContext(FriendsActionsContext);

    return (
        <div className='text-center flex flex-col md:flex-row justify-center items-center md:items-start gap-6 p-6'>

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
                        {friend.tags.map((tag, index) => (
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
                    <div className='flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 shadow-sm hover:bg-gray-100 cursor-pointer'>
                        <RiNotificationSnoozeFill /> Snooze 2 weeks
                    </div>

                    <div className='flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 shadow-sm hover:bg-gray-100 cursor-pointer'>
                        <FaArchive /> Archive
                    </div>

                    <div className=' text-red-500 flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 shadow-sm hover:bg-red-50 cursor-pointer'>
                        <MdDelete /> Delete
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>

                <div className='flex gap-4 border border-gray-300 rounded-xl p-6 shadow-sm'>

                    <div className='text-center border-r pr-4'>
                        <p className='font-bold text-2xl'>{friend.days_since_contact}</p>
                        <p className='text-sm text-gray-500'>Days Since Contact</p>
                    </div>

                    <div className='text-center border-r px-4'>
                        <p className='font-bold text-2xl'>{friend.goal}</p>
                        <p className='text-sm text-gray-500'>Goal (Days)</p>
                    </div>

                    <div className='text-center pl-4'>
                        <p className='font-bold text-2xl'>{friend.next_due_date}</p>
                        <p className='text-sm text-gray-500'>Next Due</p>
                    </div>

                </div>

                <div className='flex flex-col justify-center items-start gap-4 border border-gray-300 rounded-xl p-6 shadow:sm'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-gray-500'>Relationship Goal</p>
                        <button className='btn btn-ghost'>Edit</button>
                    </div>
                    <p className='text-gray-500'>Connect every: <span className='font-bold text-2xl'>{friend.goal} days</span></p>
                </div>

                <div className='flex flex-col justify-center items-start gap-4 border border-gray-300 rounded-xl p-6 shadow:sm'>
                    <p className='text-gray-500'>Quick Check-In</p>
                    <div className='flex justify-between items-center w-full'>
                        <button className='btn btn-outline text-center px-4' onClick={() => {handleFriendsActions("call", friend)}}>
                            <p className='font-bold text-2xl'><MdAddCall /></p>
                            <p className='text-sm text-gray-500'>Call</p>
                        </button>
                        <button className='btn btn-outline text-center px-4' onClick={() => {handleFriendsActions("video", friend)}}>
                            <p className='font-bold text-2xl'><FaVideo /></p>
                            <p className='text-sm text-gray-500'>Video</p>
                        </button>
                        <button className='btn btn-outline text-center px-4' onClick={() => {handleFriendsActions("text", friend)}}>
                            <p className='font-bold text-2xl'><IoIosText /></p>
                            <p className='text-sm text-gray-500'>Text</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;