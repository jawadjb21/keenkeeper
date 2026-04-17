"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl font-bold text-red-600">Something went wrong</h2>

            <p className="mt-3 text-gray-600 max-w-md">
                An unexpected error occurred while loading this page.
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

export default Error;