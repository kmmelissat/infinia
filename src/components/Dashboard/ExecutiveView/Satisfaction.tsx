"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  FaceSmileIcon,
  FaceFrownIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const Satisfaction = () => {
  const satisfactionData = [
    { week: "S1", nps: 45, csat: 4.2, responses: 12 },
    { week: "S2", nps: 52, csat: 4.4, responses: 15 },
    { week: "S3", nps: 48, csat: 4.3, responses: 18 },
    { week: "S4", nps: 58, csat: 4.6, responses: 14 },
  ];

  const currentNPS = satisfactionData[satisfactionData.length - 1].nps;
  const currentCSAT = satisfactionData[satisfactionData.length - 1].csat;
  const previousNPS = satisfactionData[satisfactionData.length - 2].nps;
  const previousCSAT = satisfactionData[satisfactionData.length - 2].csat;

  const npsChange = currentNPS - previousNPS;
  const csatChange = currentCSAT - previousCSAT;

  const getNPSStatus = (nps: number) => {
    if (nps >= 50)
      return {
        color: "text-green-600",
        bg: "bg-green-100",
        label: "Excelente",
      };
    if (nps >= 0)
      return { color: "text-yellow-600", bg: "bg-yellow-100", label: "Bueno" };
    return { color: "text-red-600", bg: "bg-red-100", label: "Crítico" };
  };

  const getCSATStatus = (csat: number) => {
    if (csat >= 4.5)
      return {
        color: "text-green-600",
        bg: "bg-green-100",
        label: "Excelente",
      };
    if (csat >= 4.0)
      return { color: "text-yellow-600", bg: "bg-yellow-100", label: "Bueno" };
    return { color: "text-red-600", bg: "bg-red-100", label: "Crítico" };
  };

  const npsStatus = getNPSStatus(currentNPS);
  const csatStatus = getCSATStatus(currentCSAT);

  const chartConfig = {
    nps: {
      label: "NPS",
      color: "#8b5cf6",
    },
    csat: {
      label: "CSAT",
      color: "#e879f9",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dashboard-text-primary">
          Satisfacción Cliente
        </h3>
        <div className="flex items-center space-x-2">
          {currentNPS >= 50 ? (
            <FaceSmileIcon className="w-5 h-5 text-green-500" />
          ) : (
            <FaceFrownIcon className="w-5 h-5 text-yellow-500" />
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-3 rounded-lg ${npsStatus.bg}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-dashboard-text-primary">
                {currentNPS}
              </div>
              <div className="text-xs text-dashboard-text-secondary">
                Net Promoter Score
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {npsChange > 0 ? (
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 text-red-500" />
              )}
              <span
                className={`text-xs font-medium ${
                  npsChange > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {npsChange > 0 ? "+" : ""}
                {npsChange}
              </span>
            </div>
          </div>
          <div className={`text-xs font-medium mt-1 ${npsStatus.color}`}>
            {npsStatus.label}
          </div>
        </div>

        <div className={`p-3 rounded-lg ${csatStatus.bg}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-dashboard-text-primary">
                {currentCSAT.toFixed(1)}
              </div>
              <div className="text-xs text-dashboard-text-secondary">
                CSAT (1-5)
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {csatChange > 0 ? (
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 text-red-500" />
              )}
              <span
                className={`text-xs font-medium ${
                  csatChange > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {csatChange > 0 ? "+" : ""}
                {csatChange.toFixed(1)}
              </span>
            </div>
          </div>
          <div className={`text-xs font-medium mt-1 ${csatStatus.color}`}>
            {csatStatus.label}
          </div>
        </div>
      </div>

      <div className="h-24 mb-2">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            data={satisfactionData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="week" tickLine={false} axisLine={false} />
            <YAxis hide />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => [
                    name === "nps"
                      ? `${value}`
                      : `${Number(value).toFixed(1)}/5`,
                    name === "nps" ? "NPS" : "CSAT",
                  ]}
                />
              }
            />
            <Line
              dataKey="nps"
              type="monotone"
              stroke="var(--color-nps)"
              strokeWidth={2}
              dot={{ fill: "var(--color-nps)", r: 3 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      <div className="flex justify-between text-xs text-dashboard-text-secondary">
        <span>Tendencia últimas 4 semanas</span>
        <span>
          {satisfactionData[satisfactionData.length - 1].responses} respuestas
        </span>
      </div>
    </div>
  );
};

export default Satisfaction;
