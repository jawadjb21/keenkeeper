import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
                <p className="text-gray-600">Loading...</p>
            </div>
        </div>
    );
};

export default loading;