"use client";

import React from "react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

interface WIPColumn {
  name: string;
  current: number;
  limit: number;
  items: string[];
  status: "ok" | "warning" | "exceeded";
}

const WIPLimits = () => {
  const wipColumns: WIPColumn[] = [
    {
      name: "Backlog",
      current: 25,
      limit: 30,
      items: ["User Auth", "Payment Flow", "Dashboard", "Reports", "Settings"],
      status: "ok",
    },
    {
      name: "In Progress",
      current: 8,
      limit: 6,
      items: ["API Integration", "UI Components", "Testing Suite"],
      status: "exceeded",
    },
    {
      name: "Review",
      current: 4,
      limit: 5,
      items: ["Code Review PR#123", "Design Review", "Security Review"],
      status: "warning",
    },
    {
      name: "QA",
      current: 3,
      limit: 4,
      items: ["Login Tests", "Payment Tests", "E2E Tests"],
      status: "ok",
    },
    {
      name: "Done",
      current: 42,
      limit: 999, // Sin límite para Done
      items: ["MVP Backend", "Design System", "CI/CD Pipeline"],
      status: "ok",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ok":
        return <CheckCircleIcon className="w-4 h-4 text-green-500" />;
      case "warning":
        return <ClockIcon className="w-4 h-4 text-yellow-500" />;
      case "exceeded":
        return <ExclamationTriangleIcon className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ok":
        return "border-green-200 bg-green-50";
      case "warning":
        return "border-yellow-200 bg-yellow-50";
      case "exceeded":
        return "border-red-200 bg-red-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const getProgressBarColor = (status: string) => {
    switch (status) {
      case "ok":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "exceeded":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const totalWIP = wipColumns.reduce((acc, col) => acc + col.current, 0);
  const exceededColumns = wipColumns.filter(
    (col) => col.status === "exceeded"
  ).length;
  const warningColumns = wipColumns.filter(
    (col) => col.status === "warning"
  ).length;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-dashboard-text-primary">
            WIP Limits
          </h3>
          <p className="text-sm text-dashboard-text-secondary">
            Work In Progress por estado del flujo
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-primary">
            {totalWIP}
          </div>
          <div className="text-xs text-dashboard-text-secondary">Total WIP</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center p-2 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-600">
            {wipColumns.filter((col) => col.status === "ok").length}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Dentro del Límite
          </div>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded-lg">
          <div className="text-lg font-bold text-yellow-600">
            {warningColumns}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Cerca del Límite
          </div>
        </div>
        <div className="text-center p-2 bg-red-50 rounded-lg">
          <div className="text-lg font-bold text-red-600">
            {exceededColumns}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Límite Excedido
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {wipColumns.map((column) => (
          <div
            key={column.name}
            className={`p-4 rounded-lg border ${getStatusColor(column.status)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getStatusIcon(column.status)}
                <h4 className="text-sm font-medium text-dashboard-text-primary">
                  {column.name}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-dashboard-text-primary">
                  {column.current}
                </span>
                {column.name !== "Done" && (
                  <span className="text-sm text-dashboard-text-secondary">
                    /{column.limit}
                  </span>
                )}
              </div>
            </div>

            {column.name !== "Done" && (
              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(
                      column.status
                    )}`}
                    style={{
                      width: `${Math.min(
                        (column.current / column.limit) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-dashboard-text-secondary mt-1">
                  <span>0</span>
                  <span>
                    {((column.current / column.limit) * 100).toFixed(0)}%
                  </span>
                  <span>{column.limit}</span>
                </div>
              </div>
            )}

            <div className="space-y-1">
              {column.items.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="text-xs text-dashboard-text-secondary"
                >
                  • {item}
                </div>
              ))}
              {column.items.length > 3 && (
                <div className="text-xs text-dashboard-text-secondary font-medium">
                  +{column.items.length - 3} más...
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-xs text-dashboard-text-secondary">
          <strong>WIP Limits:</strong> Limitan el trabajo en progreso para
          mejorar el flujo y detectar cuellos de botella temprano.
        </div>
      </div>
    </div>
  );
};

export default WIPLimits;
