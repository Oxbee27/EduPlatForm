import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { courses } from "../../data/courses.js";
import Badge from "../../components/common/Badge.jsx";
import Button from "../../components/common/Button.jsx";

export default function BrowseCourses() {
  const { user, enroll } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Browse Courses</h1>
      <p className="mt-1 text-slate-500">Enroll in a course to add it to your dashboard.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const isEnrolled = user.enrolledCourseIds.includes(course.id);
          return (
            <div key={course.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <Badge color="indigo">{course.category}</Badge>
                <h3 className="mt-2 font-semibold text-slate-900 line-clamp-2">{course.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{course.instructor}</p>
                <Button
                  size="sm"
                  fullWidth
                  className="mt-4"
                  variant={isEnrolled ? "secondary" : "primary"}
                  disabled={isEnrolled}
                  onClick={() => enroll(course.id)}
                >
                  {isEnrolled ? "Enrolled ✓" : "Enroll Now"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}