import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import CourseCard from "../../components/course/CourseCard.jsx";
import { courses } from "../../data/courses.js";

export default function Home() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Over 20,000 students learning today
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Learn new skills.
            <br className="hidden sm:block" /> Advance your career.
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-slate-600">
            Expert-led courses in development, design, data science, and
            marketing — learn at your own pace, from anywhere.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button as={Link} to="/courses" size="lg">
              Browse Courses
            </Button>
            <Button as={Link} to="/register" variant="secondary" size="lg">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            ["4,000+", "Courses"],
            ["120+", "Expert Instructors"],
            ["50,000+", "Students"],
            ["4.8/5", "Average Rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">{value}</div>
              <div className="mt-1 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Featured"
          title="Popular Courses"
          subtitle="Hand-picked courses to help you get started, taught by industry experts."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button as={Link} to="/courses" variant="secondary">
            View All Courses
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to start learning?
          </h2>
          <p className="mt-3 text-indigo-100">
            Join thousands of students building new skills every day.
          </p>
          <div className="mt-8">
            <Button as={Link} to="/register" variant="secondary" size="lg">
              Create Free Account
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}