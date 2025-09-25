"use client";

import React from "react";
import TeamManagement from "@/components/Dashboard/TeamManagement/TeamManagement";

const TeamPage = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div>
          <p className="text-sm text-dashboard-text-secondary mb-1">
            Equipo GameShop Ecommerce
          </p>
          <h1 className="text-3xl font-bold text-dashboard-text-primary">
            Gestión del Equipo
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">🎮</span>
            </div>
            <span className="text-sm text-dashboard-text-secondary">
              Equipo de desarrollo del ecommerce
            </span>
          </div>
        </div>
      </div>

      {/* Team Management Content */}
      <TeamManagement />
    </div>
  );
};

export default TeamPage;
