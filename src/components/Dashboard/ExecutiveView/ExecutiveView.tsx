"use client";

import React, { useState, useEffect } from "react";
import ProjectHealth from "./ProjectHealth";
import ProgressVsPlan from "./ProgressVsPlan";
import BurnRate from "./BurnRate";
import Satisfaction from "./Satisfaction";
import OpenRisks from "./OpenRisks";

const ExecutiveView = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Set the current time only on the client side to avoid hydration mismatch
    setCurrentTime(new Date().toLocaleString());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-dashboard-text-primary">
            Vista Ejecutiva
          </h2>
          <p className="text-sm text-dashboard-text-secondary">
            Resumen de salud del proyecto y métricas clave de rendimiento
          </p>
        </div>
        <div className="text-xs text-dashboard-text-secondary">
          {currentTime && `Actualizado: ${currentTime}`}
        </div>
      </div>

      {/* Primera fila - Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectHealth />
        <ProgressVsPlan />
        <BurnRate />
      </div>

      {/* Segunda fila - Satisfacción y Riesgos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Satisfaction />
        <OpenRisks />
      </div>
    </div>
  );
};

export default ExecutiveView;
