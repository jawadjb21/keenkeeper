import React from 'react';
import PieChartDisplay from './PieChart';

const Stats = () => {
    return (
        <div className='text-center my-4'>
            <h1 className='font-bold text-3xl'>Friendship Analytics</h1>
            <div className='px-5 place-items-center my-2 text-left border border-gray-300'>
                <p className='font-medium text-xl'>By interaction type</p>
                <PieChartDisplay isAnimationActive={true}></PieChartDisplay>
            </div>
        </div>
    );
};

export default Stats;