"use client";

import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
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

interface TeamMemberCardProps {
  member: TeamMember;
  onScheduleMeeting: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  onScheduleMeeting,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "away":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "En línea";
      case "busy":
        return "Ocupado";
      case "away":
        return "Ausente";
      default:
        return "Desconocido";
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${member.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${member.phone}`;
  };

  return (
    <div className="bg-dashboard-card rounded-lg p-6 border border-dashboard-border hover:shadow-lg transition-shadow">
      {/* Header with Avatar and Status */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div
            className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(
              member.status
            )} rounded-full border-2 border-white`}
          ></div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-dashboard-text-primary">
            {member.name}
          </h3>
          <p className="text-sm text-dashboard-text-secondary">{member.role}</p>
          <p className="text-xs text-dashboard-text-secondary">
            {member.department}
          </p>
        </div>
      </div>

      {/* Status and Availability */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-dashboard-text-primary">
            Estado:
          </span>
          <span
            className={`text-sm px-2 py-1 rounded-full ${
              member.status === "online"
                ? "bg-green-100 text-green-800"
                : member.status === "busy"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {getStatusText(member.status)}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-dashboard-text-secondary">
          <ClockIcon className="w-4 h-4" />
          <span>{member.availability}</span>
        </div>
      </div>

      {/* Working Hours and Timezone */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-dashboard-text-secondary">
          <ClockIcon className="w-4 h-4" />
          <span>{member.workingHours}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-dashboard-text-secondary">
          <MapPinIcon className="w-4 h-4" />
          <span>{member.timezone}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <p className="text-sm font-medium text-dashboard-text-primary mb-2">
          Habilidades:
        </p>
        <div className="flex flex-wrap gap-1">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Actions */}
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-dashboard-text-primary rounded-lg transition-colors text-sm"
          >
            <EnvelopeIcon className="w-4 h-4" />
            <span>Email</span>
          </button>
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-dashboard-text-primary rounded-lg transition-colors text-sm"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Llamar</span>
          </button>
        </div>
        <button
          onClick={onScheduleMeeting}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-purple-primary hover:bg-purple-dark text-white rounded-lg transition-colors text-sm font-medium"
        >
          <CalendarDaysIcon className="w-4 h-4" />
          <span>Agendar Reunión</span>
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
