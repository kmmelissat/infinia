"use client";

import React from "react";
import BurndownChart from "./BurndownChart";
import MilestonesTimeline from "./MilestonesTimeline";
import ThroughputMetrics from "./ThroughputMetrics";
import WIPLimits from "./WIPLimits";

const DeliveryTimeline = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-dashboard-text-primary">
            Entrega & Cronograma
          </h2>
          <p className="text-sm text-dashboard-text-secondary">
            Seguimiento de entregas, velocidad del equipo y gestión del flujo de
            trabajo
          </p>
        </div>
      </div>

      {/* Primera fila - Burndown y Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BurndownChart />
        <MilestonesTimeline />
      </div>

      {/* Segunda fila - Throughput y WIP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ThroughputMetrics />
        <WIPLimits />
      </div>
    </div>
  );
};

export default DeliveryTimeline;
