import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="About Us"
        title="Our Mission"
        subtitle="We believe quality education should be accessible to everyone, everywhere."
      />

      <div className="mt-10 space-y-6 text-slate-600 leading-relaxed">
        <p>
          Orbis was founded to close the gap between traditional
          education and the skills people actually need in today's job
          market. We partner with industry experts to build courses that are
          practical, up to date, and genuinely useful.
        </p>
        <p>
          Since launch, we've helped tens of thousands of students build new
          careers in development, design, data science, and marketing —
          learning at their own pace, on their own schedule.
        </p>
        <p>
          Our team is small, remote-first, and obsessed with making online
          learning feel less like a lecture and more like mentorship.
        </p>
      </div>
    </section>
  );
}