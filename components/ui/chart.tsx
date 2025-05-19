"use client";

import * as React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BaseChartProps<T> {
  data: T[];
  chartColors?: string[];
  valueFormatter?: (value: number) => string;
  showLegend?: boolean;
}

// Bar Chart
interface BarChartProps<T> extends BaseChartProps<T> {
  xField: keyof T;
  yField: keyof T;
  categories: (keyof T)[];
}

export function BarChart<T extends Record<string, any>>({
  data,
  xField,
  yField,
  categories,
  chartColors = ["#2563eb", "#16a34a", "#eab308", "#ef4444"],
  valueFormatter = (value) => `${value}`,
  showLegend = true,
}: BarChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey={xField as string}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          tickMargin={8}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          tickMargin={8}
          tickFormatter={valueFormatter}
        />
        <Tooltip 
          formatter={valueFormatter}
          contentStyle={{
            borderRadius: "6px",
            border: "1px solid hsl(var(--border))",
            backgroundColor: "hsl(var(--background))",
          }}
          labelStyle={{
            fontSize: 12,
            fontWeight: 500,
            marginBottom: "4px",
          }}
        />
        {categories.map((category, index) => (
          <Bar
            key={index}
            dataKey={category as string}
            fill={chartColors[index % chartColors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}

// Line Chart
interface LineChartProps<T> extends BaseChartProps<T> {
  xField: keyof T;
  yField: keyof T;
  categories: (keyof T)[];
}

export function LineChart<T extends Record<string, any>>({
  data,
  xField,
  yField,
  categories,
  chartColors = ["#2563eb", "#16a34a", "#eab308", "#ef4444"],
  valueFormatter = (value) => `${value}`,
  showLegend = true,
}: LineChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey={xField as string}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          tickMargin={8}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          tickMargin={8}
          tickFormatter={valueFormatter}
        />
        <Tooltip 
          formatter={valueFormatter}
          contentStyle={{
            borderRadius: "6px",
            border: "1px solid hsl(var(--border))",
            backgroundColor: "hsl(var(--background))",
          }}
          labelStyle={{
            fontSize: 12,
            fontWeight: 500,
            marginBottom: "4px",
          }}
        />
        {categories.map((category, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={category as string}
            stroke={chartColors[index % chartColors.length]}
            strokeWidth={2}
            dot={{ strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

// Pie Chart
interface PieChartProps<T> extends BaseChartProps<T> {
  category: keyof T;
  index: keyof T;
}

export function PieChart<T extends Record<string, any>>({
  data,
  category,
  index,
  chartColors = ["#2563eb", "#16a34a", "#eab308", "#ef4444"],
  valueFormatter = (value) => `${value}`,
  showLegend = true,
}: PieChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey={category as string}
          nameKey={index as string}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          labelLine={true}
          label={({ name, percent }) => 
            `${name}: ${valueFormatter(percent * 100)}`
          }
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [valueFormatter(value as number), ""]}
          contentStyle={{
            borderRadius: "6px",
            border: "1px solid hsl(var(--border))",
            backgroundColor: "hsl(var(--background))",
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}