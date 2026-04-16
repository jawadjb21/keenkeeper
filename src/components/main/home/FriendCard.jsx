import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const FriendCard = ({ friend }) => {
    const { status } = friend;
    console.log(status);
    const statusColor = status === "On track" ? "bg-green-500" : status === "Overdue" ? "bg-red-500" : "bg-yellow-300"
    const handleClick = () => {

    }
    return (
        <Link href={`/${friend.id}`}>
            <div className='border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-center gap-3 w-65 cursor-pointer'>

                {/* Avatar */}
                <Image
                    className='rounded-full border border-gray-300'
                    src={friend.picture}
                    alt='Image of the friend'
                    width={90}
                    height={90}
                />

                {/* Name */}
                <p className='font-semibold text-xl'>{friend.name}</p>

                {/* Days since contact */}
                <p className='text-sm text-gray-500'>
                    {friend.days_since_contact} days ago
                </p>

                {/* Tags */}
                <div className='flex flex-wrap justify-center gap-2'>
                    {friend.tags.map((tag, index) => (
                        <span
                            key={index}
                            className='text-xs bg-gray-100 border border-gray-300 rounded-full px-3 py-1'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Status */}
                <div className='w-full flex justify-center pt-2 border-t'>
                    <span className={`${statusColor} text-white text-sm rounded-full px-4 py-1 border border-gray-300`}>
                        {friend.status}
                    </span>
                </div>

            </div>
        </Link>
    );
};

export default FriendCard;