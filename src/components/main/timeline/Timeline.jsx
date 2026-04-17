"use client";
import React, { useContext, useState } from "react";
import { FriendsActionsContext } from "@/hooks/handleFriendActions";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
    const { friendsActions } = useContext(FriendsActionsContext);
    const [filter, setFilter] = useState("all");

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const filteredActions =
        filter === "all"
            ? friendsActions
            : friendsActions.filter((entry) => entry.action === filter);

    return (
        <div className="flex flex-col justify-center items-center gap-y-5">
            <h1 className="font-bold text-3xl">Timeline</h1>

            <select onChange={handleFilter} className="select select-ghost">
                <option value="all">All</option>
                <option value="call">Call</option>
                <option value="video">Video Call</option>
                <option value="text">Text</option>
            </select>

            <div className="flex flex-col justify-center items-center gap-y-2 my-3">
                {
                    filteredActions?.map((entry, idx) => (<TimelineCard key={idx} action={entry.action} friend={entry.friend} date={entry.date}></TimelineCard>))
                }
            </div>
        </div>
    );
};

export default Timeline;