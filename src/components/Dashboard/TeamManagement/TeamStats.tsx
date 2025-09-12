"use client";

import React from "react";
import {
  UsersIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
  status: "online" | "busy" | "away";
  department: string;
  skills: string[];
  availability: string;
  timezone: string;
  workingHours: string;
}

interface TeamStatsProps {
  teamMembers: TeamMember[];
}

const TeamStats: React.FC<TeamStatsProps> = ({ teamMembers }) => {
  const totalMembers = teamMembers.length;
  const onlineMembers = teamMembers.filter(
    (member) => member.status === "online"
  ).length;
  const busyMembers = teamMembers.filter(
    (member) => member.status === "busy"
  ).length;
  const awayMembers = teamMembers.filter(
    (member) => member.status === "away"
  ).length;

  const stats = [
    {
      title: "Total del Equipo",
      value: totalMembers,
      icon: UsersIcon,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Disponibles",
      value: onlineMembers,
      icon: CheckCircleIcon,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Ocupados",
      value: busyMembers,
      icon: ClockIcon,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "Ausentes",
      value: awayMembers,
      icon: ExclamationTriangleIcon,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="bg-dashboard-card rounded-lg p-6 border border-dashboard-border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dashboard-text-secondary mb-1">
                  {stat.title}
                </p>
                <p className={`text-3xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <IconComponent className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>

            {/* Progress bar for availability */}
            {stat.title !== "Total del Equipo" && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${stat.color}`}
                    style={{
                      width: `${
                        totalMembers > 0 ? (stat.value / totalMembers) * 100 : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-dashboard-text-secondary mt-1">
                  {totalMembers > 0
                    ? Math.round((stat.value / totalMembers) * 100)
                    : 0}
                  % del equipo
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TeamStats;
