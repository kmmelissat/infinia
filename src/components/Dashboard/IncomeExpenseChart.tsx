"use client";

import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const IncomeExpenseChart = () => {
  return (
    <div className="bg-dashboard-card rounded-2xl p-6 shadow-sm border border-dashboard-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-dashboard-text-primary">
          Income VS Expense
        </h2>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowTrendingUpIcon className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-6 mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
          <span className="text-sm text-dashboard-text-secondary">
            Income: 24,600$
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-magenta rounded-full"></div>
          <span className="text-sm text-dashboard-text-secondary">
            Expense: 13,290$
          </span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-48 relative">
        <svg className="w-full h-full" viewBox="0 0 400 150">
          {/* Grid lines */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 30"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Income line (blue) */}
          <path
            d="M 20 120 Q 60 100 100 80 T 180 70 T 260 60 T 340 50 T 380 45"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Expense line (orange) */}
          <path
            d="M 20 130 Q 60 125 100 115 T 180 110 T 260 105 T 340 95 T 380 90"
            fill="none"
            stroke="#e879f9"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Data points */}
          <circle cx="100" cy="80" r="3" fill="#8b5cf6" />
          <circle cx="180" cy="70" r="3" fill="#8b5cf6" />
          <circle cx="260" cy="60" r="3" fill="#8b5cf6" />
          <circle cx="340" cy="50" r="3" fill="#8b5cf6" />

          <circle cx="100" cy="115" r="3" fill="#e879f9" />
          <circle cx="180" cy="110" r="3" fill="#e879f9" />
          <circle cx="260" cy="105" r="3" fill="#e879f9" />
          <circle cx="340" cy="95" r="3" fill="#e879f9" />
        </svg>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
