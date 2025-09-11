"use client";

import React from "react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

interface Ticket {
  id: string;
  name: string;
  description: string;
  avatar: string;
  bgColor: string;
}

const OpenTickets = () => {
  const tickets: Ticket[] = [
    {
      id: "1",
      name: "Jacob Martinez",
      description: "I need 3 more new features on the mobile app design.",
      avatar: "JM",
      bgColor: "bg-purple-light/30",
    },
    {
      id: "2",
      name: "Luke Bell",
      description: "I need 3 more new features on the mobile app design.",
      avatar: "LB",
      bgColor: "bg-gradient-light-purple/30",
    },
    {
      id: "3",
      name: "Connor Mitchell",
      description: "I need 3 more new features on the mobile app design.",
      avatar: "CM",
      bgColor: "bg-purple-primary/20",
    },
  ];

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          Open Tickets
        </h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowTrendingUpIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex items-start space-x-3 group">
            <div
              className={`w-10 h-10 ${ticket.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-sm font-medium text-gray-700">
                {ticket.avatar}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-dashboard-text-primary text-sm mb-1">
                {ticket.name}
              </h3>
              <p className="text-xs text-dashboard-text-secondary leading-relaxed">
                {ticket.description}
              </p>
              <button className="text-xs text-purple-primary hover:text-purple-dark transition-colors mt-2">
                Check →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenTickets;
