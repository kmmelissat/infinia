"use client";

import React from "react";
import {
  ExclamationTriangleIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface Risk {
  id: string;
  title: string;
  impact: "high" | "medium" | "low";
  probability: "high" | "medium" | "low";
  dueDate: string;
  owner: string;
  daysOpen: number;
}

const OpenRisks = () => {
  const risks: Risk[] = [
    {
      id: "R001",
      title: "Retraso en API de terceros",
      impact: "high",
      probability: "medium",
      dueDate: "2024-01-15",
      owner: "Tech Lead",
      daysOpen: 12,
    },
    {
      id: "R002",
      title: "Cambios en requerimientos UX",
      impact: "medium",
      probability: "high",
      dueDate: "2024-01-20",
      owner: "PM",
      daysOpen: 8,
    },
    {
      id: "R003",
      title: "Disponibilidad del equipo QA",
      impact: "high",
      probability: "low",
      dueDate: "2024-01-25",
      owner: "QA Lead",
      daysOpen: 5,
    },
  ];

  const totalRisks = risks.length;
  const highImpactRisks = risks.filter((r) => r.impact === "high").length;
  const overdueTasks = risks.filter(
    (r) => new Date(r.dueDate) < new Date()
  ).length;

  const getRiskScore = (impact: string, probability: string) => {
    const impactScore = { high: 3, medium: 2, low: 1 };
    const probScore = { high: 3, medium: 2, low: 1 };
    return (
      impactScore[impact as keyof typeof impactScore] *
      probScore[probability as keyof typeof probScore]
    );
  };

  const getRiskColor = (impact: string, probability: string) => {
    const score = getRiskScore(impact, probability);
    if (score >= 6) return "bg-red-100 border-red-200 text-red-800";
    if (score >= 4) return "bg-yellow-100 border-yellow-200 text-yellow-800";
    return "bg-green-100 border-green-200 text-green-800";
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
    }
  };

  const topRisks = risks
    .sort(
      (a, b) =>
        getRiskScore(b.impact, b.probability) -
        getRiskScore(a.impact, a.probability)
    )
    .slice(0, 3);

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dashboard-text-primary">
          Riesgos Abiertos
        </h3>
        <div className="flex items-center space-x-2">
          <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
          <span className="text-lg font-bold text-dashboard-text-primary">
            {totalRisks}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <div className="text-lg font-bold text-dashboard-text-primary">
            {totalRisks}
          </div>
          <div className="text-xs text-dashboard-text-secondary">Total</div>
        </div>
        <div className="text-center p-2 bg-red-50 rounded-lg">
          <div className="text-lg font-bold text-red-600">
            {highImpactRisks}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Alto Impacto
          </div>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded-lg">
          <div className="text-lg font-bold text-yellow-600">
            {overdueTasks}
          </div>
          <div className="text-xs text-dashboard-text-secondary">Vencidos</div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-dashboard-text-primary">
          Top 3 por Impacto
        </h4>
        {topRisks.map((risk) => (
          <div
            key={risk.id}
            className={`p-3 rounded-lg border ${getRiskColor(
              risk.impact,
              risk.probability
            )}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-mono bg-white px-1 rounded">
                    {risk.id}
                  </span>
                  <span
                    className={`text-xs font-medium ${getImpactColor(
                      risk.impact
                    )}`}
                  >
                    {risk.impact.toUpperCase()}
                  </span>
                </div>
                <div className="text-sm font-medium text-dashboard-text-primary mb-2">
                  {risk.title}
                </div>
                <div className="flex items-center space-x-4 text-xs text-dashboard-text-secondary">
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-3 h-3" />
                    <span>{risk.owner}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-3 h-3" />
                    <span>{risk.daysOpen}d abierto</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-dashboard-text-secondary">
                  Vence
                </div>
                <div className="text-xs font-medium">
                  {new Date(risk.dueDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenRisks;
