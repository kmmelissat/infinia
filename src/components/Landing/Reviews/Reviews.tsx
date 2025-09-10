"use client";

import { useState, useEffect } from "react";

const Reviews = () => {
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

    const element = document.getElementById("reviews");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "Grupo Empresarial Centroamérica",
      avatar: "👨‍💼",
      rating: 5,
      review:
        "Infinia transformó completamente nuestros procesos empresariales. Su consultoría en transformación digital nos permitió expandirnos exitosamente a mercados internacionales. Excelente trabajo del equipo salvadoreño.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "María Elena Rodríguez",
      role: "Directora de Marketing",
      company: "Innovación Retail SV",
      avatar: "👩‍💼",
      rating: 5,
      review:
        "Las estrategias de marketing digital de Infinia aumentaron nuestras ventas online en un 300%. Su enfoque en SEO/SEM y automatización fue clave para nuestro crecimiento en El Salvador y Guatemala.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Roberto Silva",
      role: "CTO",
      company: "FinTech Centroamericana",
      avatar: "👨‍💻",
      rating: 5,
      review:
        "El desarrollo de nuestra plataforma fintech fue excepcional. Infinia Labs implementó blockchain y IA que nos posicionó como líderes en innovación financiera en la región.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Ana Sofía Martínez",
      role: "Founder",
      company: "EcoTech Solutions",
      avatar: "👩‍🔬",
      rating: 5,
      review:
        "La aplicación móvil que desarrollaron tiene más de 50,000 descargas. Su diseño UX/UI centrado en el usuario latinoamericano fue fundamental para nuestro éxito en el mercado regional.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Diego Hernández",
      role: "Director de Operaciones",
      company: "LogiSmart CA",
      avatar: "👨‍🔧",
      rating: 5,
      review:
        "La implementación de IoT y automatización RPA redujo nuestros costos operativos en 40%. Infinia demostró que la innovación tecnológica puede nacer desde El Salvador para el mundo.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Gabriela Vásquez",
      role: "VP de Tecnología",
      company: "HealthCare Innovación",
      avatar: "👩‍⚕️",
      rating: 5,
      review:
        "Su experiencia en seguridad y cumplimiento internacional fue crucial para nuestro sistema de salud. Logramos certificaciones internacionales que nos abrieron mercados en toda Latinoamérica.",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative py-24 bg-gradient-to-br from-black via-purple-900/10 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        {/* Floating stars */}
        <div
          className="absolute top-1/6 left-1/3 text-yellow-400 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          ⭐
        </div>
        <div
          className="absolute top-2/3 right-1/3 text-yellow-400 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          ⭐
        </div>
        <div
          className="absolute bottom-1/6 left-2/3 text-yellow-400 animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          ⭐
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
              Testimonios de Clientes
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Lo que Dicen Nuestros
            <span className="block gradient-text">Clientes</span>
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            No solo confíes en nuestra palabra. Descubre lo que líderes
            empresariales de Centroamérica y el mundo dicen sobre trabajar con
            Infinia.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${review.gradient} rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-purple-light transition-colors duration-300">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {review.role}
                  </p>
                  <p className="text-purple-light text-sm font-medium">
                    {review.company}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/0 via-purple-primary/5 to-purple-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { metric: "4.9/5", label: "Calificación Promedio" },
              { metric: "98%", label: "Satisfacción del Cliente" },
              { metric: "50+", label: "Clientes Satisfechos" },
              { metric: "100%", label: "Tasa de Éxito en Proyectos" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.metric}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-300 mb-6">
            ¿Listo para unirte a nuestros clientes satisfechos?
          </p>
          <button className="group relative bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-primary/40 hover:shadow-purple-primary/60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">Inicia Tu Proyecto</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
