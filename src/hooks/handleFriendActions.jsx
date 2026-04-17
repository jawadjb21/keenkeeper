"use client";
import React, { useState, Suspense } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';


export const FriendsActionsContext = createContext();

const FriendsActionsProvider = ({ children }) => {
    const [friendsActions, setFriendsActions] = useState([]);

    const handleFriendsActions = (action, friend, date) => {
        const newAction = { "action": action, "friend": friend, "date": date };
        const newActions = [...friendsActions, newAction];
        setFriendsActions(newActions);
        toast.success(`${action.toUpperCase()} with ${friend.name}`);
    }

    return (
        <Suspense fallback={<span>Loading...</span>}>
            <FriendsActionsContext.Provider value={{ friendsActions, handleFriendsActions }}>
                {children}
            </FriendsActionsContext.Provider>
        </Suspense>

    );
};

export default FriendsActionsProvider;