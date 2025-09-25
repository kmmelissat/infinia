"use client";

import React, { useState } from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  PlayIcon,
  PauseIcon,
  ExclamationTriangleIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleSolidIcon } from "@heroicons/react/24/solid";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "review" | "done" | "blocked";
  priority: "low" | "medium" | "high" | "critical";
  assignee: string;
  storyPoints: number;
  startDate: string;
  dueDate: string;
  completedDate?: string;
  tags: string[];
  sprint: string;
}

interface Sprint {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: "planning" | "active" | "completed";
  tasks: Task[];
}

const SprintTasksList = () => {
  const [selectedSprint, setSelectedSprint] = useState("sprint-4");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const sprints: Sprint[] = [
    {
      id: "sprint-4",
      name: "Sprint 4",
      startDate: "2024-01-15",
      endDate: "2024-01-29",
      status: "active",
      tasks: [
        {
          id: "US-001",
          title: "Implementar autenticación de usuarios",
          description:
            "Como usuario, quiero poder iniciar sesión de forma segura",
          status: "done",
          priority: "high",
          assignee: "Ana García",
          storyPoints: 8,
          startDate: "2024-01-15",
          dueDate: "2024-01-20",
          completedDate: "2024-01-19",
          tags: ["backend", "security"],
          sprint: "sprint-4",
        },
        {
          id: "US-002",
          title: "Dashboard de métricas en tiempo real",
          description: "Como PM, quiero ver métricas del proyecto actualizadas",
          status: "in-progress",
          priority: "high",
          assignee: "Carlos López",
          storyPoints: 13,
          startDate: "2024-01-16",
          dueDate: "2024-01-25",
          tags: ["frontend", "charts"],
          sprint: "sprint-4",
        },
        {
          id: "US-003",
          title: "Integración con API de pagos",
          description: "Como usuario, quiero poder realizar pagos seguros",
          status: "review",
          priority: "critical",
          assignee: "María Rodríguez",
          storyPoints: 21,
          startDate: "2024-01-18",
          dueDate: "2024-01-28",
          tags: ["backend", "payments", "integration"],
          sprint: "sprint-4",
        },
        {
          id: "US-004",
          title: "Optimización de rendimiento",
          description: "Como usuario, quiero que la app cargue más rápido",
          status: "blocked",
          priority: "medium",
          assignee: "David Chen",
          storyPoints: 5,
          startDate: "2024-01-20",
          dueDate: "2024-01-27",
          tags: ["performance", "optimization"],
          sprint: "sprint-4",
        },
        {
          id: "US-005",
          title: "Tests automatizados E2E",
          description: "Como QA, quiero tests que validen flujos completos",
          status: "todo",
          priority: "medium",
          assignee: "Elena Martín",
          storyPoints: 8,
          startDate: "2024-01-22",
          dueDate: "2024-01-29",
          tags: ["testing", "qa", "automation"],
          sprint: "sprint-4",
        },
      ],
    },
    {
      id: "sprint-3",
      name: "Sprint 3",
      startDate: "2024-01-01",
      endDate: "2024-01-14",
      status: "completed",
      tasks: [
        {
          id: "US-006",
          title: "Setup inicial del proyecto",
          description: "Configurar estructura base y herramientas",
          status: "done",
          priority: "high",
          assignee: "Tech Lead",
          storyPoints: 5,
          startDate: "2024-01-01",
          dueDate: "2024-01-05",
          completedDate: "2024-01-04",
          tags: ["setup", "infrastructure"],
          sprint: "sprint-3",
        },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return <CheckCircleSolidIcon className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <PlayIcon className="w-5 h-5 text-blue-500" />;
      case "review":
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      case "blocked":
        return <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />;
      default:
        return <PauseIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "done":
        return "bg-green-100 border-green-200 text-green-800";
      case "in-progress":
        return "bg-blue-100 border-blue-200 text-blue-800";
      case "review":
        return "bg-yellow-100 border-yellow-200 text-yellow-800";
      case "blocked":
        return "bg-red-100 border-red-200 text-red-800";
      default:
        return "bg-gray-100 border-gray-200 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "done":
        return "Completado";
      case "in-progress":
        return "En Progreso";
      case "review":
        return "En Revisión";
      case "blocked":
        return "Bloqueado";
      default:
        return "Pendiente";
    }
  };

  const currentSprint = sprints.find((s) => s.id === selectedSprint);
  const filteredTasks =
    currentSprint?.tasks.filter(
      (task) => filterStatus === "all" || task.status === filterStatus
    ) || [];

  const taskStats = currentSprint?.tasks.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      acc.totalPoints += task.storyPoints;
      if (task.status === "done") acc.completedPoints += task.storyPoints;
      return acc;
    },
    {
      todo: 0,
      "in-progress": 0,
      review: 0,
      done: 0,
      blocked: 0,
      totalPoints: 0,
      completedPoints: 0,
    }
  ) || {
    todo: 0,
    "in-progress": 0,
    review: 0,
    done: 0,
    blocked: 0,
    totalPoints: 0,
    completedPoints: 0,
  };

  const completionPercentage =
    taskStats.totalPoints > 0
      ? Math.round((taskStats.completedPoints / taskStats.totalPoints) * 100)
      : 0;

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-dashboard-text-primary">
            Tareas por Sprint
          </h3>
          <p className="text-sm text-dashboard-text-secondary">
            Seguimiento detallado de historias de usuario y tareas
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedSprint}
            onChange={(e) => setSelectedSprint(e.target.value)}
            className="px-3 py-2 border border-dashboard-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-primary"
          >
            {sprints.map((sprint) => (
              <option key={sprint.id} value={sprint.id}>
                {sprint.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sprint Info & Stats */}
      <div className="mb-6 p-4 bg-purple-50 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-medium text-dashboard-text-primary">
              {currentSprint?.name}
            </h4>
            <p className="text-sm text-dashboard-text-secondary">
              {currentSprint?.startDate} - {currentSprint?.endDate}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-primary">
              {completionPercentage}%
            </div>
            <div className="text-xs text-dashboard-text-secondary">
              {taskStats.completedPoints}/{taskStats.totalPoints} puntos
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {Object.entries(taskStats)
            .slice(0, 5)
            .map(([status, count]) => (
              <div key={status} className="text-center">
                <div className="text-lg font-bold text-dashboard-text-primary">
                  {count as number}
                </div>
                <div className="text-xs text-dashboard-text-secondary">
                  {getStatusLabel(status)}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-sm text-dashboard-text-secondary">Filtrar:</span>
        {["all", "todo", "in-progress", "review", "done", "blocked"].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filterStatus === status
                  ? "bg-purple-primary text-white"
                  : "bg-gray-100 text-dashboard-text-secondary hover:bg-gray-200"
              }`}
            >
              {status === "all" ? "Todas" : getStatusLabel(status)}
            </button>
          )
        )}
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="border border-dashboard-border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(task.status)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                      {task.id}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${getPriorityColor(
                        task.priority
                      )}`}
                      title={`Prioridad: ${task.priority}`}
                    ></div>
                    <span className="text-xs text-dashboard-text-secondary">
                      {task.storyPoints} pts
                    </span>
                  </div>

                  <h5 className="font-medium text-dashboard-text-primary mb-1">
                    {task.title}
                  </h5>
                  <p className="text-sm text-dashboard-text-secondary mb-3">
                    {task.description}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-dashboard-text-secondary">
                    <div className="flex items-center space-x-1">
                      <UserIcon className="w-3 h-3" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-3 h-3" />
                      <span>
                        Vence: {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-2">
                    {task.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-xs rounded-full text-dashboard-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4">
                <div
                  className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    task.status
                  )}`}
                >
                  {getStatusLabel(task.status)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-8 text-dashboard-text-secondary">
          No hay tareas que coincidan con el filtro seleccionado
        </div>
      )}
    </div>
  );
};

export default SprintTasksList;
