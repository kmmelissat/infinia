"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const BurndownChart = () => {
  const burndownData = [
    { day: "D1", ideal: 100, actual: 100, remaining: 100 },
    { day: "D2", ideal: 90, actual: 95, remaining: 95 },
    { day: "D3", ideal: 80, actual: 88, remaining: 88 },
    { day: "D4", ideal: 70, actual: 82, remaining: 82 },
    { day: "D5", ideal: 60, actual: 75, remaining: 75 },
    { day: "D6", ideal: 50, actual: 68, remaining: 68 },
    { day: "D7", ideal: 40, actual: 58, remaining: 58 },
    { day: "D8", ideal: 30, actual: 45, remaining: 45 },
    { day: "D9", ideal: 20, actual: 32, remaining: 32 },
    { day: "D10", ideal: 10, actual: 18, remaining: 18 },
    { day: "D11", ideal: 0, actual: null, remaining: null }, // Proyección
    { day: "D12", ideal: 0, actual: null, remaining: null },
  ];

  const sprintInfo = {
    name: "Sprint 5",
    totalPoints: 100,
    completedPoints: 82,
    remainingPoints: 18,
    daysLeft: 2,
    velocity: 8.2, // puntos por día
    projectedCompletion: "95%",
  };

  const chartConfig = {
    ideal: {
      label: "Burndown Ideal",
      color: "#e2e8f0",
    },
    actual: {
      label: "Burndown Real",
      color: "#8b5cf6",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-dashboard-text-primary">
            Burndown Chart
          </h3>
          <p className="text-sm text-dashboard-text-secondary">
            {sprintInfo.name} - Progreso vs Plan
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-primary">
            {sprintInfo.projectedCompletion}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Proyección de completado
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="text-center p-2 bg-purple-50 rounded-lg">
          <div className="text-lg font-bold text-dashboard-text-primary">
            {sprintInfo.completedPoints}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Puntos Completados
          </div>
        </div>
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <div className="text-lg font-bold text-dashboard-text-primary">
            {sprintInfo.remainingPoints}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Puntos Restantes
          </div>
        </div>
        <div className="text-center p-2 bg-blue-50 rounded-lg">
          <div className="text-lg font-bold text-dashboard-text-primary">
            {sprintInfo.velocity}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Velocidad (pts/día)
          </div>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded-lg">
          <div className="text-lg font-bold text-dashboard-text-primary">
            {sprintInfo.daysLeft}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Días Restantes
          </div>
        </div>
      </div>

      <div className="h-48 mb-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            data={burndownData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}pts`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => [
                    `${value} puntos`,
                    name === "ideal" ? "Ideal" : "Real",
                  ]}
                />
              }
            />
            <ReferenceLine
              x="D10"
              stroke="#f59e0b"
              strokeDasharray="2 2"
              label={{ value: "Hoy", position: "top" }}
            />
            <Line
              dataKey="ideal"
              type="linear"
              stroke="var(--color-ideal)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line
              dataKey="actual"
              type="monotone"
              stroke="var(--color-actual)"
              strokeWidth={3}
              dot={{ fill: "var(--color-actual)", r: 4 }}
              connectNulls={false}
            />
          </LineChart>
        </ChartContainer>
      </div>

      <div className="flex justify-between items-center text-xs text-dashboard-text-secondary">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span>Burndown Ideal</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
            <span>Burndown Real</span>
          </div>
        </div>
        <div
          className={`px-2 py-1 rounded text-xs font-medium ${
            sprintInfo.remainingPoints <= 20
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {sprintInfo.remainingPoints <= 20 ? "En tiempo" : "Riesgo de retraso"}
        </div>
      </div>
    </div>
  );
};

export default BurndownChart;
