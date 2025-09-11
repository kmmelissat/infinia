"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  CubeIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: HomeIcon,
      href: "/dashboard",
      title: "Dashboard Principal",
      active: pathname === "/dashboard",
    },
    {
      icon: ClipboardDocumentListIcon,
      href: "/dashboard/project-progress",
      title: "Progreso Detallado",
      active: pathname === "/dashboard/project-progress",
    },
    {
      icon: UserIcon,
      href: "/dashboard/team",
      title: "Equipo",
      active: pathname === "/dashboard/team",
    },
    {
      icon: DocumentTextIcon,
      href: "/dashboard/reports",
      title: "Reportes",
      active: pathname === "/dashboard/reports",
    },
    {
      icon: CheckCircleIcon,
      href: "/dashboard/quality",
      title: "Calidad",
      active: pathname === "/dashboard/quality",
    },
    {
      icon: CubeIcon,
      href: "/dashboard/resources",
      title: "Recursos",
      active: pathname === "/dashboard/resources",
    },
    {
      icon: QuestionMarkCircleIcon,
      href: "/dashboard/help",
      title: "Ayuda",
      active: pathname === "/dashboard/help",
    },
    {
      icon: Cog6ToothIcon,
      href: "/dashboard/settings",
      title: "Configuración",
      active: pathname === "/dashboard/settings",
    },
  ];

  return (
    <div className="w-16 bg-dashboard-sidebar flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <Link
        href="/dashboard"
        className="w-8 h-8 rounded-lg flex items-center justify-center group"
      >
        <Image
          src="/infinia.png"
          alt="Infinia"
          width={32}
          height={32}
          className="w-full h-full object-contain transition-transform group-hover:scale-110"
          priority
        />
      </Link>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors group relative ${
                item.active
                  ? "bg-purple-primary text-white"
                  : "text-gray-400 hover:text-white hover:bg-purple-dark/20"
              }`}
              title={item.title}
            >
              <IconComponent className="w-5 h-5" />

              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.title}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
