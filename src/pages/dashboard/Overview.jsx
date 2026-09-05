import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getCourseById } from "../../data/courses.js";
import Button from "../../components/common/Button.jsx";

export default function Overview() {
  const { user } = useAuth();
  const enrolledCourses = user.enrolledCourseIds.map(getCourseById).filter(Boolean);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Welcome back, {user.name} 👋</h1>
      <p className="mt-1 text-slate-500">Here's what's happening with your learning.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Enrolled Courses" value={enrolledCourses.length} />
        <StatCard label="Hours Learned" value="0" />
        <StatCard label="Certificates" value="0" />
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Continue Learning</h2>
          <Link to="/dashboard/browse" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Browse more courses →
          </Link>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-10 text-center">
            <p className="text-slate-500">You haven't enrolled in any courses yet.</p>
            <Button as={Link} to="/dashboard/browse" className="mt-4">
              Browse Courses
            </Button>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {enrolledCourses.map((course) => (
              <Link
                key={course.id}
                to={`/dashboard/learn/${course.id}`}
                className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-4 hover:shadow-sm"
              >
                <img src={course.thumbnail} alt={course.title} className="h-16 w-24 rounded-lg object-cover" />
                <div className="min-w-0">
                  <div className="truncate font-medium text-slate-900">{course.title}</div>
                  <div className="text-sm text-slate-500">{course.instructor}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}