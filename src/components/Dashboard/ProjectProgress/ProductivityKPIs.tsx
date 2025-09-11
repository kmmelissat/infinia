"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
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
  RocketLaunchIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const ProductivityKPIs = () => {
  const throughputData = [
    { week: "S1", stories: 8, cycleTime: 4.5, leadTime: 9.2, velocity: 21 },
    { week: "S2", stories: 12, cycleTime: 3.8, leadTime: 8.1, velocity: 28 },
    { week: "S3", stories: 15, cycleTime: 3.2, leadTime: 7.5, velocity: 32 },
    { week: "S4", stories: 18, cycleTime: 2.9, leadTime: 6.8, velocity: 35 },
    { week: "S5", stories: 16, cycleTime: 3.1, leadTime: 7.2, velocity: 33 },
    { week: "S6", stories: 20, cycleTime: 2.7, leadTime: 6.2, velocity: 38 },
  ];

  const currentWeek = throughputData[throughputData.length - 1];
  const previousWeek = throughputData[throughputData.length - 2];

  const throughputChange = currentWeek.stories - previousWeek.stories;
  const cycleTimeChange = currentWeek.cycleTime - previousWeek.cycleTime;
  const leadTimeChange = currentWeek.leadTime - previousWeek.leadTime;
  const velocityChange = currentWeek.velocity - previousWeek.velocity;

  const avgThroughput =
    throughputData.reduce((acc, week) => acc + week.stories, 0) /
    throughputData.length;
  const avgCycleTime =
    throughputData.reduce((acc, week) => acc + week.cycleTime, 0) /
    throughputData.length;
  const avgLeadTime =
    throughputData.reduce((acc, week) => acc + week.leadTime, 0) /
    throughputData.length;
  const avgVelocity =
    throughputData.reduce((acc, week) => acc + week.velocity, 0) /
    throughputData.length;

  const chartConfig = {
    stories: {
      label: "Historias",
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
    velocity: {
      label: "Velocity",
      color: "#10b981",
    },
  } satisfies ChartConfig;

  const kpiCards = [
    {
      title: "Throughput",
      value: currentWeek.stories,
      unit: "historias/sem",
      change: throughputChange,
      average: avgThroughput.toFixed(1),
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      color: "purple",
      description: "Historias completadas por semana",
    },
    {
      title: "Cycle Time",
      value: currentWeek.cycleTime,
      unit: "días",
      change: cycleTimeChange,
      average: avgCycleTime.toFixed(1),
      icon: <ClockIcon className="w-6 h-6" />,
      color: "blue",
      description: "Tiempo desde 'In Progress' hasta 'Done'",
    },
    {
      title: "Lead Time",
      value: currentWeek.leadTime,
      unit: "días",
      change: leadTimeChange,
      average: avgLeadTime.toFixed(1),
      icon: <ChartBarIcon className="w-6 h-6" />,
      color: "green",
      description: "Tiempo desde 'Request' hasta 'Production'",
    },
    {
      title: "Velocity",
      value: currentWeek.velocity,
      unit: "puntos/sprint",
      change: velocityChange,
      average: avgVelocity.toFixed(1),
      icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
      color: "emerald",
      description: "Story points completados por sprint",
    },
  ];

  const getChangeIcon = (change: number, isTimeMetric = false) => {
    const isPositive = isTimeMetric ? change < 0 : change > 0;
    return isPositive ? (
      <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
    ) : (
      <ArrowTrendingDownIcon className="w-4 h-4 text-red-500" />
    );
  };

  const getChangeColor = (change: number, isTimeMetric = false) => {
    const isPositive = isTimeMetric ? change < 0 : change > 0;
    return isPositive ? "text-green-600" : "text-red-600";
  };

  const getCardColor = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-50 border-purple-200 text-purple-600";
      case "blue":
        return "bg-blue-50 border-blue-200 text-blue-600";
      case "green":
        return "bg-green-50 border-green-200 text-green-600";
      case "emerald":
        return "bg-emerald-50 border-emerald-200 text-emerald-600";
      default:
        return "bg-gray-50 border-gray-200 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi) => (
          <div
            key={kpi.title}
            className={`p-4 rounded-xl border ${getCardColor(kpi.color)}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={
                  kpi.color === "purple"
                    ? "text-purple-600"
                    : kpi.color === "blue"
                    ? "text-blue-600"
                    : kpi.color === "green"
                    ? "text-green-600"
                    : "text-emerald-600"
                }
              >
                {kpi.icon}
              </div>
              <div className="flex items-center space-x-1">
                {getChangeIcon(kpi.change, kpi.title.includes("Time"))}
                <span
                  className={`text-xs font-medium ${getChangeColor(
                    kpi.change,
                    kpi.title.includes("Time")
                  )}`}
                >
                  {kpi.change > 0 ? "+" : ""}
                  {kpi.change.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="mb-2">
              <div className="text-2xl font-bold text-dashboard-text-primary">
                {kpi.value.toFixed(1)}
              </div>
              <div className="text-sm text-dashboard-text-secondary">
                {kpi.unit}
              </div>
            </div>

            <div className="mb-2">
              <h4 className="text-sm font-medium text-dashboard-text-primary">
                {kpi.title}
              </h4>
              <p className="text-xs text-dashboard-text-secondary">
                Promedio: {kpi.average} {kpi.unit}
              </p>
            </div>

            <p className="text-xs text-dashboard-text-secondary">
              {kpi.description}
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Throughput & Velocity */}
        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-dashboard-text-primary">
                Throughput & Velocity
              </h3>
              <p className="text-sm text-dashboard-text-secondary">
                Historias completadas y velocidad del equipo
              </p>
            </div>
          </div>

          <div className="h-64">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ComposedChart
                data={throughputData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" tickLine={false} axisLine={false} />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}pts`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  yAxisId="left"
                  dataKey="stories"
                  fill="var(--color-stories)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="velocity"
                  stroke="var(--color-velocity)"
                  strokeWidth={3}
                  dot={{ fill: "var(--color-velocity)", r: 4 }}
                />
              </ComposedChart>
            </ChartContainer>
          </div>
        </div>

        {/* Cycle Time & Lead Time */}
        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-dashboard-text-primary">
                Tiempos de Ciclo
              </h3>
              <p className="text-sm text-dashboard-text-secondary">
                Cycle Time vs Lead Time (menor es mejor)
              </p>
            </div>
          </div>

          <div className="h-64">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <LineChart
                data={throughputData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" tickLine={false} axisLine={false} />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}d`}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => [
                        `${Number(value).toFixed(1)} días`,
                        name === "cycleTime" ? "Cycle Time" : "Lead Time",
                      ]}
                    />
                  }
                />
                <Line
                  type="monotone"
                  dataKey="cycleTime"
                  stroke="var(--color-cycleTime)"
                  strokeWidth={3}
                  dot={{ fill: "var(--color-cycleTime)", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="leadTime"
                  stroke="var(--color-leadTime)"
                  strokeWidth={3}
                  dot={{ fill: "var(--color-leadTime)", r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
        <h3 className="text-lg font-semibold text-dashboard-text-primary mb-4">
          Resumen de Performance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">
              ↗️ +25%
            </div>
            <div className="text-sm font-medium text-dashboard-text-primary mb-1">
              Mejora en Throughput
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              Últimas 6 semanas vs período anterior
            </div>
          </div>

          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">↘️ -40%</div>
            <div className="text-sm font-medium text-dashboard-text-primary mb-1">
              Reducción Cycle Time
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              De 4.5 a 2.7 días promedio
            </div>
          </div>

          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              ↗️ +81%
            </div>
            <div className="text-sm font-medium text-dashboard-text-primary mb-1">
              Incremento Velocity
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              De 21 a 38 story points/sprint
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityKPIs;
