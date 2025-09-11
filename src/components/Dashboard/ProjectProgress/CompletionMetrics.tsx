"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  CheckCircleIcon,
  ClockIcon,
  PlayIcon,
  PauseIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const CompletionMetrics = () => {
  const completionData = [
    { status: "Completado", count: 24, percentage: 48, fill: "#10b981" },
    { status: "En Progreso", count: 12, percentage: 24, fill: "#3b82f6" },
    { status: "En Revisión", count: 8, percentage: 16, fill: "#f59e0b" },
    { status: "Pendiente", count: 4, percentage: 8, fill: "#6b7280" },
    { status: "Bloqueado", count: 2, percentage: 4, fill: "#ef4444" },
  ];

  const sprintProgressData = [
    { sprint: "Sprint 1", completed: 100, inProgress: 0, pending: 0 },
    { sprint: "Sprint 2", completed: 95, inProgress: 5, pending: 0 },
    { sprint: "Sprint 3", completed: 88, inProgress: 12, pending: 0 },
    { sprint: "Sprint 4", completed: 65, inProgress: 25, pending: 10 },
    { sprint: "Sprint 5", completed: 0, inProgress: 30, pending: 70 },
  ];

  const totalTasks = completionData.reduce((acc, item) => acc + item.count, 0);
  const completedTasks =
    completionData.find((item) => item.status === "Completado")?.count || 0;
  const overallCompletion = Math.round((completedTasks / totalTasks) * 100);

  const chartConfig = {
    completed: {
      label: "Completado",
      color: "#10b981",
    },
    inProgress: {
      label: "En Progreso",
      color: "#3b82f6",
    },
    pending: {
      label: "Pendiente",
      color: "#6b7280",
    },
  } satisfies ChartConfig;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completado":
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case "En Progreso":
        return <PlayIcon className="w-5 h-5 text-blue-500" />;
      case "En Revisión":
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      case "Bloqueado":
        return <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />;
      default:
        return <PauseIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Completion Overview */}
      <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-dashboard-text-primary">
              Estado General
            </h3>
            <p className="text-sm text-dashboard-text-secondary">
              Distribución de tareas por estado
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-primary">
              {overallCompletion}%
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              Completado
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="relative w-48 h-48">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[200px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={completionData}
                  dataKey="count"
                  nameKey="status"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-dashboard-text-primary">
                  {totalTasks}
                </div>
                <div className="text-xs text-dashboard-text-secondary">
                  Total Tareas
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {completionData.map((item) => (
            <div
              key={item.status}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                {getStatusIcon(item.status)}
                <span className="text-sm text-dashboard-text-secondary">
                  {item.status}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-dashboard-text-primary">
                  {item.count}
                </span>
                <span className="text-xs text-dashboard-text-secondary">
                  ({item.percentage}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sprint Progress Comparison */}
      <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-dashboard-text-primary">
              Progreso por Sprint
            </h3>
            <p className="text-sm text-dashboard-text-secondary">
              Comparación de completado vs planificado
            </p>
          </div>
        </div>

        <div className="h-64 mb-4">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart
              data={sprintProgressData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="sprint"
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value.replace("Sprint ", "S")}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="completed"
                stackId="progress"
                fill="var(--color-completed)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="inProgress"
                stackId="progress"
                fill="var(--color-inProgress)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="pending"
                stackId="progress"
                fill="var(--color-pending)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">
              {sprintProgressData[3]?.completed || 0}%
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              Completado Actual
            </div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">
              {sprintProgressData[3]?.inProgress || 0}%
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              En Progreso
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-600">
              {sprintProgressData[3]?.pending || 0}%
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              Pendiente
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-dashboard-text-secondary">
              Velocidad promedio:
            </span>
            <span className="text-sm font-medium text-purple-primary">
              23 puntos/sprint
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionMetrics;
