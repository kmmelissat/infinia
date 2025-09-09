"use client";

import { useState, useEffect } from "react";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tech-stack");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
        { name: "Vue.js", icon: "🟢", color: "from-green-400 to-green-600" },
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-700" },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          color: "from-cyan-400 to-cyan-600",
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
        { name: "Python", icon: "🐍", color: "from-yellow-400 to-yellow-600" },
        { name: "Express", icon: "⚡", color: "from-gray-600 to-gray-800" },
        { name: "FastAPI", icon: "🚀", color: "from-teal-400 to-teal-600" },
        { name: "GraphQL", icon: "🔗", color: "from-pink-400 to-pink-600" },
      ],
    },
    {
      title: "Database",
      technologies: [
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-800" },
        { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
        { name: "Redis", icon: "🔴", color: "from-red-500 to-red-700" },
        {
          name: "Supabase",
          icon: "⚡",
          color: "from-emerald-400 to-emerald-600",
        },
        {
          name: "Firebase",
          icon: "🔥",
          color: "from-orange-400 to-orange-600",
        },
      ],
    },
    {
      title: "DevOps & Cloud",
      technologies: [
        { name: "AWS", icon: "☁️", color: "from-orange-500 to-orange-700" },
        { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-700" },
        {
          name: "Kubernetes",
          icon: "⚙️",
          color: "from-purple-500 to-purple-700",
        },
        { name: "Vercel", icon: "▲", color: "from-gray-800 to-black" },
        {
          name: "GitHub Actions",
          icon: "🚀",
          color: "from-gray-700 to-gray-900",
        },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-primary/3 via-transparent to-transparent rounded-full blur-3xl"></div>

        {/* Floating particles */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 backdrop-blur-md bg-white/5 border border-purple-primary/20 rounded-full px-6 py-3 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-light">
              Technology Stack
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Cutting-Edge
            <span className="block gradient-text">Technologies We Use</span>
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            We leverage the latest and most reliable technologies to build
            robust, scalable, and future-proof applications.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + categoryIndex * 200}ms` }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer`}
                    style={{
                      transitionDelay: `${
                        800 + categoryIndex * 200 + techIndex * 50
                      }ms`,
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Tech Icon */}
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tech.icon}
                      </div>

                      {/* Tech Name */}
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-light transition-colors duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/0 via-purple-primary/5 to-purple-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "50+", label: "Technologies Mastered" },
            { number: "100+", label: "Projects Delivered" },
            { number: "99.9%", label: "Uptime Guaranteed" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
