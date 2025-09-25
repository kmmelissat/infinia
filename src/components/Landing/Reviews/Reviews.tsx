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
              className={`group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 hover:border-white/30 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${review.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              ></div>
              <div
                className={`absolute inset-[1px] rounded-3xl bg-gradient-to-br from-black/80 via-black/60 to-black/80 -z-10`}
              ></div>

              {/* Rating Stars with Animation */}
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <div
                    key={i}
                    className="relative"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="text-yellow-400 text-xl group-hover:scale-110 transition-transform duration-300 inline-block">
                      ⭐
                    </span>
                    <div className="absolute inset-0 text-yellow-300 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                      ⭐
                    </div>
                  </div>
                ))}
              </div>

              {/* Review Text with Better Typography */}
              <div className="relative mb-8">
                <p className="text-gray-200 leading-relaxed text-lg group-hover:text-white transition-colors duration-300 relative z-10">
                  <span className="text-3xl text-purple-light/50 absolute -top-2 -left-2">
                    &quot;
                  </span>
                  <span className="ml-4">{review.review}</span>
                  <span className="text-3xl text-purple-light/50 ml-1">
                    &quot;
                  </span>
                </p>

                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${review.gradient} w-0 group-hover:w-full transition-all duration-700 ease-out`}
                ></div>
              </div>

              {/* Enhanced Reviewer Info */}
              <div className="flex items-center space-x-4 relative z-10">
                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${review.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    {review.avatar}
                  </div>
                  {/* Pulsing ring effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${review.gradient} rounded-2xl opacity-0 group-hover:opacity-30 animate-ping`}
                  ></div>
                </div>

                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg group-hover:text-purple-light transition-colors duration-300 mb-1">
                    {review.name}
                  </h4>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 mb-1">
                    {review.role}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${review.gradient} rounded-full`}
                    ></div>
                    <p className="text-purple-light text-sm font-semibold">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                <div
                  className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-pink-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"
                  style={{ animationDelay: "0.7s" }}
                ></div>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${review.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-20`}
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                metric: "4.9/5",
                label: "Calificación Promedio",
                icon: "⭐",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                metric: "98%",
                label: "Satisfacción del Cliente",
                icon: "😊",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                metric: "50+",
                label: "Clientes Satisfechos",
                icon: "🤝",
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                metric: "100%",
                label: "Tasa de Éxito en Proyectos",
                icon: "🎯",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Metric */}
                <div
                  className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.metric}
                </div>

                {/* Label */}
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/10 via-transparent to-purple-secondary/10 rounded-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para unirte a nuestros clientes satisfechos?
              </h3>
              <p className="text-gray-300 mb-8">
                Únete a más de 50 empresas que han transformado su negocio con
                Infinia
              </p>

              <button className="group relative bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-primary/40 hover:shadow-purple-primary/60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Inicia Tu Proyecto</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
