import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statics = () => {
  const datas = useLoaderData();
  const data = datas.data;
  return (
    <div className="bg-blue-200 pt-5 pb-10">
      <h1 className="text-3xl m-5">Statics Reachart</h1>
      <div className="w-1/2 mx-auto border p-5 drop-shadow-lg bg-white rounded-md">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statics;
