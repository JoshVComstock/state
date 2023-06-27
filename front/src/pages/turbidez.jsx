import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from "recharts";

const SensorChart = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/turbidez");
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={20}
        data={sensorData}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          background
          clockWise
          dataKey="nivel_turbidez"
          fill="#0088FE"
          cornerRadius={10}
          label={{ position: "insideStart", fill: "#fff", fontSize: "14px" }}
          minAngle={-180}
          maxAngle={0}
        />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default SensorChart;
