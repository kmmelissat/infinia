"use client";

import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import ProjectProgress from "@/components/Dashboard/ProjectProgress/ProjectProgress";

const ProjectProgressPage = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-dashboard-text-secondary mb-1">
                Dashboard / Progreso Detallado
              </p>
              <h1 className="text-3xl font-bold text-dashboard-text-primary">
                Project Progress
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar tareas, sprints..."
                  className="w-80 pl-10 pr-4 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Project Progress Content */}
        <ProjectProgress />
      </div>
    </div>
  );
};

export default ProjectProgressPage;
