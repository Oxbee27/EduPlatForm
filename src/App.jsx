import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout.jsx";

import Home from "./pages/public/Home.jsx";
import Courses from "./pages/public/Courses.jsx";
import CourseDetails from "./pages/public/CourseDetails.jsx";
import Instructors from "./pages/public/Instructors.jsx";
import Pricing from "./pages/public/Pricing.jsx";
import About from "./pages/public/About.jsx";
import Contact from "./pages/public/Contact.jsx";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth (no navbar/footer chrome) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 */}
             {/* 404 */}
+      <Route path="/404" element={<NotFound />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
  );
}