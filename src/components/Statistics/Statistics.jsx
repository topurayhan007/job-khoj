import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import PageHeader from "../PageHeader/PageHeader";

const Statistics = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/marks.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div>
      <div className="mb-2">
        <PageHeader>Statistics</PageHeader>
      </div>
      <div className="md:mt-[450px] mt-[200px] md:w-10/12 lg:w-[1320px] mx-auto">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="assignment" />
            <PolarRadiusAxis />
            <Radar
              name="Topu Rayhan"
              dataKey="obtained"
              stroke="#9873FF"
              strokeWidth={2}
              fill="#7E90FE"
              fillOpacity={0.5}
            />
            <Tooltip></Tooltip>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
