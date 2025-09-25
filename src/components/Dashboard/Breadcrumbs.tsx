"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const Breadcrumbs = () => {
  const pathname = usePathname();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: HomeIcon,
      },
    ];

    // Map specific paths to readable labels
    const pathLabels: { [key: string]: string } = {
      "project-progress": "Progreso del Proyecto",
      team: "Gestión de Equipo",
      communication: "Comunicación",
      reports: "Reportes",
      quality: "Control de Calidad",
      resources: "Recursos",
      help: "Ayuda",
      settings: "Configuración",
    };

    let currentPath = "";
    for (let i = 1; i < paths.length; i++) {
      currentPath += `/${paths[i]}`;
      const fullPath = `/dashboard${currentPath}`;
      const label =
        pathLabels[paths[i]] ||
        paths[i].charAt(0).toUpperCase() + paths[i].slice(1);

      breadcrumbs.push({
        label,
        href: fullPath,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Don't show breadcrumbs if we're on the main dashboard
  if (pathname === "/dashboard") {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-dashboard-text-secondary">
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        const IconComponent = breadcrumb.icon;

        return (
          <React.Fragment key={breadcrumb.href}>
            {index > 0 && (
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            )}
            {isLast ? (
              <span className="flex items-center space-x-1 text-dashboard-text-primary font-medium">
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span>{breadcrumb.label}</span>
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="flex items-center space-x-1 hover:text-purple-primary transition-colors"
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span>{breadcrumb.label}</span>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
