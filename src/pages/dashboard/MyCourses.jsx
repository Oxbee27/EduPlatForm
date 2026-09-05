import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getCourseById } from "../../data/courses.js";
import Button from "../../components/common/Button.jsx";

export default function MyCourses() {
  const { user } = useAuth();
  const enrolledCourses = user.enrolledCourseIds.map(getCourseById).filter(Boolean);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">My Courses</h1>

      {enrolledCourses.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-slate-500">No enrolled courses yet.</p>
          <Button as={Link} to="/dashboard/browse" className="mt-4">
            Browse Courses
          </Button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 line-clamp-2">{course.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{course.instructor}</p>
                <Button as={Link} to={`/dashboard/learn/${course.id}`} size="sm" fullWidth className="mt-4">
                  Continue Learning
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}