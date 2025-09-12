"use client";

import { useState, useEffect, useRef } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Modern SVG Icons as components
  const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <path
        d="M13.325 3.05011L8.667 20.4323C8.48329 21.0671 8.26068 21.5 7.91665 21.5C7.57261 21.5 7.35 21.0671 7.16629 20.4323L2.50829 3.05011C2.32458 2.41534 2.54719 2 2.89123 2C3.23527 2 3.45788 2.41534 3.64159 3.05011L7.91665 18.0677L12.1917 3.05011C12.3754 2.41534 12.598 2 12.9421 2C13.2861 2 13.5087 2.41534 13.325 3.05011Z"
        fill="currentColor"
      />
      <path
        d="M21.8482 10.0532L16.9679 5.17289C16.5774 4.78237 15.9442 4.78237 15.5537 5.17289C15.1632 5.56342 15.1632 6.19658 15.5537 6.58711L19.4666 10.5L15.5537 14.4129C15.1632 14.8034 15.1632 15.4366 15.5537 15.8271C15.9442 16.2176 16.5774 16.2176 16.9679 15.8271L21.8482 10.9468C22.2387 10.5563 22.2387 9.92316 21.8482 10.0532Z"
        fill="currentColor"
      />
    </svg>
  );

  const DesignIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <path
        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
        fill="currentColor"
      />
      <path
        d="M12 17L13.09 20.26L19 21L13.09 21.74L12 25L10.91 21.74L5 21L10.91 20.26L12 17Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );

  const TransformIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <path
        d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5" />
      <path
        d="M12 1V5M12 19V23M4.22 4.22L6.34 6.34M17.66 17.66L19.78 19.78M1 12H5M19 12H23M4.22 19.78L6.34 17.66M17.66 6.34L19.78 4.22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );

  const GrowthIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <path
        d="M3 17L9 11L13 15L21 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7H21V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="11" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="13" cy="15" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );

  const InnovationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <path
        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
        fill="currentColor"
      />
      <path
        d="M8 16L12 20L16 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );

  const services = [
    {
      title: "Desarrollo de Software a la Medida",
      shortTitle: "Software Development",
      description:
        "Creamos soluciones digitales robustas y escalables que impulsan el crecimiento de tu negocio. Desde aplicaciones web hasta sistemas empresariales complejos.",
      detailedDescription:
        "Nuestro equipo de desarrolladores expertos utiliza las últimas tecnologías y metodologías ágiles para crear software personalizado que se adapta perfectamente a tus necesidades empresariales. Desde la arquitectura inicial hasta el despliegue en producción, garantizamos código limpio, escalable y mantenible.",
      features: [
        "APIs RESTful y GraphQL",
        "Arquitectura de Microservicios",
        "Aplicaciones Web Progresivas (PWA)",
        "Aplicaciones Móviles Nativas e Híbridas",
        "Sistemas de Gestión Empresarial (ERP)",
        "Plataformas de E-commerce",
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "MongoDB"],
      benefits: [
        "Reducción de costos operativos hasta 40%",
        "Mejora en productividad del equipo",
        "Escalabilidad automática según demanda",
        "Integración con sistemas existentes",
      ],
      timeline: "3-6 meses",
      icon: CodeIcon,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      category: "Desarrollo",
      pattern: "code",
    },
    {
      title: "Diseño UX/UI + Branding Digital",
      shortTitle: "UX/UI Design",
      description:
        "Diseñamos experiencias digitales memorables que conectan emocionalmente con tus usuarios y fortalecen la identidad de tu marca.",
      detailedDescription:
        "Creamos interfaces intuitivas y atractivas basadas en investigación de usuarios real. Nuestro proceso incluye desde wireframes hasta prototipos interactivos, asegurando que cada elemento visual tenga un propósito claro y mejore la experiencia del usuario.",
      features: [
        "Investigación y Análisis de Usuarios",
        "Wireframes y Arquitectura de Información",
        "Prototipado Interactivo Avanzado",
        "Testing de Usabilidad A/B",
        "Sistemas de Diseño Escalables",
        "Branding y Identidad Visual",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Principle",
        "Framer",
        "Sketch",
        "InVision",
      ],
      benefits: [
        "Aumento de conversiones hasta 35%",
        "Reducción de tiempo de desarrollo",
        "Mejora en satisfacción del usuario",
        "Consistencia visual en todos los canales",
      ],
      timeline: "2-4 meses",
      icon: DesignIcon,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      category: "Diseño",
      pattern: "design",
    },
    {
      title: "Consultoría en Transformación Digital",
      shortTitle: "Digital Transformation",
      description:
        "Modernizamos tus procesos empresariales con estrategias digitales integrales que optimizan la eficiencia y reducen costos operativos.",
      detailedDescription:
        "Analizamos tu empresa desde una perspectiva holística para identificar oportunidades de mejora y digitalización. Implementamos soluciones que automatizan procesos, mejoran la colaboración y proporcionan insights valiosos para la toma de decisiones estratégicas.",
      features: [
        "Auditoría y Diagnóstico Digital Completo",
        "Reingeniería de Procesos de Negocio",
        "Implementación de ERP/CRM Personalizado",
        "Migración Segura a la Nube",
        "Automatización de Flujos de Trabajo",
        "Capacitación y Change Management",
      ],
      technologies: [
        "Salesforce",
        "SAP",
        "Microsoft 365",
        "Google Cloud",
        "Power BI",
        "Zapier",
      ],
      benefits: [
        "Reducción de tiempo en procesos hasta 60%",
        "Mejora en visibilidad de datos empresariales",
        "Reducción de errores manuales",
        "ROI positivo en 6-12 meses",
      ],
      timeline: "4-8 meses",
      icon: TransformIcon,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderGradient: "from-green-500/30 to-emerald-500/30",
      category: "Consultoría",
      pattern: "transform",
    },
    {
      title: "Marketing Digital & Growth Hacking",
      shortTitle: "Digital Marketing",
      description:
        "Aceleramos el crecimiento de tu negocio con estrategias de marketing digital basadas en datos y técnicas de growth hacking probadas.",
      detailedDescription:
        "Desarrollamos estrategias de marketing digital integrales que combinan técnicas tradicionales con growth hacking innovador. Utilizamos análisis de datos avanzados para optimizar cada touchpoint del customer journey y maximizar el ROI de tus campañas.",
      features: [
        "SEO/SEM y Optimización de Conversiones",
        "Marketing de Contenidos y Storytelling",
        "Automatización de Marketing Multicanal",
        "Analítica Avanzada y Attribution Modeling",
        "Social Media Marketing y Community Building",
        "Email Marketing y Lead Nurturing",
      ],
      technologies: [
        "Google Ads",
        "HubSpot",
        "Mailchimp",
        "Analytics",
        "Facebook Ads",
        "Hotjar",
      ],
      benefits: [
        "Aumento en leads calificados hasta 200%",
        "Reducción del costo de adquisición (CAC)",
        "Mejora en lifetime value (LTV)",
        "Crecimiento orgánico sostenible",
      ],
      timeline: "2-6 meses",
      icon: GrowthIcon,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "from-orange-500/30 to-red-500/30",
      category: "Marketing",
      pattern: "growth",
    },
    {
      title: "Infinia Labs (I+D)",
      shortTitle: "Innovation Lab",
      description:
        "Exploramos las tecnologías emergentes para crear soluciones innovadoras que te mantengan a la vanguardia de tu industria.",
      detailedDescription:
        "Nuestro laboratorio de innovación investiga y desarrolla soluciones con tecnologías de vanguardia. Creamos prototipos funcionales y MVPs que permiten a las empresas experimentar con nuevas tecnologías de forma segura y escalable.",
      features: [
        "Desarrollo de IA y Machine Learning",
        "Soluciones Blockchain y Web3",
        "Internet de las Cosas (IoT) Industrial",
        "Realidad Aumentada/Virtual Empresarial",
        "Automatización Robótica de Procesos (RPA)",
        "Computer Vision y Procesamiento de Lenguaje Natural",
      ],
      technologies: [
        "TensorFlow",
        "Ethereum",
        "IoT",
        "Unity",
        "OpenAI",
        "Solidity",
      ],
      benefits: [
        "Ventaja competitiva con tecnología de punta",
        "Automatización de procesos complejos",
        "Nuevas fuentes de ingresos digitales",
        "Preparación para el futuro digital",
      ],
      timeline: "3-12 meses",
      icon: InnovationIcon,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderGradient: "from-indigo-500/30 to-purple-500/30",
      category: "Innovación",
      pattern: "innovation",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 bg-gradient-to-br from-black via-purple-900/10 to-black overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-purple-primary/10 via-purple-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Mouse follower effect */}
        {hoveredIndex !== null && (
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-purple-primary/5 via-transparent to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-300"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          ></div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center space-x-3 backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 border border-purple-primary/30  px-8 py-4 mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-gradient-to-r from-purple-secondary to-purple-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-purple-light tracking-wider uppercase">
              Nuestros Servicios
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Soluciones que
            <span className="block gradient-text bg-gradient-to-r from-purple-primary via-purple-secondary to-purple-primary bg-clip-text text-transparent animate-gradient-x">
              Transforman Negocios
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Combinamos creatividad, tecnología e innovación para crear
            experiencias digitales excepcionales que impulsan el crecimiento
            sostenible de tu empresa.
          </p>
        </div>

        {/* New Interactive Services Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Compact Service Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Nuestros Servicios
              </h3>
              <p className="text-gray-400">
                Selecciona un servicio para ver más detalles
              </p>
            </div>

            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isSelected = selectedService === index;

              return (
                <div
                  key={index}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                  onClick={() => setSelectedService(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative backdrop-blur-xl rounded-full p-6 border transition-all duration-300 ${
                      isSelected
                        ? `bg-gradient-to-r ${service.bgGradient} border-white/30 scale-105`
                        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    {/* Selection Indicator */}
                    {isSelected && (
                      <div
                        className={`absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b ${service.gradient} rounded-full`}
                      ></div>
                    )}

                    <div className="flex items-center space-x-4">
                      {/* Compact Icon */}
                      <div
                        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? `bg-gradient-to-br ${service.gradient} scale-110`
                            : `bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105`
                        }`}
                      >
                        <div className="text-white">
                          <IconComponent />
                        </div>

                        {/* Glow effect for selected */}
                        {isSelected && (
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full opacity-50 blur-lg -z-10`}
                          ></div>
                        )}
                      </div>

                      {/* Service Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4
                            className={`font-bold text-lg transition-colors duration-300 ${
                              isSelected
                                ? "text-white"
                                : "text-gray-200 group-hover:text-white"
                            }`}
                          >
                            {service.shortTitle}
                          </h4>
                          <span
                            className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${service.gradient} text-white rounded-full opacity-80`}
                          >
                            {service.category}
                          </span>
                        </div>
                        <p
                          className={`text-sm transition-colors duration-300 truncate ${
                            isSelected
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow Indicator */}
                      <div
                        className={`transition-all duration-300 ${
                          isSelected
                            ? "text-white rotate-90"
                            : "text-gray-500 group-hover:text-gray-300"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Detailed Service View */}
          <div className="lg:col-span-3">
            <div
              className={`sticky top-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {(() => {
                const service = services[selectedService];
                const IconComponent = service.icon;

                return (
                  <div className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 lg:p-10">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-20`}
                      ></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-6">
                          <div
                            className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center shadow-2xl`}
                          >
                            <div className="text-white">
                              <IconComponent />
                            </div>
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full opacity-50 blur-xl -z-10`}
                            ></div>
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">
                              {service.shortTitle}
                            </h3>
                            <p className="text-base text-gray-300">
                              {service.title}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`px-4 py-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                        >
                          <span className="text-sm font-bold text-white uppercase tracking-wider">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8">
                        <p className="text-lg text-gray-300 leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <p className="text-base text-gray-400 leading-relaxed">
                          {service.detailedDescription}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                          <div
                            className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-2`}
                          ></div>
                          Servicios Incluidos
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-2 p-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0`}
                              ></div>
                              <span className="text-gray-300 font-medium text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                          <div
                            className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-2`}
                          ></div>
                          Stack Tecnológico
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`inline-flex items-center px-3 py-2 text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-opacity-20 text-white rounded-full border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Border Glow */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-20 blur-sm -z-10`}
                    ></div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para el siguiente nivel?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Transformemos juntos tu visión en realidad digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-primary/40 hover:shadow-purple-primary/60 overflow-hidden min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Comenzar Proyecto</span>
              </button>
              <button className="group relative bg-transparent border-2 border-purple-primary/50 hover:border-purple-primary text-purple-light hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/0 to-purple-primary/0 group-hover:from-purple-primary/10 group-hover:to-purple-primary/10 transition-all duration-300"></div>
                <span className="relative z-10">Consulta Gratuita</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
