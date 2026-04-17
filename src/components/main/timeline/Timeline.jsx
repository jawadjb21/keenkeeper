"use client";
import React, { useContext, useState } from 'react';
import FriendsActionsProvider, { FriendsActionsContext } from '@/hooks/handleFriendActions';
import TimelineCard from './TimelineCard';

const Timeline = () => {
    const { friendsActions } = useContext(FriendsActionsContext);
    const [filteredActions, setFilteredActions] = useState([...friendsActions]);
    const handleFilter = (event) => {
        const filterBy = event.target.value;
        if(filterBy.toLowerCase() === "all"){
            setFilteredActions(friendsActions);
        } else{
            const filteredArray = friendsActions.filter(entry => entry.action === filterBy);
            setFilteredActions(filteredArray);
        }
    }
    return (
        <div className='flex flex-col justify-center items-center gap-y-5'>
            <h1 className='font-bold text-3xl'>Timeline</h1>
            <select onChange={(event) => handleFilter(event)} className="select select-ghost">
                <option value={"all"}>All</option>
                <option value={"call"}>Call</option>
                <option value={"video"}>Video Call</option>
                <option value={"text"}>Text</option>
            </select>

            <div className='flex flex-col justify-center items-center gap-y-2 my-3'>
                {
                    filteredActions.map((entry, idx) => <TimelineCard key={idx} action={entry.action} friend={entry.friend} date={entry.date}></TimelineCard>)
                }
            </div>
        </div>
    );
};

export default Timeline;