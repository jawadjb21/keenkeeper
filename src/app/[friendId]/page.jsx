import FriendDetails from '@/components/main/Details/FriendDetails';
import React from 'react';

const FriendDetailPage = async ({ params }) => {
    const {friendId} = await params;
    return (
        <div>
            <FriendDetails friendId={friendId}></FriendDetails>
        </div>
    );
};

export default FriendDetailPage;