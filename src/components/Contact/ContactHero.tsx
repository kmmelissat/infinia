"use client";

import { useState, useEffect } from "react";

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-purple-900/10 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-purple-primary/10 via-purple-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 backdrop-blur-md bg-white/5 border border-purple-primary/20 rounded-full px-6 py-3 mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-light">
              Contacto
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Hablemos de tu
            <span className="block gradient-text bg-gradient-to-r from-purple-primary via-purple-secondary to-purple-primary bg-clip-text text-transparent">
              Próximo Proyecto
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Estamos aquí para convertir tus ideas en realidad digital. Cuéntanos
            sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus
            objetivos.
          </p>

          {/* Quick Contact Options */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Disponible 24/7</span>
            </div>
            <div className="flex items-center space-x-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Respuesta en 24h</span>
            </div>
            <div className="flex items-center space-x-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-purple-primary rounded-full animate-pulse"></div>
              <span className="text-gray-300">Consulta Gratuita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
