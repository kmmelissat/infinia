"use client";

import React, { useState } from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

interface Milestone {
  id: string;
  name: string;
  date: string;
  status: "completed" | "upcoming" | "at-risk";
  type: "milestone" | "release" | "review";
}

interface GanttTask {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: "completed" | "in-progress" | "delayed" | "not-started";
  assignee: string;
  dependencies: string[];
  milestone?: string;
}

const GanttTimeline = () => {
  const [timeRange, setTimeRange] = useState<"month" | "quarter">("month");

  const milestones: Milestone[] = [
    {
      id: "M1",
      name: "MVP Backend",
      date: "2024-01-10",
      status: "completed",
      type: "milestone",
    },
    {
      id: "M2",
      name: "Alpha Release",
      date: "2024-01-25",
      status: "upcoming",
      type: "release",
    },
    {
      id: "M3",
      name: "Security Review",
      date: "2024-02-05",
      status: "at-risk",
      type: "review",
    },
    {
      id: "M4",
      name: "Beta Release",
      date: "2024-02-15",
      status: "upcoming",
      type: "release",
    },
  ];

  const tasks: GanttTask[] = [
    {
      id: "T1",
      name: "Configuración inicial del proyecto",
      startDate: "2024-01-01",
      endDate: "2024-01-05",
      progress: 100,
      status: "completed",
      assignee: "Tech Lead",
      dependencies: [],
      milestone: "M1",
    },
    {
      id: "T2",
      name: "Desarrollo API Authentication",
      startDate: "2024-01-06",
      endDate: "2024-01-15",
      progress: 100,
      status: "completed",
      assignee: "Backend Team",
      dependencies: ["T1"],
      milestone: "M1",
    },
    {
      id: "T3",
      name: "Frontend Dashboard",
      startDate: "2024-01-12",
      endDate: "2024-01-28",
      progress: 75,
      status: "in-progress",
      assignee: "Frontend Team",
      dependencies: ["T2"],
      milestone: "M2",
    },
    {
      id: "T4",
      name: "Integración de Pagos",
      startDate: "2024-01-20",
      endDate: "2024-02-08",
      progress: 30,
      status: "in-progress",
      assignee: "Full Stack Dev",
      dependencies: ["T2"],
      milestone: "M3",
    },
    {
      id: "T5",
      name: "Testing & QA",
      startDate: "2024-01-25",
      endDate: "2024-02-10",
      progress: 0,
      status: "not-started",
      assignee: "QA Team",
      dependencies: ["T3"],
      milestone: "M3",
    },
    {
      id: "T6",
      name: "Deployment & DevOps",
      startDate: "2024-02-05",
      endDate: "2024-02-18",
      progress: 0,
      status: "not-started",
      assignee: "DevOps Team",
      dependencies: ["T4", "T5"],
      milestone: "M4",
    },
  ];

  // Generate timeline dates
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-02-29");
  const timelineDays = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    timelineDays.push(new Date(d));
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "delayed":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  const getMilestoneIcon = (type: string, status: string) => {
    const iconClass =
      status === "completed"
        ? "text-green-500"
        : status === "at-risk"
        ? "text-red-500"
        : "text-blue-500";

    switch (type) {
      case "milestone":
        return <FlagIcon className={`w-4 h-4 ${iconClass}`} />;
      case "release":
        return <CheckCircleIcon className={`w-4 h-4 ${iconClass}`} />;
      case "review":
        return <ClockIcon className={`w-4 h-4 ${iconClass}`} />;
      default:
        return <CalendarIcon className={`w-4 h-4 ${iconClass}`} />;
    }
  };

  const calculatePosition = (date: string) => {
    const taskDate = new Date(date);
    const totalDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const daysPassed = Math.ceil(
      (taskDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Math.max(0, Math.min(100, (daysPassed / totalDays) * 100));
  };

  const calculateWidth = (start: string, end: string) => {
    const startPos = calculatePosition(start);
    const endPos = calculatePosition(end);
    return Math.max(2, endPos - startPos);
  };

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-dashboard-text-primary">
            Timeline Gantt
          </h3>
          <p className="text-sm text-dashboard-text-secondary">
            Cronograma visual de tareas y hitos del proyecto
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setTimeRange("month")}
            className={`px-3 py-1 rounded text-sm ${
              timeRange === "month"
                ? "bg-purple-primary text-white"
                : "bg-gray-100 text-dashboard-text-secondary"
            }`}
          >
            Mes
          </button>
          <button
            onClick={() => setTimeRange("quarter")}
            className={`px-3 py-1 rounded text-sm ${
              timeRange === "quarter"
                ? "bg-purple-primary text-white"
                : "bg-gray-100 text-dashboard-text-secondary"
            }`}
          >
            Trimestre
          </button>
        </div>
      </div>

      {/* Timeline Header */}
      <div className="mb-4">
        <div className="flex items-center text-xs text-dashboard-text-secondary mb-2">
          <div className="w-64 flex-shrink-0">Tarea</div>
          <div className="flex-1 grid grid-cols-8 gap-1 text-center">
            <span>Ene 1</span>
            <span>Ene 8</span>
            <span>Ene 15</span>
            <span>Ene 22</span>
            <span>Ene 29</span>
            <span>Feb 5</span>
            <span>Feb 12</span>
            <span>Feb 19</span>
          </div>
        </div>
        <div className="border-t border-dashboard-border"></div>
      </div>

      {/* Gantt Chart */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={task.id} className="flex items-center">
            {/* Task Info */}
            <div className="w-64 flex-shrink-0 pr-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono bg-gray-100 px-1 rounded">
                  {task.id}
                </span>
                <div
                  className={`w-2 h-2 rounded-full ${getStatusColor(
                    task.status
                  )}`}
                ></div>
              </div>
              <h5 className="text-sm font-medium text-dashboard-text-primary mt-1">
                {task.name}
              </h5>
              <p className="text-xs text-dashboard-text-secondary">
                {task.assignee}
              </p>
            </div>

            {/* Timeline Bar */}
            <div className="flex-1 relative h-8 bg-gray-100 rounded">
              <div
                className={`absolute top-1 h-6 rounded ${getStatusColor(
                  task.status
                )} flex items-center`}
                style={{
                  left: `${calculatePosition(task.startDate)}%`,
                  width: `${calculateWidth(task.startDate, task.endDate)}%`,
                }}
              >
                {/* Progress indicator */}
                <div
                  className="h-full bg-white bg-opacity-30 rounded-l"
                  style={{ width: `${task.progress}%` }}
                ></div>
                <span className="text-xs text-white font-medium ml-2">
                  {task.progress}%
                </span>
              </div>

              {/* Dependencies lines */}
              {task.dependencies.map((depId) => {
                const depTask = tasks.find((t) => t.id === depId);
                if (!depTask) return null;

                return (
                  <div
                    key={depId}
                    className="absolute top-4 h-0.5 bg-gray-400"
                    style={{
                      left: `${calculatePosition(depTask.endDate)}%`,
                      width: `${
                        calculatePosition(task.startDate) -
                        calculatePosition(depTask.endDate)
                      }%`,
                    }}
                  ></div>
                );
              })}
            </div>

            {/* Task Details */}
            <div className="w-24 flex-shrink-0 text-right text-xs text-dashboard-text-secondary ml-4">
              <div>{new Date(task.startDate).toLocaleDateString()}</div>
              <div>{new Date(task.endDate).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Milestones */}
      <div className="mt-6 pt-4 border-t border-dashboard-border">
        <h4 className="text-sm font-medium text-dashboard-text-primary mb-3">
          Hitos del Proyecto
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className={`p-3 rounded-lg border ${
                milestone.status === "completed"
                  ? "bg-green-50 border-green-200"
                  : milestone.status === "at-risk"
                  ? "bg-red-50 border-red-200"
                  : "bg-blue-50 border-blue-200"
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                {getMilestoneIcon(milestone.type, milestone.status)}
                <span className="text-xs font-medium text-dashboard-text-primary">
                  {milestone.id}
                </span>
              </div>
              <h5 className="text-sm font-medium text-dashboard-text-primary">
                {milestone.name}
              </h5>
              <p className="text-xs text-dashboard-text-secondary">
                {new Date(milestone.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-between text-xs text-dashboard-text-secondary">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Completado</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>En Progreso</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Retrasado</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
            <span>No Iniciado</span>
          </div>
        </div>
        <span>Cronograma: Enero - Febrero 2024</span>
      </div>
    </div>
  );
};

export default GanttTimeline;
