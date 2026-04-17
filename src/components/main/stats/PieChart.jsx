"use client";
import { FriendsActionsContext } from '@/hooks/handleFriendActions';
import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip, Legend, PieLabelRenderProps, PieSectorShapeProps, Sector } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


const MyCustomPie = (props) => {
    return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};


const PieChartDisplay = ({ isAnimationActive }) => {
    const { friendsActions } = useContext(FriendsActionsContext);

    const calls = friendsActions.filter(entry => entry.action.toLowerCase() === "call");
    const videoCalls = friendsActions.filter(entry => entry.action.toLowerCase() === "video");
    const texts = friendsActions.filter(entry => entry.action.toLowerCase() === "text");

    const data = [
        { name: "call", value: calls.length, fill: COLORS[0] },
        { name: "video", value: videoCalls.length, fill: COLORS[1] },
        { name: "texts", value: texts.length, fill: COLORS[2] }
    ];
    console.log(data);

    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                // fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={3}
                dataKey="value"
                isAnimationActive={isAnimationActive}
                animationBegin={800}
                animationEasing='ease-in-out'
                // shape={MyCustomPie}
            />
            <Tooltip />
            <Legend />
            <RechartsDevtools />
        </PieChart>
    );
};

export default PieChartDisplay;