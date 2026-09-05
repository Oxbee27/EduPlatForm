import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getCourseById } from "../../data/courses.js";
import { useAuth } from "../../context/AuthContext.jsx";

export default function CourseLearn() {
  const { id } = useParams();
  const { user } = useAuth();
  const course = getCourseById(id);

  if (!course) return <Navigate to="/dashboard/my-courses" replace />;
  if (!user.enrolledCourseIds.includes(id)) return <Navigate to="/dashboard/browse" replace />;

  return (
    <div>
      <Link to="/dashboard/my-courses" className="text-sm text-indigo-600 hover:text-indigo-700">
        ← Back to My Courses
      </Link>
      <h1 className="mt-3 text-2xl font-bold text-slate-900">{course.title}</h1>

      <div className="mt-6 aspect-video w-full rounded-xl bg-slate-900 flex items-center justify-center text-white">
        Lesson video player goes here
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-slate-900">Lessons</h2>
        <ul className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
          {Array.from({ length: Math.min(course.lessonsCount, 5) }).map((_, i) => (
            <li key={i} className="flex items-center justify-between px-4 py-3 text-sm">
              <span>Lesson {i + 1}</span>
              <span className="text-slate-400">12:34</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}