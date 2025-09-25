"use client";

import React from "react";
import ProjectChat from "@/components/Dashboard/Communication/ProjectChat";

const CommunicationPage = () => {
  return (
    <div className="p-4">
      {/* Header Simple */}
      <div className="mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🎮</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-dashboard-text-primary">
              Chat GameShop
            </h1>
            <p className="text-sm text-dashboard-text-secondary">
              Comunicación del equipo de desarrollo
            </p>
          </div>
        </div>
      </div>

      {/* Solo el Chat */}
      <ProjectChat />
    </div>
  );
};

export default CommunicationPage;
