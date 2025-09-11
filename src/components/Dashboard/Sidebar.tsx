"use client";

import React from "react";
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
  const menuItems = [
    { icon: HomeIcon, active: true },
    { icon: ClipboardDocumentListIcon, active: false },
    { icon: UserIcon, active: false },
    { icon: DocumentTextIcon, active: false },
    { icon: CheckCircleIcon, active: false },
    { icon: CubeIcon, active: false },
    { icon: QuestionMarkCircleIcon, active: false },
    { icon: Cog6ToothIcon, active: false },
  ];

  return (
    <div className="w-16 bg-dashboard-sidebar flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-purple-primary rounded-sm"></div>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                item.active
                  ? "bg-purple-primary text-white"
                  : "text-gray-400 hover:text-white hover:bg-purple-dark/20"
              }`}
            >
              <IconComponent className="w-5 h-5" />
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
