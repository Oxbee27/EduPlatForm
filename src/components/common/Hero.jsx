import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";

// Mirrors the real course categories in src/data/courses.js — the
// illustration is a literal picture of the brand idea: one hub, several
// paths orbiting it, not a generic decorative shape.
const CATEGORIES = [
  { label: "Development", angle: -90, fill: "#818cf8" },
  { label: "Design", angle: 0, fill: "#f0abfc" },
  { label: "Data Science", angle: 90, fill: "#fbbf24" },
  { label: "Marketing", angle: 180, fill: "#34d399" },
];

const CENTER = 200;
const RADIUS = 132;

function tokenPosition(angle) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  };
}

function HubIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative w-full h-auto">
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="rgba(199, 210, 254, 0.25)"
          strokeWidth="1"
          strokeDasharray="2 7"
        />

        {/* Hub mark */}
        <circle cx={CENTER} cy={CENTER} r="52" fill="#4f46e5" />
        <text
          x={CENTER}
          y={CENTER + 13}
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="38"
          fill="#ffffff"
        >
          O
        </text>

        <g className="hub-orbit-track">
          {CATEGORIES.map((c) => {
            const pos = tokenPosition(c.angle);
            return (
              <g
                key={c.label}
                className="hub-token"
                transform={`translate(${pos.x}, ${pos.y})`}
              >
                <circle r="34" fill="#0f172a" stroke={c.fill} strokeWidth="2" />
                <circle r="4" fill={c.fill} cy="-11" />
                <text
                  textAnchor="middle"
                  y="14"
                  fontFamily="Inter, system-ui, sans-serif"
                  fontSize="10.5"
                  fontWeight="600"
                  fill="#e2e8f0"
                >
                  {c.label.length > 9 ? c.label.split(" ")[0] : c.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 hero-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-medium text-white max-w-md mx-auto md:mx-0">
            Learn what moves you forward.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-md mx-auto md:mx-0">
            Orbis brings courses, mentors, and momentum into one place.
            Pick a path, work at your pace, and keep going.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <Button as={Link} to="/courses" size="lg" fullWidth className="sm:w-auto">
              Browse Courses
            </Button>
            <Button
              as={Link}
              to="/register"
              variant="secondary"
              size="lg"
              fullWidth
              className="sm:w-auto !bg-transparent !text-white !border-slate-600 hover:!bg-white/5"
            >
              Get Started Free
            </Button>
          </div>
        </div>

        <HubIllustration />
      </div>
    </section>
  );
}
