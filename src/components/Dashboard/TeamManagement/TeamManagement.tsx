"use client";

import React, { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";
import MeetingScheduler from "./MeetingScheduler";
import TeamStats from "./TeamStats";

// Team member interface
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

// Mock data for team members
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ana García",
    role: "Project Manager",
    email: "ana.garcia@infinia.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    status: "online" as const,
    department: "Management",
    skills: ["Agile", "Scrum", "Leadership"],
    availability: "Available",
    timezone: "GMT-5",
    workingHours: "9:00 AM - 6:00 PM",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Senior Developer",
    email: "carlos.rodriguez@infinia.com",
    phone: "+1 (555) 234-5678",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    status: "online" as const,
    department: "Development",
    skills: ["React", "Node.js", "TypeScript"],
    availability: "Available",
    timezone: "GMT-5",
    workingHours: "10:00 AM - 7:00 PM",
  },
  {
    id: 3,
    name: "María López",
    role: "UX/UI Designer",
    email: "maria.lopez@infinia.com",
    phone: "+1 (555) 345-6789",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    status: "busy" as const,
    department: "Design",
    skills: ["Figma", "Adobe XD", "User Research"],
    availability: "In Meeting",
    timezone: "GMT-5",
    workingHours: "9:00 AM - 5:00 PM",
  },
  {
    id: 4,
    name: "David Chen",
    role: "DevOps Engineer",
    email: "david.chen@infinia.com",
    phone: "+1 (555) 456-7890",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "away" as const,
    department: "Infrastructure",
    skills: ["AWS", "Docker", "Kubernetes"],
    availability: "Away",
    timezone: "GMT-8",
    workingHours: "8:00 AM - 4:00 PM",
  },
  {
    id: 5,
    name: "Sophie Martin",
    role: "QA Engineer",
    email: "sophie.martin@infinia.com",
    phone: "+1 (555) 567-8901",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    status: "online" as const,
    department: "Quality Assurance",
    skills: ["Selenium", "Jest", "Manual Testing"],
    availability: "Available",
    timezone: "GMT+1",
    workingHours: "8:00 AM - 4:00 PM",
  },
  {
    id: 6,
    name: "Roberto Silva",
    role: "Backend Developer",
    email: "roberto.silva@infinia.com",
    phone: "+1 (555) 678-9012",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    status: "online" as const,
    department: "Development",
    skills: ["Python", "Django", "PostgreSQL"],
    availability: "Available",
    timezone: "GMT-3",
    workingHours: "9:00 AM - 6:00 PM",
  },
];

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

  const filteredMembers = teamMembers.filter((member) => {
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
      <TeamStats teamMembers={teamMembers} />

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
