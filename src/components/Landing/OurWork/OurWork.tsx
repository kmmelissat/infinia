"use client";

import { useState, useEffect } from "react";

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("our-work");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "all", name: "Todos los Proyectos", count: 12 },
    { id: "web", name: "Desarrollo Web", count: 5 },
    { id: "mobile", name: "Apps Móviles", count: 3 },
    { id: "ecommerce", name: "E-commerce", count: 2 },
    { id: "enterprise", name: "Empresarial", count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: "TechFlow Dashboard",
      subtitle: "Plataforma de Analytics Empresarial",
      category: "enterprise",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      description:
        "Dashboard completo para análisis de datos empresariales con visualizaciones interactivas y reportes en tiempo real.",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
      metrics: {
        performance: "+45% Eficiencia",
        users: "10K+ Usuarios",
        satisfaction: "98% Satisfacción",
      },
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      year: "2024",
      client: "TechCorp Solutions",
    },
    {
      id: 2,
      title: "ShopSmart Mobile",
      subtitle: "App de E-commerce Inteligente",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      description:
        "Aplicación móvil con IA para recomendaciones personalizadas y experiencia de compra optimizada.",
      technologies: ["React Native", "Python", "TensorFlow", "AWS"],
      metrics: {
        downloads: "50K+ Descargas",
        rating: "4.9★ Rating",
        conversion: "+35% Conversión",
      },
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      year: "2024",
      client: "RetailMax",
    },
    {
      id: 3,
      title: "EcoMarket Platform",
      subtitle: "Marketplace Sostenible",
      category: "ecommerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      description:
        "Plataforma de comercio electrónico enfocada en productos sostenibles con sistema de trazabilidad.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Blockchain"],
      metrics: {
        vendors: "500+ Vendedores",
        products: "10K+ Productos",
        growth: "+120% Crecimiento",
      },
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      year: "2023",
      client: "EcoVentures",
    },
    {
      id: 4,
      title: "HealthTrack Pro",
      subtitle: "Sistema de Gestión Hospitalaria",
      category: "enterprise",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
      description:
        "Sistema integral para gestión hospitalaria con módulos de pacientes, inventario y facturación.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      metrics: {
        hospitals: "25+ Hospitales",
        patients: "100K+ Pacientes",
        efficiency: "+60% Eficiencia",
      },
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/10 to-orange-500/10",
      year: "2023",
      client: "MedGroup",
    },
    {
      id: 5,
      title: "EduLearn Platform",
      subtitle: "Plataforma de Aprendizaje Online",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      description:
        "Plataforma educativa con cursos interactivos, gamificación y seguimiento de progreso personalizado.",
      technologies: ["React", "Express", "MongoDB", "WebRTC"],
      metrics: {
        students: "25K+ Estudiantes",
        courses: "500+ Cursos",
        completion: "85% Completación",
      },
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      year: "2024",
      client: "EduTech Institute",
    },
    {
      id: 6,
      title: "FitTracker App",
      subtitle: "App de Fitness Personalizada",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      description:
        "Aplicación de fitness con planes personalizados, tracking de ejercicios y comunidad social.",
      technologies: ["Flutter", "Firebase", "ML Kit", "HealthKit"],
      metrics: {
        users: "30K+ Usuarios",
        workouts: "1M+ Entrenamientos",
        retention: "78% Retención",
      },
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      year: "2023",
      client: "FitLife Corp",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="our-work"
      className="relative py-24 bg-gradient-to-br from-black via-gray-900/20 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-purple-primary/8 via-purple-primary/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-radial from-blue-500/8 via-blue-500/4 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
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
              Nuestro Trabajo
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Proyectos que
            <span className="block gradient-text">Inspiran Confianza</span>
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Descubre cómo hemos transformado ideas innovadoras en soluciones
            digitales exitosas que generan impacto real en diferentes
            industrias.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-primary to-purple-secondary text-white scale-105"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-white/20"
                      : "bg-purple-primary/20"
                  }`}
                >
                  {category.count}
                </span>
              </span>

              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full opacity-50 blur-lg -z-10"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-40`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-full`}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Client */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      {project.client}
                    </span>
                    <div className="flex space-x-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full opacity-60`}
                          ></div>
                        ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-light transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                    {Object.entries(project.metrics).map(
                      ([key, value], metricIndex) => (
                        <div key={key} className="text-center">
                          <div
                            className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                          >
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 -z-10`}
                ></div>
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
            { number: "100+", label: "Proyectos Completados" },
            { number: "50+", label: "Clientes Satisfechos" },
            { number: "99%", label: "Tasa de Éxito" },
            { number: "24/7", label: "Soporte Continuo" },
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

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Convirtamos tu idea en el próximo caso de éxito
            </p>
            <button className="group relative bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-primary/40 hover:shadow-purple-primary/60 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Ver Más Proyectos</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
