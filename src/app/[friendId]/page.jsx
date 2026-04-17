import FriendDetails from '@/components/main/Details/FriendDetails';
import FriendsActionsProvider from '@/hooks/handleFriendActions';
import React, { Suspense } from 'react';
import friends from "@/static/friends.json";
import { notFound } from 'next/navigation';

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;
    const friend = friends.find(friend => friend.id == friendId);
    if(!friend){
        notFound()
    }

    return (
        <div>
            <FriendDetails friend={friend}></FriendDetails>
        </div>
    );
};

export default FriendDetailPage;