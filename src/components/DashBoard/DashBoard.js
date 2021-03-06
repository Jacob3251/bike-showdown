import React from "react";

import useChart from "../../hooks/useChart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashBoard = () => {
  const [chart, setChart] = useChart();
  return (
    <div className="w-3/4 mx-auto my-4">
      <h1 className="text-3xl text-green-800 font-bold font-serif my-10">
        Company Facts
      </h1>
      <div className="mb-20  grid gap-8 grid-cols-1 md:grid-cols-2 items-center justify-center">
        {/* Customized dotted line */}
        <div className="justify-center items-center">
          <h1 className="text-xl text-green-800 font-bold font-serif my-10">
            Investment and Revenue Chart
          </h1>
          <LineChart
            width={500}
            height={300}
            data={chart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"month"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={"investment"} stroke="#8884d8" />
            <Line type="monotone" dataKey={"revenue"} stroke="#82ca9d" />
          </LineChart>
        </div>
        {/* {Stacked Bar Chart} */}
        <div>
          <h1 className="text-xl text-green-800 font-bold font-serif my-10">
            Investment and Revenue & Sell Margin
          </h1>
          <BarChart
            width={500}
            height={300}
            data={chart}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            <Bar dataKey="sell" stackId="a" fill="#FFBF00" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
