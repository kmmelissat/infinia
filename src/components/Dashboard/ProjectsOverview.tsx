"use client";

import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { PieChart, Pie, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const ProjectsOverview = () => {
  const chartData = [
    { status: "completed", projects: 32, fill: "#8b5cf6" },
    { status: "inProgress", projects: 14, fill: "#e879f9" },
    { status: "notStarted", projects: 54, fill: "#e2e8f0" },
  ];

  const chartConfig = {
    projects: {
      label: "Projects",
    },
    completed: {
      label: "Completed",
      color: "#8b5cf6",
    },
    inProgress: {
      label: "In Progress",
      color: "#e879f9",
    },
    notStarted: {
      label: "Not Started",
      color: "#e2e8f0",
    },
  } satisfies ChartConfig;

  const totalProjects = chartData.reduce((acc, curr) => acc + curr.projects, 0);

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          Projects Overview
        </h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Donut Chart Container */}
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
                data={chartData}
                dataKey="projects"
                nameKey="status"
                innerRadius={60}
                strokeWidth={5}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-dashboard-text-primary">
                {totalProjects}
              </div>
              <div className="text-xs text-dashboard-text-secondary">
                Total Projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-4">
        {chartData.map((item) => (
          <div key={item.status} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              ></div>
              <span className="text-sm text-dashboard-text-secondary">
                {chartConfig[item.status as keyof typeof chartConfig]?.label}:
              </span>
            </div>
            <span className="text-sm font-medium text-dashboard-text-primary">
              {item.projects}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;
