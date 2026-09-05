import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import Badge from "../../components/common/Badge.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";

const PLANS = [
  {
    name: "Basic",
    price: "Free",
    description: "Get started with limited access.",
    features: ["Access to free courses", "Community forum access", "Basic certificate"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "For serious learners who want it all.",
    features: [
      "Access to all courses",
      "Downloadable resources",
      "Verified certificates",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49/mo",
    description: "For teams and organizations.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team progress dashboard",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Pricing"
        title="Choose the Right Plan"
        subtitle="Simple, transparent pricing. Cancel anytime."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl border p-8 shadow-sm flex flex-col ${
              plan.highlighted
                ? "border-indigo-600 ring-2 ring-indigo-100"
                : "border-slate-200"
            }`}
          >
            {plan.highlighted && (
              <Badge color="indigo" className="mb-4 self-start">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{plan.description}</p>
            <div className="mt-6 text-3xl font-bold text-slate-900">{plan.price}</div>

            <ul className="mt-6 space-y-3 text-sm text-slate-600 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-indigo-600">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              as={Link}
              to="/register"
              variant={plan.highlighted ? "primary" : "secondary"}
              fullWidth
              className="mt-8"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}