"use client";
import React, { useContext } from 'react';
import { MdAddCall } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FriendsActionsContext } from '@/hooks/handleFriendActions';


const FriendActions = ({ friend }) => {
    const context = useContext(FriendsActionsContext);
    if (!context) throw new Error("Missing FriendsActionsContext provider");

    const { handleFriendsActions } = context;
    return (
        <div>
            <div className='flex flex-col justify-center items-start gap-4 border border-gray-300 rounded-xl p-6 shadow-sm'>
                <p className='text-gray-500'>Quick Check-In</p>
                <div className='flex justify-between items-center w-full'>
                    <button className='btn btn-outline text-center px-4' onClick={() => { handleFriendsActions("call", friend, Date.now()) }}>
                        <p className='font-bold text-2xl'><MdAddCall /></p>
                        <p className='text-sm text-gray-500'>Call</p>
                    </button>
                    <button className='btn btn-outline text-center px-4' onClick={() => { handleFriendsActions("video", friend, Date.now()) }}>
                        <p className='font-bold text-2xl'><FaVideo /></p>
                        <p className='text-sm text-gray-500'>Video</p>
                    </button>
                    <button className='btn btn-outline text-center px-4' onClick={() => { handleFriendsActions("text", friend, Date.now()) }}>
                        <p className='font-bold text-2xl'><IoIosText /></p>
                        <p className='text-sm text-gray-500'>Text</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FriendActions;