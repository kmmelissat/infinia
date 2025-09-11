"use client";

import React from "react";
import {
  CalendarIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface Meeting {
  id: string;
  title: string;
  type: string;
  time: string;
  platform: string;
  icon: string;
}

const MeetingsWidget = () => {
  const meetings: Meeting[] = [
    {
      id: "1",
      title: "App Project",
      type: "My Meetings",
      time: "6:45 PM",
      platform: "Meet",
      icon: "📱",
    },
    {
      id: "2",
      title: "User Research",
      type: "My Meetings",
      time: "6:45 PM",
      platform: "Zoom",
      icon: "🔍",
    },
  ];

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          My Meetings
        </h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Meetings List */}
      <div className="space-y-4 mb-6">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">
                {meeting.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-dashboard-text-secondary">
                    {meeting.type}
                  </span>
                  <span className="font-medium text-dashboard-text-primary text-sm">
                    {meeting.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-dashboard-text-primary font-medium">
                    {meeting.time}
                  </span>
                  <div className="flex items-center space-x-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        meeting.platform === "Meet"
                          ? "bg-green-500"
                          : "bg-purple-primary"
                      }`}
                    ></div>
                    <span className="text-xs text-dashboard-text-secondary">
                      {meeting.platform}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        ))}
      </div>

      {/* See All Meetings */}
      <button className="flex items-center space-x-2 text-sm text-dashboard-text-secondary hover:text-dashboard-text-primary transition-colors">
        <span>See All Meetings</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default MeetingsWidget;
