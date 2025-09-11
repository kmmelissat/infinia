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
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const BurnRate = () => {
  const burnData = [
    {
      week: "S1",
      budgetConsumed: 15000,
      hoursConsumed: 120,
      budgetPlan: 12000,
      hoursPlan: 100,
    },
    {
      week: "S2",
      budgetConsumed: 28000,
      hoursConsumed: 235,
      budgetPlan: 24000,
      hoursPlan: 200,
    },
    {
      week: "S3",
      budgetConsumed: 45000,
      hoursConsumed: 380,
      budgetPlan: 36000,
      hoursPlan: 300,
    },
    {
      week: "S4",
      budgetConsumed: 58000,
      hoursConsumed: 485,
      budgetPlan: 48000,
      hoursPlan: 400,
    },
  ];

  const totalBudget = 120000;
  const totalHours = 1000;
  const currentBudget = burnData[burnData.length - 1].budgetConsumed;
  const currentHours = burnData[burnData.length - 1].hoursConsumed;

  const budgetBurnRate = (currentBudget / totalBudget) * 100;
  const hoursBurnRate = (currentHours / totalHours) * 100;
  const plannedBurnRate =
    (burnData[burnData.length - 1].budgetPlan / totalBudget) * 100;

  const isOverBudget = budgetBurnRate > plannedBurnRate;
  const variance = budgetBurnRate - plannedBurnRate;

  const chartConfig = {
    budgetConsumed: {
      label: "Presupuesto Real",
      color: "#e879f9",
    },
    budgetPlan: {
      label: "Presupuesto Plan",
      color: "#8b5cf6",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dashboard-text-primary">
          Burn Rate
        </h3>
        <div className="flex items-center space-x-2">
          {isOverBudget ? (
            <ArrowTrendingUpIcon className="w-4 h-4 text-red-500" />
          ) : (
            <ArrowTrendingDownIcon className="w-4 h-4 text-green-500" />
          )}
          <span
            className={`text-sm font-medium ${
              isOverBudget ? "text-red-600" : "text-green-600"
            }`}
          >
            {isOverBudget ? "+" : ""}
            {variance.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-dashboard-text-primary">
            ${(currentBudget / 1000).toFixed(0)}k
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            de ${(totalBudget / 1000).toFixed(0)}k presupuesto
          </div>
          <div className="text-sm font-medium text-purple-primary">
            {budgetBurnRate.toFixed(1)}% consumido
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-dashboard-text-primary">
            {currentHours}h
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            de {totalHours}h estimadas
          </div>
          <div className="text-sm font-medium text-purple-primary">
            {hoursBurnRate.toFixed(1)}% consumido
          </div>
        </div>
      </div>

      <div className="h-32 mb-2">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            data={burnData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="week" tickLine={false} axisLine={false} />
            <YAxis hide domain={[0, totalBudget]} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => [
                    `$${(Number(value) / 1000).toFixed(0)}k`,
                    name === "budgetConsumed" ? "Real" : "Plan",
                  ]}
                />
              }
            />
            <Line
              dataKey="budgetPlan"
              type="monotone"
              stroke="var(--color-budgetPlan)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line
              dataKey="budgetConsumed"
              type="monotone"
              stroke="var(--color-budgetConsumed)"
              strokeWidth={2}
              dot={{ fill: "var(--color-budgetConsumed)", r: 3 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      <div className="flex justify-between text-xs text-dashboard-text-secondary">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
            <span>Plan</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gradient-magenta rounded-full"></div>
            <span>Real</span>
          </div>
        </div>
        <span>Acumulado por semana</span>
      </div>
    </div>
  );
};

export default BurnRate;
