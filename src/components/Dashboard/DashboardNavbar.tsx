"use client";

import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import NotificationCenter from "./Communication/NotificationCenter";
import Breadcrumbs from "./Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  company: string;
  avatar?: string;
  plan: string;
}

const DashboardNavbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Mock user data - en producción vendría de contexto/API
  const currentUser: User = {
    id: "client-1",
    name: "Carlos Mendoza",
    email: "carlos.mendoza@gameshop.com",
    role: "CEO & Founder",
    company: "GameShop",
    plan: "Enterprise",
    avatar: undefined, // Se puede agregar URL de avatar
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de búsqueda
    console.log("Searching for:", searchQuery);
  };

  const handleLogout = () => {
    // Implementar lógica de logout
    console.log("Logging out...");
    router.push("/");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implementar cambio de tema
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="bg-white border-b border-dashboard-border px-6 py-4 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="flex items-center justify-between">
        {/* Left Section - Breadcrumbs + Search */}
        <div className="flex items-center space-x-6 flex-1">
          {/* Breadcrumbs */}
          <div className="flex-shrink-0">
            <Breadcrumbs />
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="relative max-w-md w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar funcionalidades, sprints, mensajes..."
              className="w-full pl-10 pr-4 py-2 border border-dashboard-border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </form>
        </div>

        {/* Center Section - Quick Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            href="/dashboard/communication"
            className="p-2 text-dashboard-text-secondary hover:text-purple-primary hover:bg-purple-50 rounded-lg transition-colors"
            title="Ir al chat"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
          </Link>
          <button
            onClick={() => window.open("/docs", "_blank")}
            className="p-2 text-dashboard-text-secondary hover:text-purple-primary hover:bg-purple-50 rounded-lg transition-colors"
            title="Documentación"
          >
            <DocumentTextIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => window.open("/help", "_blank")}
            className="p-2 text-dashboard-text-secondary hover:text-purple-primary hover:bg-purple-50 rounded-lg transition-colors"
            title="Ayuda"
          >
            <QuestionMarkCircleIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Right Section - User Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg transition-colors"
            title={isDarkMode ? "Modo claro" : "Modo oscuro"}
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          {/* Language Selector */}
          <button
            className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg transition-colors"
            title="Idioma"
          >
            <GlobeAltIcon className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <NotificationCenter />

          {/* Settings */}
          <button
            className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg transition-colors"
            title="Configuración"
          >
            <Cog6ToothIcon className="w-5 h-5" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {/* Avatar */}
              <div className="relative">
                {currentUser.avatar ? (
                  <Image
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {getInitials(currentUser.name)}
                    </span>
                  </div>
                )}
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              {/* User Info */}
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium text-dashboard-text-primary">
                  {currentUser.name}
                </p>
                <p className="text-xs text-dashboard-text-secondary">
                  {currentUser.role}
                </p>
              </div>

              <ChevronDownIcon
                className={`w-4 h-4 text-dashboard-text-secondary transition-transform ${
                  showProfileMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-dashboard-border z-50">
                {/* User Info Header */}
                <div className="p-4 border-b border-dashboard-border">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      {currentUser.avatar ? (
                        <Image
                          src={currentUser.avatar}
                          alt={currentUser.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">
                            {getInitials(currentUser.name)}
                          </span>
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-dashboard-text-primary truncate">
                        {currentUser.name}
                      </p>
                      <p className="text-sm text-dashboard-text-secondary truncate">
                        {currentUser.email}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                          {currentUser.role}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          {currentUser.plan}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="p-4 border-b border-dashboard-border bg-gray-50">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">
                        {currentUser.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dashboard-text-primary">
                        {currentUser.company}
                      </p>
                      <p className="text-xs text-dashboard-text-secondary">
                        Organización actual
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <UserIcon className="w-5 h-5 text-dashboard-text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-dashboard-text-primary">
                        Mi Perfil
                      </p>
                      <p className="text-xs text-dashboard-text-secondary">
                        Gestionar información personal
                      </p>
                    </div>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Cog6ToothIcon className="w-5 h-5 text-dashboard-text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-dashboard-text-primary">
                        Configuración
                      </p>
                      <p className="text-xs text-dashboard-text-secondary">
                        Preferencias y notificaciones
                      </p>
                    </div>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-dashboard-text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-dashboard-text-primary">
                        Ayuda y Soporte
                      </p>
                      <p className="text-xs text-dashboard-text-secondary">
                        Documentación y contacto
                      </p>
                    </div>
                  </button>
                </div>

                {/* Project Stats */}
                <div className="p-4 border-t border-dashboard-border bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-lg font-bold text-dashboard-text-primary">
                        1
                      </p>
                      <p className="text-xs text-dashboard-text-secondary">
                        Ecommerce
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-dashboard-text-primary">
                        32
                      </p>
                      <p className="text-xs text-dashboard-text-secondary">
                        Features
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-dashboard-text-primary">
                        73%
                      </p>
                      <p className="text-xs text-dashboard-text-secondary">
                        Completado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Logout */}
                <div className="p-2 border-t border-dashboard-border">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600 hover:text-red-700"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Cerrar Sesión</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search - Shown on smaller screens */}
      <div className="md:hidden mt-3">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-1.5 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent bg-gray-50"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </form>
      </div>

      {/* Click outside to close dropdown */}
      {showProfileMenu && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowProfileMenu(false)}
        ></div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
