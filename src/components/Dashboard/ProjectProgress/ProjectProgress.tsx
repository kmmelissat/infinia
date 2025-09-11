"use client";

import React from "react";
import SprintTasksList from "./SprintTasksList";
import CompletionMetrics from "./CompletionMetrics";
import GanttTimeline from "./GanttTimeline";
import ProductivityKPIs from "./ProductivityKPIs";

const ProjectProgress = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-dashboard-text-primary">
            Progreso Detallado del Proyecto
          </h2>
          <p className="text-sm text-dashboard-text-secondary">
            Seguimiento completo de tareas, hitos y métricas de productividad
          </p>
        </div>
      </div>

      {/* Completion Metrics */}
      <CompletionMetrics />

      {/* Sprint Tasks List */}
      <SprintTasksList />

      {/* Gantt Timeline */}
      <GanttTimeline />

      {/* Productivity KPIs */}
      <ProductivityKPIs />
    </div>
  );
};

export default ProjectProgress;
