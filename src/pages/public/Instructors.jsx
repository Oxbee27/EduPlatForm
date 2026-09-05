import React, { useMemo } from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import { courses } from "../../data/courses.js";

export default function Instructors() {
  const instructors = useMemo(() => {
    const map = new Map();
    courses.forEach((course) => {
      if (!map.has(course.instructor)) {
        map.set(course.instructor, {
          name: course.instructor,
          avatar: course.instructorAvatar,
          courseCount: 1,
          categories: new Set([course.category]),
        });
      } else {
        const entry = map.get(course.instructor);
        entry.courseCount += 1;
        entry.categories.add(course.category);
      }
    });
    return Array.from(map.values());
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Our Team"
        title="Meet the Instructors"
        subtitle="Learn from industry professionals with real-world experience."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div
            key={instructor.name}
            className="flex flex-col items-center rounded-xl border border-slate-200 p-6 text-center shadow-sm"
          >
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="h-20 w-20 rounded-full object-cover bg-slate-100"
            />
            <h3 className="mt-4 font-semibold text-slate-900">{instructor.name}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {Array.from(instructor.categories).join(", ")}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              {instructor.courseCount} course{instructor.courseCount !== 1 && "s"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}