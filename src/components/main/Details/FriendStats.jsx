import React from "react";

const FriendStats = ({ friend }) => {
    return (
        <div className="flex flex-col gap-4">

            {/* Metrics Card */}
            <div className="grid grid-cols-3 gap-4 border border-gray-300 rounded-xl p-6 shadow-sm">

                <div className="text-center">
                    <p className="font-bold text-2xl">
                        {friend.days_since_contact}
                    </p>
                    <p className="text-sm text-gray-500">
                        Days Since Contact
                    </p>
                </div>

                <div className="text-center border-x border-gray-200">
                    <p className="font-bold text-2xl">
                        {friend.goal}
                    </p>
                    <p className="text-sm text-gray-500">
                        Goal (Days)
                    </p>
                </div>

                <div className="text-center">
                    <p className="font-bold text-2xl">
                        {friend.next_due_date}
                    </p>
                    <p className="text-sm text-gray-500">
                        Next Due
                    </p>
                </div>

            </div>

            {/* Goal Card */}
            <div className="flex flex-col gap-3 border border-gray-300 rounded-xl p-6 shadow-sm">

                <div className="flex justify-between items-center">
                    <p className="text-gray-500">Relationship Goal</p>
                    <button className="text-sm px-3 py-1 rounded-md hover:bg-gray-100">
                        Edit
                    </button>
                </div>

                <p className="text-gray-500 text-left">
                    Connect every{" "}
                    <span className="font-bold text-2xl text-black">
                        {friend.goal} days
                    </span>
                </p>

            </div>

        </div>
    );
};

export default FriendStats;