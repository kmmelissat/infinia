"use client";

import React, { useState } from "react";
import {
  CodeBracketIcon,
  GitBranchIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

interface GitHubCommit {
  id: string;
  message: string;
  author: string;
  timestamp: Date;
  hash: string;
  url: string;
  files: string[];
}

interface GitHubPR {
  id: number;
  title: string;
  author: string;
  status: "open" | "merged" | "closed";
  timestamp: Date;
  url: string;
  description: string;
  reviewers: string[];
}

const GitHubIntegration = () => {
  const [recentCommits] = useState<GitHubCommit[]>([
    {
      id: "commit-1",
      message: "feat: Implement Steam authentication integration",
      author: "Carlos López",
      timestamp: new Date(Date.now() - 1800000),
      hash: "a1b2c3d",
      url: "https://github.com/infinia/gameshop/commit/a1b2c3d",
      files: ["auth/steam.ts", "components/LoginForm.tsx"],
    },
    {
      id: "commit-2",
      message: "fix: Resolve catalog filtering performance issue",
      author: "María Rodríguez",
      timestamp: new Date(Date.now() - 3600000),
      hash: "e4f5g6h",
      url: "https://github.com/infinia/gameshop/commit/e4f5g6h",
      files: ["api/catalog.ts", "utils/filters.ts"],
    },
    {
      id: "commit-3",
      message: "style: Update GameShop branding colors",
      author: "Ana García",
      timestamp: new Date(Date.now() - 7200000),
      hash: "i7j8k9l",
      url: "https://github.com/infinia/gameshop/commit/i7j8k9l",
      files: ["styles/globals.css", "components/Header.tsx"],
    },
  ]);

  const [recentPRs] = useState<GitHubPR[]>([
    {
      id: 42,
      title: "Add shopping cart functionality with Redux",
      author: "María Rodríguez",
      status: "open",
      timestamp: new Date(Date.now() - 86400000),
      url: "https://github.com/infinia/gameshop/pull/42",
      description:
        "Implements complete shopping cart with Redux state management",
      reviewers: ["Carlos López", "Ana García"],
    },
    {
      id: 41,
      title: "Integrate PayPal payment gateway",
      author: "David Chen",
      status: "merged",
      timestamp: new Date(Date.now() - 172800000),
      url: "https://github.com/infinia/gameshop/pull/41",
      description: "Adds PayPal integration for secure payments",
      reviewers: ["Ana García"],
    },
  ]);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Hace unos minutos";
    if (diffInHours < 24)
      return `Hace ${diffInHours} hora${diffInHours > 1 ? "s" : ""}`;
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <ClockIcon className="w-4 h-4 text-green-500" />;
      case "merged":
        return <CheckCircleIcon className="w-4 h-4 text-purple-500" />;
      case "closed":
        return <XCircleIcon className="w-4 h-4 text-red-500" />;
      default:
        return <ClockIcon className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 border-green-200";
      case "merged":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "closed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Commits */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-dashboard-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-dashboard-text-primary flex items-center">
            <CodeBracketIcon className="w-5 h-5 mr-2 text-purple-primary" />
            Commits Recientes
          </h3>
          <a
            href="https://github.com/infinia/gameshop/commits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-primary hover:text-purple-secondary flex items-center"
          >
            Ver todos
            <LinkIcon className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="space-y-3">
          {recentCommits.map((commit) => (
            <div
              key={commit.id}
              className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <CodeBracketIcon className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium text-dashboard-text-primary truncate">
                    {commit.message}
                  </p>
                  <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {commit.hash}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-xs text-dashboard-text-secondary">
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-3 h-3" />
                    <span>{commit.author}</span>
                  </div>
                  <span>{formatTime(commit.timestamp)}</span>
                  <span>
                    {commit.files.length} archivo
                    {commit.files.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {commit.files.slice(0, 3).map((file, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {file.split("/").pop()}
                    </span>
                  ))}
                  {commit.files.length > 3 && (
                    <span className="text-xs text-dashboard-text-secondary">
                      +{commit.files.length - 3} más
                    </span>
                  )}
                </div>
              </div>

              <a
                href={commit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-purple-primary hover:text-purple-secondary"
              >
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Pull Requests */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-dashboard-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-dashboard-text-primary flex items-center">
            <GitBranchIcon className="w-5 h-5 mr-2 text-purple-primary" />
            Pull Requests
          </h3>
          <a
            href="https://github.com/infinia/gameshop/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-primary hover:text-purple-secondary flex items-center"
          >
            Ver todos
            <LinkIcon className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="space-y-4">
          {recentPRs.map((pr) => (
            <div
              key={pr.id}
              className="border border-dashboard-border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(pr.status)}
                  <div>
                    <h4 className="font-medium text-dashboard-text-primary">
                      {pr.title}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-dashboard-text-secondary">
                        #{pr.id} por {pr.author}
                      </span>
                      <span className="text-sm text-dashboard-text-secondary">
                        {formatTime(pr.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      pr.status
                    )}`}
                  >
                    {pr.status === "open"
                      ? "Abierto"
                      : pr.status === "merged"
                      ? "Fusionado"
                      : "Cerrado"}
                  </span>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-primary hover:text-purple-secondary"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-dashboard-text-secondary mb-3">
                {pr.description}
              </p>

              {pr.reviewers.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-dashboard-text-secondary">
                    Revisores:
                  </span>
                  <div className="flex space-x-1">
                    {pr.reviewers.map((reviewer, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {reviewer}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubIntegration;
