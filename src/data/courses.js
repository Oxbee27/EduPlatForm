export const courses = [
  {
    id: "web-dev-bootcamp",
    title: "Full-Stack Web Development Bootcamp",
    category: "Development",
    level: "Beginner",
    instructor: "Sarah Chen",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    price: 49.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewsCount: 2140,
    studentsCount: 18400,
    durationHours: 42,
    lessonsCount: 186,
    description:
      "Learn HTML, CSS, JavaScript, React, and Node.js from scratch and build real-world projects.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: "ux-ui-design-fundamentals",
    title: "UX/UI Design Fundamentals",
    category: "Design",
    level: "Beginner",
    instructor: "Daniel Osei",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    price: 39.99,
    originalPrice: 89.99,
    rating: 4.7,
    reviewsCount: 980,
    studentsCount: 9200,
    durationHours: 18,
    lessonsCount: 74,
    description:
      "Master the principles of user experience and interface design using Figma.",
    tags: ["Figma", "UX Research", "Wireframing", "Prototyping"],
  },
  {
    id: "python-data-science",
    title: "Python for Data Science & Machine Learning",
    category: "Data Science",
    level: "Intermediate",
    instructor: "Priya Nair",
    instructorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    price: 59.99,
    originalPrice: 149.99,
    rating: 4.9,
    reviewsCount: 3120,
    studentsCount: 27600,
    durationHours: 55,
    lessonsCount: 210,
    description:
      "Go from Python basics to building machine learning models with pandas, NumPy, and scikit-learn.",
    tags: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    id: "digital-marketing-masterclass",
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    level: "Beginner",
    instructor: "Marcus Lee",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    price: 34.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviewsCount: 1540,
    studentsCount: 14200,
    durationHours: 24,
    lessonsCount: 98,
    description:
      "Learn SEO, social media marketing, email campaigns, and paid advertising strategy.",
    tags: ["SEO", "Social Media", "Email Marketing", "Ads"],
  },
];

export const categories = [...new Set(courses.map((c) => c.category))];
export const levels = [...new Set(courses.map((c) => c.level))];

export function getCourseById(id) {
  return courses.find((course) => course.id === id);
}