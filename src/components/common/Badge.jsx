import React from "react";

const COLOR_STYLES = {
  indigo: "bg-indigo-100 text-indigo-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
  slate: "bg-slate-100 text-slate-700",
};

/**
 * Small pill label — for course levels, categories, statuses, etc.
 *
 * @param {"indigo"|"green"|"yellow"|"red"|"slate"} color
 */
export default function Badge({ children, color = "indigo", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${COLOR_STYLES[color]} ${className}`}
    >
      {children}
    </span>
  );
}