"use client";

import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dashboard-bg flex flex-col">
      {/* Top Navbar */}
      <DashboardNavbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
