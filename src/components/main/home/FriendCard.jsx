import Image from 'next/image';
import React from 'react';

const FriendCard = ({ friend }) => {
    const {status} = friend;
    console.log(status);
    const statusColor = status === "On track" ? "bg-green-500" : status === "Overdue" ? "bg-red-500" : "bg-yellow-300"
    return (
        <div className='border border-mist-500 shadow rounded-xl flex flex-col justify-center items-center gap-3 space-y-1.5 py-4'>
            <Image className='rounded-full' src={friend.picture} alt='Image of the friend' width={100} height={50}></Image>
            <p className='font-bold text-2xl'>{friend.name}</p>
            <p>{friend.days_since_contact}d ago</p>
            <div className='flex justify-between items-center gap-2'>
                {
                    friend.tags.map((tag, index) => <p key={index} className='bg-green-300 rounded-2xl px-4'>{tag}</p>)
                }
            </div>
            <p className={`${statusColor} rounded-xl px-4 py-2`}>{friend.status}</p>
        </div>
    );
};

export default FriendCard;