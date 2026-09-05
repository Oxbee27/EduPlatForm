import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import Badge from "../../components/common/Badge.jsx";
import { getCourseById } from "../../data/courses.js";

const LEVEL_COLOR = {
  Beginner: "green",
  Intermediate: "yellow",
  Advanced: "red",
};

export default function CourseDetails() {
  const { id } = useParams();
  const course = getCourseById(id);

  if (!course) {
    return <Navigate to="/404" replace />;
  }

  const {
    title,
    category,
    level,
    instructor,
    instructorAvatar,
    thumbnail,
    price,
    originalPrice,
    rating,
    reviewsCount,
    studentsCount,
    durationHours,
    lessonsCount,
    description,
    tags,
  } = course;

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500">
        <Link to="/courses" className="hover:text-indigo-600">
          Courses
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{title}</span>
      </nav>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <Badge color="indigo">{category}</Badge>
            <Badge color={LEVEL_COLOR[level] || "slate"}>{level}</Badge>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-4 text-lg text-slate-600">{description}</p>

          {/* Rating / meta */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-1 font-semibold text-amber-500">
              {rating.toFixed(1)} <StarIcon />
              <span className="font-normal text-slate-400">
                ({reviewsCount.toLocaleString()} reviews)
              </span>
            </span>
            <span>{studentsCount.toLocaleString()} students</span>
            <span>{durationHours}h total</span>
            <span>{lessonsCount} lessons</span>
          </div>

          {/* Instructor */}
          <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
            <img
              src={instructorAvatar}
              alt={instructor}
              className="h-12 w-12 rounded-full object-cover bg-slate-100"
            />
            <div>
              <div className="text-xs text-slate-500">Instructor</div>
              <div className="font-semibold text-slate-900">{instructor}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 border-t border-slate-100 pt-6">
            <h3 className="text-sm font-semibold text-slate-900">Skills you'll gain</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} color="slate">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky purchase card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="aspect-video w-full bg-slate-100">
              <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">
                  ${price.toFixed(2)}
                </span>
                {hasDiscount && (
                  <span className="text-base text-slate-400 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <Button fullWidth size="lg" className="mt-5">
                Enroll Now
              </Button>
              <Button fullWidth variant="secondary" size="lg" className="mt-3">
                Add to Wishlist
              </Button>

              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>✔ Full lifetime access</li>
                <li>✔ Certificate of completion</li>
                <li>✔ Access on mobile and desktop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
    </svg>
  );
}