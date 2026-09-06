import React from "react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  Platform: [
    { label: "Courses", to: "/courses" },
    { label: "Instructors", to: "/instructors" },
    { label: "Pricing", to: "/pricing" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  Account: [
    { label: "Log in", to: "/login" },
    { label: "Register", to: "/register" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 font-display text-sm font-medium text-white">
                O
              </span>
              <span className="font-display text-lg font-medium text-white">Orbis</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Courses, mentors, and momentum in one place — learn at your own
              pace, anytime, anywhere.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white">{section}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {year} Orbis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}