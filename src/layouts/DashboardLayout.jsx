import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Button from "../components/common/Button.jsx";

const NAV_ITEMS = [
  { label: "Overview", to: "/dashboard" },
  { label: "My Courses", to: "/dashboard/my-courses" },
  { label: "Browse Courses", to: "/dashboard/browse" },
  { label: "Profile", to: "/dashboard/profile" },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();

  const linkClasses = ({ isActive }) =>
    `block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-slate-200 bg-white">
        <Link to="/" className="flex items-center gap-2 px-6 py-5 border-b border-slate-100">
          <span className="h-8 w-8 rounded-lg bg-indigo-600" />
          <span className="text-lg font-bold text-slate-900">EduPlatform</span>
        </Link>

        <nav className="flex-1 space-y-1 px-4 py-6">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/dashboard"} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-semibold text-indigo-600">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-slate-900">{user?.name}</div>
              <div className="truncate text-xs text-slate-500">{user?.email}</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" fullWidth className="mt-3" onClick={logout}>
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-indigo-600" />
            <span className="font-bold text-slate-900">EduPlatform</span>
          </Link>
          <Button variant="ghost" size="sm" onClick={logout}>
            Log Out
          </Button>
        </div>

        <main className="flex-1 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}