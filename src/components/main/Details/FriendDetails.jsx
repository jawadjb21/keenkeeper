import React, { useContext } from 'react';
import FriendCard from './FriendCard';
import FriendStats from './FriendStats';
import FriendActions from './FriendActions';


const FriendDetails = ({ friend }) => {
    return (
        <div className='text-center flex flex-col md:flex-row justify-center items-center md:items-start gap-6 p-6'>
            <FriendCard friend={friend}></FriendCard>
            <div className='flex flex-col gap-4 justify-between'>
                <FriendStats friend={friend}></FriendStats>
                <FriendActions friend={friend}></FriendActions>
            </div>
        </div>
    );
};

export default FriendDetails;