"use client";

import React from "react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

interface InvoiceStatus {
  label: string;
  count: number;
  amount: string;
  color: string;
  bgColor: string;
}

const InvoiceOverview = () => {
  const invoiceStatuses: InvoiceStatus[] = [
    {
      label: "Overdue",
      count: 5,
      amount: "USD 183,00$",
      color: "bg-purple-primary",
      bgColor: "bg-purple-100",
    },
    {
      label: "Not Paid",
      count: 5,
      amount: "USD 183,00$",
      color: "bg-gradient-magenta",
      bgColor: "bg-red-100",
    },
    {
      label: "Partially Paid",
      count: 5,
      amount: "USD 183,00$",
      color: "bg-purple-secondary",
      bgColor: "bg-blue-100",
    },
    {
      label: "Fully Paid",
      count: 5,
      amount: "USD 183,00$",
      color: "bg-gradient-light-purple",
      bgColor: "bg-green-100",
    },
    {
      label: "Draft",
      count: 5,
      amount: "USD 183,00$",
      color: "bg-gradient-soft-pink",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          Invoice Overview
        </h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowTrendingUpIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {invoiceStatuses.map((status, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-dashboard-text-primary">
                {status.label}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-dashboard-text-secondary">
                  {status.count}
                </span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm font-medium text-dashboard-text-primary">
                  {status.amount}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${status.color}`}
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceOverview;
