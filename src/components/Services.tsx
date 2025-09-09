"use client";

import { useState, useEffect } from "react";

const Services = () => {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Desarrollo de Software a la Medida",
      description:
        "Web apps, mobile apps y sistemas empresariales construidos con tecnologías modernas para maximizar el rendimiento y la experiencia del usuario.",
      features: [
        "APIs y Microservicios",
        "Sistemas Empresariales",
        "Aplicaciones Web",
        "Aplicaciones Móviles",
      ],
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Diseño UX/UI + Branding Digital",
      description:
        "Interfaces centradas en el usuario con prototipado y testing de experiencias digitales que conectan con tu audiencia.",
      features: [
        "Diseño UX/UI",
        "Prototipado Interactivo",
        "Testing de Usabilidad",
        "Branding Digital",
      ],
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Consultoría en Transformación Digital",
      description:
        "Diagnóstico y reingeniería de procesos con implementación de ERP, CRM y soluciones cloud para modernizar tu empresa.",
      features: [
        "Diagnóstico Digital",
        "Reingeniería de Procesos",
        "Implementación ERP/CRM",
        "Soluciones Cloud",
      ],
      icon: "🔄",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Marketing Digital & Growth",
      description:
        "Estrategias de posicionamiento digital con SEO/SEM y automatización de campañas para acelerar el crecimiento de tu negocio.",
      features: [
        "Posicionamiento Digital",
        "SEO/SEM Avanzado",
        "Automatización",
        "Growth Hacking",
      ],
      icon: "📈",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Infinia Labs (I+D)",
      description:
        "Innovación con IA, blockchain, IoT, RPA y AR/VR. Soluciones futuras aplicadas a negocios actuales para mantener tu ventaja competitiva.",
      features: [
        "Inteligencia Artificial",
        "Blockchain & Web3",
        "IoT y Automatización",
        "AR/VR Empresarial",
      ],
      icon: "🚀",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-black via-purple-900/10 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-primary/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
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
              Nuestros Servicios
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Soluciones Tecnológicas
            <span className="block gradient-text">Integrales</span>
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Desde la conceptualización hasta la implementación, ofrecemos
            servicios completos de tecnología y consultoría digital adaptados a
            las necesidades de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-light transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/0 via-purple-primary/5 to-purple-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-300 mb-6">
            ¿Listo para transformar tu empresa?
          </p>
          <button className="group relative bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-primary/40 hover:shadow-purple-primary/60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">Comencemos Hoy</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
