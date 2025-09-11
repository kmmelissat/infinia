"use client";

import React, { useState } from "react";
import { PlusIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  favorite: boolean;
  icon: string;
  color: string;
}

const TasksWidget = () => {
  const [activeTab, setActiveTab] = useState("today");

  const tasks: Task[] = [
    {
      id: "1",
      title: "BrightBridge - Website Design",
      description: "Design a framer website with modern templates",
      completed: false,
      favorite: true,
      icon: "❤️",
      color: "bg-gradient-magenta/20",
    },
    {
      id: "2",
      title: "Github - Upload Dev Files & Images",
      description: "Collaborate with Developers to handle the SaaS Project.",
      completed: false,
      favorite: false,
      icon: "🐙",
      color: "bg-purple-light/30",
    },
    {
      id: "3",
      title: "9TDesign - Mobile App Prototype",
      description: "Ready prototype for testing user in this week.",
      completed: false,
      favorite: false,
      icon: "📱",
      color: "bg-gradient-soft-pink/30",
    },
    {
      id: "4",
      title: "Horizon - Dashboard Design",
      description: "Design a dashboard comfortable with Vision Pro",
      completed: false,
      favorite: false,
      icon: "🎯",
      color: "bg-purple-primary/20",
    },
  ];

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          My Tasks
        </h2>
        <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
          <PlusIcon className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        <button
          onClick={() => setActiveTab("today")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "today"
              ? "bg-purple-primary text-white"
              : "text-dashboard-text-secondary hover:text-dashboard-text-primary"
          }`}
        >
          Today
        </button>
        <button
          onClick={() => setActiveTab("tomorrow")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "tomorrow"
              ? "bg-purple-primary text-white"
              : "text-dashboard-text-secondary hover:text-dashboard-text-primary"
          }`}
        >
          Tomorrow
        </button>
      </div>

      {/* Task Counter */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-purple-primary text-white rounded-full flex items-center justify-center text-xs font-medium">
          12
        </div>
        <span className="text-dashboard-text-secondary text-sm">
          On Going Tasks
        </span>
        <button className="ml-auto">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start space-x-3 group">
            <div
              className={`w-10 h-10 ${task.color} rounded-lg flex items-center justify-center text-lg flex-shrink-0`}
            >
              {task.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-dashboard-text-primary text-sm mb-1">
                {task.title}
              </h3>
              <p className="text-xs text-dashboard-text-secondary leading-relaxed">
                {task.description}
              </p>
            </div>
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"></button>
              <button>
                {task.favorite ? (
                  <HeartSolidIcon className="w-4 h-4 text-red-500" />
                ) : (
                  <HeartIcon className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksWidget;
