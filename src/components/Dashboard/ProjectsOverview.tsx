"use client";

import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const ProjectsOverview = () => {
  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          Projects Overview
        </h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Donut Chart Container */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          {/* Donut Chart SVG */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="8"
            />

            {/* In Progress - Orange */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#e879f9"
              strokeWidth="8"
              strokeDasharray={`${(14 / 100) * 220} 220`}
              strokeDashoffset="0"
              strokeLinecap="round"
            />

            {/* Completed - Blue */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="8"
              strokeDasharray={`${(32 / 100) * 220} 220`}
              strokeDashoffset={`-${(14 / 100) * 220}`}
              strokeLinecap="round"
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-dashboard-text-primary">
                100
              </div>
              <div className="text-xs text-dashboard-text-secondary">
                Total Projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-magenta rounded-full"></div>
            <span className="text-sm text-dashboard-text-secondary">
              In Progress:
            </span>
          </div>
          <span className="text-sm font-medium text-dashboard-text-primary">
            14
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
            <span className="text-sm text-dashboard-text-secondary">
              Completed:
            </span>
          </div>
          <span className="text-sm font-medium text-dashboard-text-primary">
            32
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-dashboard-text-secondary">
              Not Started:
            </span>
          </div>
          <span className="text-sm font-medium text-dashboard-text-primary">
            54
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
