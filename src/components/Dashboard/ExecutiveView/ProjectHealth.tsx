"use client";

import React from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

interface HealthMetric {
  name: string;
  status: "green" | "yellow" | "red";
  value: string;
  target: string;
}

const ProjectHealth = () => {
  const healthMetrics: HealthMetric[] = [
    { name: "Plazo (SPI)", status: "yellow", value: "0.89", target: "≥0.95" },
    {
      name: "Presupuesto (CPI)",
      status: "green",
      value: "1.02",
      target: "≥0.95",
    },
    { name: "Alcance", status: "green", value: "98%", target: "≥95%" },
    { name: "Calidad", status: "red", value: "78%", target: "≥90%" },
  ];

  // La salud general es el peor estado entre todas las métricas
  const overallHealth = healthMetrics.reduce((worst, metric) => {
    const priority = { red: 3, yellow: 2, green: 1 };
    return priority[metric.status] > priority[worst] ? metric.status : worst;
  }, "green" as "green" | "yellow" | "red");

  const getStatusIcon = (status: "green" | "yellow" | "red") => {
    switch (status) {
      case "green":
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case "yellow":
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />;
      case "red":
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusColor = (status: "green" | "yellow" | "red") => {
    switch (status) {
      case "green":
        return "bg-green-100 border-green-200";
      case "yellow":
        return "bg-yellow-100 border-yellow-200";
      case "red":
        return "bg-red-100 border-red-200";
    }
  };

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dashboard-text-primary">
          Project Health
        </h3>
        <div className="flex items-center space-x-2">
          {getStatusIcon(overallHealth)}
          <span
            className={`text-sm font-medium ${
              overallHealth === "green"
                ? "text-green-600"
                : overallHealth === "yellow"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {overallHealth === "green"
              ? "Saludable"
              : overallHealth === "yellow"
              ? "Atención"
              : "Crítico"}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {healthMetrics.map((metric) => (
          <div
            key={metric.name}
            className={`p-3 rounded-lg border ${getStatusColor(metric.status)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getStatusIcon(metric.status)}
                <span className="text-sm font-medium text-dashboard-text-primary">
                  {metric.name}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-dashboard-text-primary">
                  {metric.value}
                </div>
                <div className="text-xs text-dashboard-text-secondary">
                  Meta: {metric.target}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHealth;
