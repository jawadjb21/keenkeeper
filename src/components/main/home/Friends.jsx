import React from 'react';
import friends from "@/static/friends.json";
import Image from "next/image";
import FriendCard from '@/components/main/home/FriendCard';

const Friends = () => {
    return (
        <div className='my-4 space-y-2'>
            <p className='ml-2 text-2xl font-bold'>Friends</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 px-10'>
                {friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)}
            </div>
        </div>
    );
};

export default Friends;