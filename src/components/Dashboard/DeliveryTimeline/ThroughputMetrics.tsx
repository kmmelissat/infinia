"use client";

import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ComposedChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const ThroughputMetrics = () => {
  const throughputData = [
    { week: "S1", storiesClosed: 12, cycleTime: 4.2, leadTime: 8.5 },
    { week: "S2", storiesClosed: 15, cycleTime: 3.8, leadTime: 7.2 },
    { week: "S3", storiesClosed: 18, cycleTime: 3.5, leadTime: 6.8 },
    { week: "S4", storiesClosed: 14, cycleTime: 4.1, leadTime: 7.9 },
    { week: "S5", storiesClosed: 16, cycleTime: 3.7, leadTime: 6.5 },
  ];

  const currentWeek = throughputData[throughputData.length - 1];
  const previousWeek = throughputData[throughputData.length - 2];

  const avgThroughput =
    throughputData.reduce((acc, week) => acc + week.storiesClosed, 0) /
    throughputData.length;
  const avgCycleTime =
    throughputData.reduce((acc, week) => acc + week.cycleTime, 0) /
    throughputData.length;
  const avgLeadTime =
    throughputData.reduce((acc, week) => acc + week.leadTime, 0) /
    throughputData.length;

  const throughputChange =
    currentWeek.storiesClosed - previousWeek.storiesClosed;
  const cycleTimeChange = currentWeek.cycleTime - previousWeek.cycleTime;
  const leadTimeChange = currentWeek.leadTime - previousWeek.leadTime;

  const chartConfig = {
    storiesClosed: {
      label: "Historias Cerradas",
      color: "#8b5cf6",
    },
    cycleTime: {
      label: "Cycle Time",
      color: "#e879f9",
    },
    leadTime: {
      label: "Lead Time",
      color: "#c084fc",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-dashboard-text-primary">
            Throughput & Tiempos
          </h3>
          <p className="text-sm text-dashboard-text-secondary">
            Velocidad de entrega y eficiencia del flujo
          </p>
        </div>
        <ClockIcon className="w-6 h-6 text-purple-primary" />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <span className="text-xl font-bold text-dashboard-text-primary">
              {currentWeek.storiesClosed}
            </span>
            {throughputChange > 0 ? (
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
            ) : (
              <ArrowTrendingDownIcon className="w-4 h-4 text-red-500" />
            )}
          </div>
          <div className="text-xs text-dashboard-text-secondary mb-1">
            Historias/Semana
          </div>
          <div
            className={`text-xs font-medium ${
              throughputChange > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {throughputChange > 0 ? "+" : ""}
            {throughputChange} vs anterior
          </div>
        </div>

        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <span className="text-xl font-bold text-dashboard-text-primary">
              {currentWeek.cycleTime.toFixed(1)}d
            </span>
            {cycleTimeChange < 0 ? (
              <ArrowTrendingDownIcon className="w-4 h-4 text-green-500" />
            ) : (
              <ArrowTrendingUpIcon className="w-4 h-4 text-red-500" />
            )}
          </div>
          <div className="text-xs text-dashboard-text-secondary mb-1">
            Cycle Time
          </div>
          <div
            className={`text-xs font-medium ${
              cycleTimeChange < 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {cycleTimeChange > 0 ? "+" : ""}
            {cycleTimeChange.toFixed(1)}d
          </div>
        </div>

        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <span className="text-xl font-bold text-dashboard-text-primary">
              {currentWeek.leadTime.toFixed(1)}d
            </span>
            {leadTimeChange < 0 ? (
              <ArrowTrendingDownIcon className="w-4 h-4 text-green-500" />
            ) : (
              <ArrowTrendingUpIcon className="w-4 h-4 text-red-500" />
            )}
          </div>
          <div className="text-xs text-dashboard-text-secondary mb-1">
            Lead Time
          </div>
          <div
            className={`text-xs font-medium ${
              leadTimeChange < 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {leadTimeChange > 0 ? "+" : ""}
            {leadTimeChange.toFixed(1)}d
          </div>
        </div>
      </div>

      <div className="h-32 mb-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ComposedChart
            data={throughputData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="week" tickLine={false} axisLine={false} />
            <YAxis
              yAxisId="stories"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <YAxis
              yAxisId="time"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}d`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => {
                    if (name === "storiesClosed")
                      return [`${value} historias`, "Cerradas"];
                    if (name === "cycleTime")
                      return [`${Number(value).toFixed(1)} días`, "Cycle Time"];
                    if (name === "leadTime")
                      return [`${Number(value).toFixed(1)} días`, "Lead Time"];
                    return [value, name];
                  }}
                />
              }
            />
            <Bar
              yAxisId="stories"
              dataKey="storiesClosed"
              fill="var(--color-storiesClosed)"
              radius={[2, 2, 0, 0]}
              maxBarSize={30}
            />
            <Line
              yAxisId="time"
              type="monotone"
              dataKey="cycleTime"
              stroke="var(--color-cycleTime)"
              strokeWidth={2}
              dot={{ fill: "var(--color-cycleTime)", r: 3 }}
            />
          </ComposedChart>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-sm font-medium text-dashboard-text-primary">
            {avgThroughput.toFixed(1)}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Promedio Historias/Sem
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-dashboard-text-primary">
            {avgCycleTime.toFixed(1)}d
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Promedio Cycle Time
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-dashboard-text-primary">
            {avgLeadTime.toFixed(1)}d
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Promedio Lead Time
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-xs text-dashboard-text-secondary space-y-1">
          <div>
            <strong>Cycle Time:</strong> Tiempo desde &quot;In Progress&quot;
            hasta &quot;Done&quot;
          </div>
          <div>
            <strong>Lead Time:</strong> Tiempo desde &quot;Request&quot; hasta
            &quot;Production&quot;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThroughputMetrics;
