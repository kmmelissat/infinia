"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const ProgressVsPlan = () => {
  const sprintData = [
    {
      sprint: "Sprint 1",
      planned: 100,
      actual: 95,
      cumPlanned: 100,
      cumActual: 95,
    },
    {
      sprint: "Sprint 2",
      planned: 100,
      actual: 88,
      cumPlanned: 200,
      cumActual: 183,
    },
    {
      sprint: "Sprint 3",
      planned: 100,
      actual: 92,
      cumPlanned: 300,
      cumActual: 275,
    },
    {
      sprint: "Sprint 4",
      planned: 100,
      actual: 85,
      cumPlanned: 400,
      cumActual: 360,
    },
    {
      sprint: "Sprint 5",
      planned: 100,
      actual: 0,
      cumPlanned: 500,
      cumActual: 360,
    },
  ];

  const currentSprint = sprintData[3]; // Sprint 4 actual
  const progressPercentage = Math.round(
    (currentSprint.cumActual / currentSprint.cumPlanned) * 100
  );

  const chartConfig = {
    planned: {
      label: "Planificado",
      color: "#e2e8f0",
    },
    actual: {
      label: "Real",
      color: "#8b5cf6",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dashboard-text-primary">
          % Avance vs Plan
        </h3>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-primary">
            {progressPercentage}%
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            {currentSprint.cumActual} / {currentSprint.cumPlanned} pts
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-dashboard-text-secondary mb-2">
          <span>Progreso Acumulado</span>
          <span>{progressPercentage}% completado</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="h-32">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            data={sprintData.slice(0, 4)}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="sprint"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.replace("Sprint ", "S")}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="planned"
              fill="var(--color-planned)"
              radius={[2, 2, 0, 0]}
              maxBarSize={30}
            />
            <Bar
              dataKey="actual"
              fill="var(--color-actual)"
              radius={[2, 2, 0, 0]}
              maxBarSize={30}
            />
          </BarChart>
        </ChartContainer>
      </div>

      <div className="flex justify-between text-xs text-dashboard-text-secondary mt-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span>Planificado</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
            <span>Real</span>
          </div>
        </div>
        <span>Por Sprint</span>
      </div>
    </div>
  );
};

export default ProgressVsPlan;
