import React from "react";
import { Link } from "react-router-dom";
import Badge from "../common/Badge.jsx";

const LEVEL_COLOR = {
  Beginner: "green",
  Intermediate: "yellow",
  Advanced: "red",
};

/**
 * @param {object} course - a course object from data/courses.js
 */
export default function CourseCard({ course }) {
  const {
    id,
    title,
    category,
    level,
    instructor,
    thumbnail,
    price,
    originalPrice,
    rating,
    reviewsCount,
    durationHours,
    lessonsCount,
  } = course;

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <Link
      to={`/courses/${id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Thumbnail */}
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        {/* Badges */}
        <div className="flex items-center gap-2">
          <Badge color="indigo">{category}</Badge>
          <Badge color={LEVEL_COLOR[level] || "slate"}>{level}</Badge>
        </div>

        {/* Title */}
        <h3 className="mt-3 line-clamp-2 text-base font-semibold text-slate-900 group-hover:text-indigo-600">
          {title}
        </h3>

        {/* Instructor */}
        <p className="mt-1 text-sm text-slate-500">by {instructor}</p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1 text-sm">
          <span className="font-semibold text-amber-500">{rating.toFixed(1)}</span>
          <StarIcon />
          <span className="text-slate-400">({reviewsCount.toLocaleString()})</span>
        </div>

        {/* Meta */}
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
          <span>{durationHours}h</span>
          <span>&middot;</span>
          <span>{lessonsCount} lessons</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg font-bold text-slate-900">${price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-sm text-slate-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
    </svg>
  );
}