import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ComposedChart,
} from "recharts";

function Graph() {
  const graph1 = [
    {
      name: "Jan",
      revenue: 4000,
      cost: 1500,
    },
    {
      name: "Feb",
      revenue: 4000,
      cost: 1500,
    },
    {
      name: "Mar",
      revenue: 2000,
      cost: 9800,
    },
    {
      name: "Apr",
      revenue: 2780,
      cost: 3908,
    },
    {
      name: "May",
      revenue: 1890,
      cost: 4800,
    },
    {
      name: "Jun",
      revenue: 2390,
      cost: 3800,
    },
    {
      name: "Jul",
      revenue: 3490,
      cost: 4300,
    },
  ];

  return (
    <div className="content-graph">
      <div className="card">
        <div className="card-header">Ads Spends & Returns</div>
        <div className="card-body graph-background">
          <ComposedChart
            width={400}
            height={250}
            data={graph1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {" "}
            <Legend wrapperStyle={{ fontSize: 12 }} verticalAlign="top" />
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis yAxisId="left" fontSize={10} />
            <YAxis yAxisId="right" orientation="right" fontSize={10} />
            <Tooltip wrapperStyle={{ fontSize: 12 }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#7c1158"
              activeDot={{ r: 8 }}
            />
            <Bar yAxisId="right" dataKey="cost" fill="#00bfa0" barSize={20} />
          </ComposedChart>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Conversion Rates</div>
        <div className="card-body graph-background">
          <ComposedChart
            width={400}
            height={250}
            data={graph1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {" "}
            <Legend wrapperStyle={{ fontSize: 12 }} verticalAlign="top" />
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis yAxisId="left" fontSize={10} />
            <YAxis yAxisId="right" orientation="right" fontSize={10} />
            <Tooltip wrapperStyle={{ fontSize: 12 }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="cost"
              stroke="#132850"
              activeDot={{ r: 8 }}
            />
          </ComposedChart>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Click through Rates & Invoices </div>
        <div className="card-body graph-background">
          <ComposedChart
            width={400}
            height={300}
            data={graph1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {" "}
            <Legend wrapperStyle={{ fontSize: 12 }} verticalAlign="top" />
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis yAxisId="left" fontSize={10} />
            <YAxis yAxisId="right" orientation="right" fontSize={10} />
            <Tooltip wrapperStyle={{ fontSize: 12 }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Bar yAxisId="right" dataKey="cost" fill="#bd7ebe" barSize={20} />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
}

export default Graph;
