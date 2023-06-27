import React from "react";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DegreeChart = () => {
    const [sensorData, setSensorData] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/turbide");
                const data = await response.json();
                setSensorData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={sensorData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="degree" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="nivel_turbidez" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default DegreeChart;
