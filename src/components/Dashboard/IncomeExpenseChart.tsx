"use client";

import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

const IncomeExpenseChart = () => {
  const chartData = [
    { month: "Jan", income: 18000, expense: 12000 },
    { month: "Feb", income: 20000, expense: 13000 },
    { month: "Mar", income: 22000, expense: 14000 },
    { month: "Apr", income: 24000, expense: 15000 },
    { month: "May", income: 24600, expense: 13290 },
    { month: "Jun", income: 26000, expense: 14500 },
    { month: "Jul", income: 28000, expense: 15800 },
  ];

  const chartConfig = {
    income: {
      label: "Income",
      color: "#8b5cf6",
    },
    expense: {
      label: "Expense",
      color: "#e879f9",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          Income VS Expense
        </h2>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowTrendingUpIcon className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-6 mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
          <span className="text-sm text-dashboard-text-secondary">
            Income: ${chartData[chartData.length - 1]?.income.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-magenta rounded-full"></div>
          <span className="text-sm text-dashboard-text-secondary">
            Expense: $
            {chartData[chartData.length - 1]?.expense.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-48">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="income"
              type="monotone"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-income)",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Line
              dataKey="expense"
              type="monotone"
              stroke="var(--color-expense)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-expense)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
