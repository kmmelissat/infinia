"use client";

import React, { useState, useEffect } from "react";
import {
  BellIcon,
  XMarkIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { BellIcon as BellSolidIcon } from "@heroicons/react/24/solid";

interface Notification {
  id: string;
  type: "message" | "task" | "meeting" | "system" | "email";
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  priority: "low" | "medium" | "high" | "urgent";
  actionUrl?: string;
  sender?: {
    name: string;
    role: string;
  };
  metadata?: {
    taskId?: string;
    chatChannel?: string;
    meetingId?: string;
  };
}

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  desktopNotifications: boolean;
  soundEnabled: boolean;
  quietHours: {
    enabled: boolean;
    start: string;
    end: string;
  };
  categories: {
    messages: boolean;
    tasks: boolean;
    meetings: boolean;
    system: boolean;
  };
}

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    desktopNotifications: true,
    soundEnabled: true,
    quietHours: {
      enabled: false,
      start: "22:00",
      end: "08:00",
    },
    categories: {
      messages: true,
      tasks: true,
      meetings: true,
      system: true,
    },
  });

  // Mock notifications
  useEffect(() => {
    const mockNotifications: Notification[] = [
      {
        id: "notif-1",
        type: "message",
        title: "Nuevo mensaje en General",
        message: "Ana García: He actualizado el cronograma del proyecto...",
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        isRead: false,
        priority: "medium",
        sender: { name: "Ana García", role: "PM" },
        metadata: { chatChannel: "general" },
      },
      {
        id: "notif-2",
        type: "task",
        title: "Tarea asignada",
        message: "Se te ha asignado la tarea US-005: Tests automatizados E2E",
        timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
        isRead: false,
        priority: "high",
        sender: { name: "Ana García", role: "PM" },
        metadata: { taskId: "US-005" },
      },
      {
        id: "notif-3",
        type: "meeting",
        title: "Reunión en 15 minutos",
        message: "Daily Standup - Sala de reuniones virtual",
        timestamp: new Date(Date.now() - 900000), // 15 minutes ago
        isRead: true,
        priority: "urgent",
        metadata: { meetingId: "meeting-daily-001" },
      },
      {
        id: "notif-4",
        type: "task",
        title: "Comentario en tarea",
        message: "Carlos López comentó en US-001: Implementar autenticación",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        isRead: true,
        priority: "medium",
        sender: { name: "Carlos López", role: "Desarrollador" },
        metadata: { taskId: "US-001" },
      },
      {
        id: "notif-5",
        type: "system",
        title: "Actualización del sistema",
        message: "El dashboard ha sido actualizado con nuevas funcionalidades",
        timestamp: new Date(Date.now() - 7200000), // 2 hours ago
        isRead: true,
        priority: "low",
      },
      {
        id: "notif-6",
        type: "email",
        title: "Resumen semanal enviado",
        message: "Se ha enviado el resumen semanal del proyecto a tu correo",
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        isRead: true,
        priority: "low",
      },
    ];
    setNotifications(mockNotifications);
  }, []);

  // Request notification permission
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAsRead = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notificationId ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const deleteNotification = (notificationId: string) => {
    setNotifications((prev) =>
      prev.filter((notif) => notif.id !== notificationId)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <ChatBubbleLeftRightIcon className="w-5 h-5" />;
      case "task":
        return <ClipboardDocumentListIcon className="w-5 h-5" />;
      case "meeting":
        return <UserGroupIcon className="w-5 h-5" />;
      case "system":
        return <InformationCircleIcon className="w-5 h-5" />;
      case "email":
        return <EnvelopeIcon className="w-5 h-5" />;
      default:
        return <BellIcon className="w-5 h-5" />;
    }
  };

  const getNotificationColor = (type: string, priority: string) => {
    if (priority === "urgent") return "text-red-500 bg-red-50";

    switch (type) {
      case "message":
        return "text-blue-500 bg-blue-50";
      case "task":
        return "text-green-500 bg-green-50";
      case "meeting":
        return "text-purple-500 bg-purple-50";
      case "system":
        return "text-gray-500 bg-gray-50";
      case "email":
        return "text-indigo-500 bg-indigo-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) {
      return "Ahora";
    } else if (diffInMinutes < 60) {
      return `Hace ${diffInMinutes} min`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `Hace ${hours} hora${hours > 1 ? "s" : ""}`;
    } else {
      return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const sendTestNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Notificación de prueba", {
        body: "Esta es una notificación de prueba del sistema Infinia",
        icon: "/infinia.png",
        tag: "test-notification",
      });
    }
  };

  const updateSettings = (key: keyof NotificationSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const updateCategorySetting = (
    category: keyof NotificationSettings["categories"],
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      categories: { ...prev.categories, [category]: value },
    }));
  };

  return (
    <>
      {/* Notification Bell */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg transition-colors"
        >
          {unreadCount > 0 ? (
            <BellSolidIcon className="w-6 h-6 text-purple-primary" />
          ) : (
            <BellIcon className="w-6 h-6" />
          )}
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
              {unreadCount > 9 ? "9+" : unreadCount}
            </div>
          )}
        </button>

        {/* Notification Panel */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-dashboard-border z-50 max-h-[600px] flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-dashboard-border">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-dashboard-text-primary">
                  Notificaciones
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-dashboard-text-secondary hover:text-dashboard-text-primary p-1 rounded"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-dashboard-text-secondary hover:text-dashboard-text-primary p-1 rounded"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {unreadCount > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dashboard-text-secondary">
                    {unreadCount} sin leer
                  </span>
                  <button
                    onClick={markAllAsRead}
                    className="text-sm text-purple-primary hover:text-purple-secondary font-medium"
                  >
                    Marcar todo como leído
                  </button>
                </div>
              )}
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="p-4 border-b border-dashboard-border bg-gray-50">
                <h4 className="font-medium text-dashboard-text-primary mb-3">
                  Configuración de Notificaciones
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dashboard-text-secondary">
                      Email
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) =>
                          updateSettings("emailNotifications", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dashboard-text-secondary">
                      Push
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.pushNotifications}
                        onChange={(e) =>
                          updateSettings("pushNotifications", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-primary"></div>
                    </label>
                  </div>
                  <button
                    onClick={sendTestNotification}
                    className="w-full text-sm bg-purple-primary text-white py-2 rounded-lg hover:bg-purple-secondary transition-colors"
                  >
                    Enviar notificación de prueba
                  </button>
                </div>
              </div>
            )}

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <BellIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-dashboard-text-secondary">
                    No tienes notificaciones
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-dashboard-border">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 transition-colors ${
                        !notification.isRead ? "bg-blue-50/30" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getNotificationColor(
                            notification.type,
                            notification.priority
                          )}`}
                        >
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="text-sm font-medium text-dashboard-text-primary truncate">
                              {notification.title}
                            </p>
                            <div
                              className={`w-2 h-2 rounded-full ${getPriorityColor(
                                notification.priority
                              )}`}
                            ></div>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm text-dashboard-text-secondary line-clamp-2 mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-dashboard-text-secondary">
                              {formatTime(notification.timestamp)}
                            </span>
                            <div className="flex items-center space-x-1">
                              {!notification.isRead && (
                                <button
                                  onClick={() => markAsRead(notification.id)}
                                  className="text-xs text-purple-primary hover:text-purple-secondary"
                                >
                                  <CheckIcon className="w-3 h-3" />
                                </button>
                              )}
                              <button
                                onClick={() =>
                                  deleteNotification(notification.id)
                                }
                                className="text-xs text-dashboard-text-secondary hover:text-red-500"
                              >
                                <XMarkIcon className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-dashboard-border">
                <button
                  onClick={clearAllNotifications}
                  className="w-full text-sm text-dashboard-text-secondary hover:text-red-500 py-2 transition-colors"
                >
                  Limpiar todas las notificaciones
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationCenter;
