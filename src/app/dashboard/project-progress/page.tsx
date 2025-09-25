"use client";

import React from "react";
import ProjectProgress from "@/components/Dashboard/ProjectProgress/ProjectProgress";

const ProjectProgressPage = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div>
          <p className="text-sm text-dashboard-text-secondary mb-1">
            Progreso del Ecommerce GameShop
          </p>
          <h1 className="text-3xl font-bold text-dashboard-text-primary">
            Progreso Detallado del Proyecto
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">🎮</span>
            </div>
            <span className="text-sm text-dashboard-text-secondary">
              Seguimiento detallado del desarrollo
            </span>
          </div>
        </div>
      </div>

      {/* Project Progress Content */}
      <ProjectProgress />
    </div>
  );
};

export default ProjectProgressPage;
