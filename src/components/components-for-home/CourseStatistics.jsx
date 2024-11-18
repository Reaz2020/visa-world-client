import React, { useContext } from "react";
import { AuthContext } from "../../providers/Network";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const CourseStatistics = () => {
  const { swedishData } = useContext(AuthContext);


  const data = swedishData && swedishData.length > 0
    ? swedishData.map(item => ({
        name: `Lesson ${item.Lesson_no}`,
        difficulty: item.difficulty,
        lesson_no: item.Lesson_no,
      }))
    : []; 

  if (!swedishData || swedishData.length === 0) {
    return <div>No data available</div>; 
  }

  return (
    <div style={{ textAlign: "center" }} className="p-2">
      <h2>Course Statistics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="lesson_no" fill="#8884d8" stroke="#8884d8" name="Lesson Number" />
          <Bar dataKey="lesson_no" barSize={20} fill="#413ea0" name="Lesson Number" />
          <Line type="monotone" dataKey="lesson_no" stroke="#ff7300" name="Lesson Trend" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseStatistics;
