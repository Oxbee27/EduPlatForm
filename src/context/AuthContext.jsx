import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on load
  useEffect(() => {
    const stored = localStorage.getItem("eduplatform_user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  function login({ email, name }) {
    const mockUser = { name: name || email.split("@")[0], email, enrolledCourseIds: [] };
    localStorage.setItem("eduplatform_user", JSON.stringify(mockUser));
    setUser(mockUser);
  }

  function register({ name, email }) {
    const mockUser = { name, email, enrolledCourseIds: [] };
    localStorage.setItem("eduplatform_user", JSON.stringify(mockUser));
    setUser(mockUser);
  }

  function logout() {
    localStorage.removeItem("eduplatform_user");
    setUser(null);
  }

  function enroll(courseId) {
    setUser((prev) => {
      if (!prev) return prev;
      if (prev.enrolledCourseIds.includes(courseId)) return prev;
      const updated = { ...prev, enrolledCourseIds: [...prev.enrolledCourseIds, courseId] };
      localStorage.setItem("eduplatform_user", JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, enroll }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}