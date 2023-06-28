import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 85%;
  background: transparent;
  display: grid;
  place-items: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: #333;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Tableturbidez = () => {
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
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Nivel</TableHeader>
            <TableHeader>Hora</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((item) => (
            <tr key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.nivel_turbidez}</TableCell>
              <TableCell>{formatTime(item.created_at)}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default Tableturbidez;
