"use client";

import React from "react";
import ProjectChat from "@/components/Dashboard/Communication/ProjectChat";
import {
  ChatBubbleLeftRightIcon,
  BellIcon,
  UserGroupIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const CommunicationPage = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div>
          <p className="text-sm text-dashboard-text-secondary mb-1">
            Comunicación GameShop Ecommerce
          </p>
          <h1 className="text-3xl font-bold text-dashboard-text-primary">
            Centro de Comunicación
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">🎮</span>
            </div>
            <span className="text-sm text-dashboard-text-secondary">
              Desarrollo activo del ecommerce de videojuegos
            </span>
          </div>
        </div>
      </div>

      {/* Communication Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-dashboard-text-secondary mb-1">
                Mensajes Hoy
              </p>
              <p className="text-2xl font-bold text-dashboard-text-primary">
                24
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-dashboard-text-secondary mb-1">
                Notificaciones
              </p>
              <p className="text-2xl font-bold text-dashboard-text-primary">
                8
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <BellIcon className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-dashboard-text-secondary mb-1">
                Participantes Activos
              </p>
              <p className="text-2xl font-bold text-dashboard-text-primary">
                4
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <UserGroupIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-dashboard-text-secondary mb-1">
                Emails Enviados
              </p>
              <p className="text-2xl font-bold text-dashboard-text-primary">
                12
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <EnvelopeIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="mb-8">
        <ProjectChat />
      </div>

      {/* Communication Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <h3 className="text-lg font-semibold text-dashboard-text-primary mb-4">
            Acciones Rápidas
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-dashboard-text-primary">
                  Nueva funcionalidad GameShop
                </p>
                <p className="text-sm text-dashboard-text-secondary">
                  Discutir nueva feature del ecommerce
                </p>
              </div>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <UserGroupIcon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-dashboard-text-primary">
                  Demo del progreso
                </p>
                <p className="text-sm text-dashboard-text-secondary">
                  Mostrar avances del ecommerce
                </p>
              </div>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <EnvelopeIcon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-dashboard-text-primary">
                  Reporte semanal GameShop
                </p>
                <p className="text-sm text-dashboard-text-secondary">
                  Resumen del desarrollo del ecommerce
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
          <h3 className="text-lg font-semibold text-dashboard-text-primary mb-4">
            Actividad Reciente
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-white">AG</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-dashboard-text-primary">
                  <span className="font-medium">Ana García</span> comentó en{" "}
                  <span className="font-medium">GS-001: Autenticación</span>
                </p>
                <p className="text-xs text-dashboard-text-secondary">
                  Hace 5 minutos
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-white">CL</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-dashboard-text-primary">
                  <span className="font-medium">Carlos López</span> actualizó el
                  catálogo de <span className="font-medium">GameShop</span>
                </p>
                <p className="text-xs text-dashboard-text-secondary">
                  Hace 15 minutos
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-white">MR</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-dashboard-text-primary">
                  <span className="font-medium">María Rodríguez</span> completó{" "}
                  <span className="font-medium">GS-003: Carrito</span>
                </p>
                <p className="text-xs text-dashboard-text-secondary">
                  Hace 1 hora
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <BellIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-dashboard-text-primary">
                  Reporte semanal de{" "}
                  <span className="font-medium">GameShop</span> enviado
                </p>
                <p className="text-xs text-dashboard-text-secondary">
                  Hace 2 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPage;
