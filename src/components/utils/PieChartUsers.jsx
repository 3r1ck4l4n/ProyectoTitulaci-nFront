import React from 'react';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';


const COLORS = ['#0088FE', 'rgba(220,53,69,0.7)'];

export const PieChartUsers = ({data01, data02}) => {
    
    return (
        <>
            <PieChart width={250} height={250}>
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d"/>
            <Tooltip/>
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label>
                {data02.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                ))}
            </Pie>
        </PieChart>
        </>
    );
};