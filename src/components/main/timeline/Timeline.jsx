"use client";
import React, { useContext } from 'react';
import FriendsActionsProvider, { FriendsActionsContext } from '@/hooks/handleFriendActions';
import TimelineCard from './TimelineCard';

const Timeline = () => {
    const { friendsActions } = useContext(FriendsActionsContext);
    console.log(friendsActions);
    return (
        <div>
            <h1 className='font-bold text-3xl'>Timeline</h1>
            <select defaultValue="Filter Timeline" className="select select-ghost">
                <option disabled={true}>Filter Timeline</option>
                <option>Call</option>
                <option>Video Call</option>
                <option>Text</option>
            </select>

            <div className='flex flex-col justify-center items-center gap-y-2'>
                {
                    friendsActions.map((entry, idx) => <TimelineCard key={idx} action={entry.action} friend={entry.friend} date={entry.date}></TimelineCard>)
                }
            </div>
        </div>
    );
};

export default Timeline;