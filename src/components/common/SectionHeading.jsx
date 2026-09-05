import React from "react";

/**
 * Consistent section heading used across public pages.
 *
 * @param {string} eyebrow - small label above the title (e.g. "OUR COURSES")
 * @param {string} title
 * @param {string} subtitle
 * @param {"left"|"center"} align
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}