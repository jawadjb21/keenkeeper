"use client";
import React, { useState, Suspense } from 'react';
import { createContext } from 'react';

export const FriendsActionsContext = createContext();

const FriendsActionsProvider = ({ children }) => {
    const [friendsActions, setFriendsActions] = useState([]);

    const handleFriendsActions = ( action, friend ) => {
        const newAction = { "action": action, "friend": friend };
        const newActions = [...friendsActions, newAction];
        setFriendsActions(newActions);
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