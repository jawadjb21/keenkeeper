import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl font-bold">404</h1>

            <p className="mt-3 text-gray-600">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 px-5 py-2 rounded bg-black text-white hover:bg-gray-800"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;