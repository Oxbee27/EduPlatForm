import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
      <div className="mt-6 max-w-md rounded-xl border border-slate-200 bg-white p-6 space-y-4">
        <div>
          <div className="text-xs text-slate-500">Name</div>
          <div className="text-slate-900 font-medium">{user.name}</div>
        </div>
        <div>
          <div className="text-xs text-slate-500">Email</div>
          <div className="text-slate-900 font-medium">{user.email}</div>
        </div>
      </div>
    </div>
  );
}