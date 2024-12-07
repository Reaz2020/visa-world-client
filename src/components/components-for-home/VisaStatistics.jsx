import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const VisaStatistics = () => {
  // dummy data for countries and visas received by year
  const data = [
    { country: "USA", visas: 12000, year: 2023 },
    { country: "Canada", visas: 8000, year: 2023 },
    { country: "UK", visas: 10000, year: 2023 },
    { country: "Australia", visas: 7000, year: 2023 },
    { country: "Germany", visas: 8500, year: 2023 },
    { country: "France", visas: 7500, year: 2023 },
    { country: "Japan", visas: 9000, year: 2023 },
    { country: "Saudi Arabia", visas: 11000, year: 2023 },
    { country: "China", visas: 9500, year: 2023 },
    { country: "Brazil", visas: 6500, year: 2023 },
  ];

  return (
    <div style={{ textAlign: "center" }} className="p-4">
      <h2 className="text-3xl font-bold mb-4">Visa Received Statistics by Country</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="country" label={{ value: "Countries", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Visas Received", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="visas" barSize={20} fill="#413ea0" name="Visas Received" />
          <Line type="monotone" dataKey="visas" stroke="#ff7300" name="Visa Trend" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisaStatistics;
