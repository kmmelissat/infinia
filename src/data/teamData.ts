// Shared team data for consistency across components

export interface TeamMember {
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

export interface ChatUser {
  id: string;
  name: string;
  role: "client" | "team" | "pm" | "admin";
  avatar?: string;
  isOnline: boolean;
  status?: "available" | "busy" | "away" | "dnd";
  lastSeen?: Date;
}

// Infinia Team Members (for Team Management page)
export const infiniaTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ana García",
    role: "Project Manager",
    email: "ana.garcia@infinia.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    status: "online" as const,
    department: "Management",
    skills: ["Agile", "Scrum", "Leadership"],
    availability: "Available",
    timezone: "GMT-5",
    workingHours: "9:00 AM - 6:00 PM",
  },
  {
    id: 2,
    name: "Carlos López",
    role: "Senior Developer",
    email: "carlos.lopez@infinia.com",
    phone: "+1 (555) 234-5678",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    status: "online" as const,
    department: "Development",
    skills: ["React", "Node.js", "TypeScript"],
    availability: "Available",
    timezone: "GMT-5",
    workingHours: "10:00 AM - 7:00 PM",
  },
  {
    id: 3,
    name: "María Rodríguez",
    role: "UX/UI Designer",
    email: "maria.rodriguez@infinia.com",
    phone: "+1 (555) 345-6789",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
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
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
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
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
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
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    status: "online" as const,
    department: "Development",
    skills: ["Python", "Django", "PostgreSQL"],
    availability: "Available",
    timezone: "GMT-3",
    workingHours: "9:00 AM - 6:00 PM",
  },
];

// Helper function to convert TeamMember to ChatUser
export const teamMemberToChatUser = (member: TeamMember): ChatUser => ({
  id: `infinia-${member.id}`,
  name: member.name,
  role: member.role === "Project Manager" ? "pm" : "team",
  avatar: member.avatar.replace("w=150&h=150", "w=32&h=32"),
  isOnline: member.status === "online",
  status:
    member.status === "online"
      ? "available"
      : member.status === "busy"
      ? "busy"
      : "away",
  ...(member.status === "away" && { lastSeen: new Date(Date.now() - 1800000) }),
});

// Game Station Users (for chat)
export const gameStationUsers: ChatUser[] = [
  {
    id: "gamestation-ceo",
    name: "Carlos Mendoza",
    role: "client",
    isOnline: true,
    status: "available",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80",
  },
  {
    id: "gamestation-cto",
    name: "Laura Vásquez",
    role: "client",
    isOnline: true,
    status: "busy",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80",
  },
];

// All chat users (Infinia team + Game Station users)
export const getAllChatUsers = (): ChatUser[] => [
  ...gameStationUsers,
  ...infiniaTeamMembers.map(teamMemberToChatUser),
];
