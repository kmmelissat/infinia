"use client";

import React, { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";
import MeetingScheduler from "./MeetingScheduler";
import TeamStats from "./TeamStats";
import { infiniaTeamMembers, type TeamMember } from "../../../data/teamData";

// Using shared Infinia team data

const TeamManagement = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showScheduler, setShowScheduler] = useState(false);
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const departments = [
    "all",
    "Management",
    "Development",
    "Design",
    "Infrastructure",
    "Quality Assurance",
  ];
  const statuses = ["all", "online", "busy", "away"];

  const filteredMembers = infiniaTeamMembers.filter((member) => {
    const departmentMatch =
      filterDepartment === "all" || member.department === filterDepartment;
    const statusMatch =
      filterStatus === "all" || member.status === filterStatus;
    return departmentMatch && statusMatch;
  });

  const handleScheduleMeeting = (member: TeamMember) => {
    setSelectedMember(member);
    setShowScheduler(true);
  };

  return (
    <div className="space-y-8">
      {/* Team Stats */}
      <TeamStats teamMembers={infiniaTeamMembers} />

      {/* Filters */}
      <div className="bg-dashboard-card rounded-lg p-6 border border-dashboard-border">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-dashboard-text-primary">
              Departamento:
            </label>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-3 py-1 border border-dashboard-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-primary"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "all" ? "Todos" : dept}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-dashboard-text-primary">
              Estado:
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-1 border border-dashboard-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-primary"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status === "all"
                    ? "Todos"
                    : status === "online"
                    ? "En línea"
                    : status === "busy"
                    ? "Ocupado"
                    : "Ausente"}
                </option>
              ))}
            </select>
          </div>

          <div className="ml-auto">
            <button
              onClick={() => setShowScheduler(true)}
              className="px-4 py-2 bg-purple-primary text-white rounded-lg hover:bg-purple-dark transition-colors text-sm font-medium"
            >
              Agendar Reunión Grupal
            </button>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onScheduleMeeting={() => handleScheduleMeeting(member)}
          />
        ))}
      </div>

      {/* Meeting Scheduler Modal */}
      {showScheduler && (
        <MeetingScheduler
          member={selectedMember}
          onClose={() => {
            setShowScheduler(false);
            setSelectedMember(null);
          }}
        />
      )}
    </div>
  );
};

export default TeamManagement;
