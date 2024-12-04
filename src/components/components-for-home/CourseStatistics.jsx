import React, { useContext } from "react";
import { AuthContext } from "../../providers/Network";
import {
  ComposedChart,
  Line,
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

  // Only include lesson number and learners for comparison
  const data = swedishData && swedishData.length > 0
    ? swedishData.slice(0, 10).map(item => ({
        name: `Lesson ${item.Lesson_no}`,
        learners: item.learners,
        lesson_no: item.Lesson_no,
      }))
    : []; 

  if (!swedishData || swedishData.length === 0) {
    return <div>No data available</div>; 
  }

  return (
    <div style={{ textAlign: "center" }} className="p-2">
      <h2 className=" shadow-2xl text-3xl mb-2">VISA RATION ON DIFFERENT COUNTRIES</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="learners" barSize={20} fill="#413ea0" name="Learners Count" />
          <Line type="monotone" dataKey="learners" stroke="#ff7300" name="Learners Trend" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseStatistics;
