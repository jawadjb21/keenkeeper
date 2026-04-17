import FriendDetails from '@/components/main/Details/FriendDetails';
import FriendsActionsProvider from '@/hooks/handleFriendActions';
import React, { Suspense } from 'react';

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;
    return (
        <div>
            <FriendsActionsProvider>
                <FriendDetails friendId={friendId}></FriendDetails>
            </FriendsActionsProvider>
        </div>
    );
};

export default FriendDetailPage;