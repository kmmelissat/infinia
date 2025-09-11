"use client";

import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import ExecutiveView from "@/components/Dashboard/ExecutiveView/ExecutiveView";
import DeliveryTimeline from "@/components/Dashboard/DeliveryTimeline/DeliveryTimeline";

const Dashboard = () => {
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
                Manage and track your projects
              </p>
              <h1 className="text-3xl font-bold text-dashboard-text-primary">
                Project Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Task, Meeting, Projects..."
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

        {/* Executive View */}
        <ExecutiveView />

        {/* Divider */}
        <div className="border-t border-dashboard-border my-8"></div>

        {/* Delivery & Timeline */}
        <DeliveryTimeline />
      </div>
    </div>
  );
};

export default Dashboard;
