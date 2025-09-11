"use client";

import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

interface Milestone {
  id: string;
  name: string;
  plannedDate: string;
  actualDate?: string;
  status: "completed" | "in-progress" | "at-risk" | "delayed";
  progress: number;
  daysDeviation: number;
  owner: string;
}

const MilestonesTimeline = () => {
  const milestones: Milestone[] = [
    {
      id: "M1",
      name: "MVP Backend API",
      plannedDate: "2024-01-10",
      actualDate: "2024-01-08",
      status: "completed",
      progress: 100,
      daysDeviation: -2,
      owner: "Backend Team",
    },
    {
      id: "M2",
      name: "UI/UX Design System",
      plannedDate: "2024-01-15",
      actualDate: "2024-01-17",
      status: "completed",
      progress: 100,
      daysDeviation: 2,
      owner: "Design Team",
    },
    {
      id: "M3",
      name: "Frontend Integration",
      plannedDate: "2024-01-25",
      status: "in-progress",
      progress: 75,
      daysDeviation: 0,
      owner: "Frontend Team",
    },
    {
      id: "M4",
      name: "Testing & QA",
      plannedDate: "2024-02-05",
      status: "at-risk",
      progress: 0,
      daysDeviation: 3,
      owner: "QA Team",
    },
    {
      id: "M5",
      name: "Production Deploy",
      plannedDate: "2024-02-15",
      status: "delayed",
      progress: 0,
      daysDeviation: 5,
      owner: "DevOps Team",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="w-4 h-4 text-green-500" />;
      case "in-progress":
        return <ClockIcon className="w-4 h-4 text-blue-500" />;
      case "at-risk":
        return <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500" />;
      case "delayed":
        return <ExclamationTriangleIcon className="w-4 h-4 text-red-500" />;
      default:
        return <CalendarIcon className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 border-green-200 text-green-800";
      case "in-progress":
        return "bg-blue-100 border-blue-200 text-blue-800";
      case "at-risk":
        return "bg-yellow-100 border-yellow-200 text-yellow-800";
      case "delayed":
        return "bg-red-100 border-red-200 text-red-800";
      default:
        return "bg-gray-100 border-gray-200 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completado";
      case "in-progress":
        return "En Progreso";
      case "at-risk":
        return "En Riesgo";
      case "delayed":
        return "Retrasado";
      default:
        return "Pendiente";
    }
  };

  const completedMilestones = milestones.filter(
    (m) => m.status === "completed"
  ).length;
  const totalMilestones = milestones.length;
  const onTimeDeliveries = milestones.filter(
    (m) => m.status === "completed" && m.daysDeviation <= 0
  ).length;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-dashboard-text-primary">
            Timeline de Hitos
          </h3>
          <p className="text-sm text-dashboard-text-secondary">
            Progreso de entregables principales
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-primary">
            {completedMilestones}/{totalMilestones}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Hitos completados
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center p-2 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-600">
            {onTimeDeliveries}
          </div>
          <div className="text-xs text-dashboard-text-secondary">A Tiempo</div>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded-lg">
          <div className="text-lg font-bold text-yellow-600">
            {milestones.filter((m) => m.status === "at-risk").length}
          </div>
          <div className="text-xs text-dashboard-text-secondary">En Riesgo</div>
        </div>
        <div className="text-center p-2 bg-red-50 rounded-lg">
          <div className="text-lg font-bold text-red-600">
            {milestones.filter((m) => m.status === "delayed").length}
          </div>
          <div className="text-xs text-dashboard-text-secondary">
            Retrasados
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {/* Timeline line */}
            {index < milestones.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-200"></div>
            )}

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {getStatusIcon(milestone.status)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-medium text-dashboard-text-primary">
                      {milestone.name}
                    </h4>
                    <p className="text-xs text-dashboard-text-secondary">
                      {milestone.owner}
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        milestone.status
                      )}`}
                    >
                      {getStatusLabel(milestone.status)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-dashboard-text-secondary mb-2">
                  <span>
                    Plan: {new Date(milestone.plannedDate).toLocaleDateString()}
                    {milestone.actualDate && (
                      <span className="ml-2">
                        | Real:{" "}
                        {new Date(milestone.actualDate).toLocaleDateString()}
                      </span>
                    )}
                  </span>
                  {milestone.daysDeviation !== 0 && (
                    <span
                      className={`font-medium ${
                        milestone.daysDeviation > 0
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {milestone.daysDeviation > 0 ? "+" : ""}
                      {milestone.daysDeviation}d
                    </span>
                  )}
                </div>

                {milestone.status !== "completed" && (
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-purple-primary h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${milestone.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestonesTimeline;
