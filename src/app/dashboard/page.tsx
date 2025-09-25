"use client";

import React from "react";
import ExecutiveView from "@/components/Dashboard/ExecutiveView/ExecutiveView";
import DeliveryTimeline from "@/components/Dashboard/DeliveryTimeline/DeliveryTimeline";

const Dashboard = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div>
          <p className="text-sm text-dashboard-text-secondary mb-1">
            Desarrollo del Ecommerce GameShop
          </p>
          <h1 className="text-3xl font-bold text-dashboard-text-primary">
            Dashboard del Proyecto
          </h1>
          <div className="mt-3 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🎮</span>
              </div>
              <div>
                <p className="text-sm font-medium text-dashboard-text-primary">
                  GameShop Ecommerce
                </p>
                <p className="text-xs text-dashboard-text-secondary">
                  Plataforma de videojuegos
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">
                En desarrollo activo
              </span>
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
  );
};

export default Dashboard;
