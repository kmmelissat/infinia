"use client";

import { useState } from "react";

const ContactMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Street, Suite 400",
      zipCode: "CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@infinia.dev",
      isMain: true,
    },
    {
      city: "New York",
      address: "456 Tech Avenue, Floor 12",
      zipCode: "NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@infinia.dev",
      isMain: false,
    },
    {
      city: "Austin",
      address: "789 Startup Boulevard, Building C",
      zipCode: "TX 78701",
      phone: "+1 (555) 456-7890",
      email: "austin@infinia.dev",
      isMain: false,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900/10 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-primary/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.01)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Nuestras Oficinas
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Visítanos en cualquiera de nuestras ubicaciones o programa una
            reunión virtual
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Office Cards */}
          <div className="lg:col-span-1 space-y-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`relative backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  office.isMain
                    ? "bg-gradient-to-br from-purple-primary/10 to-purple-secondary/10 border-purple-primary/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {office.isMain && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-purple-primary to-purple-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Oficina Principal
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      office.isMain
                        ? "bg-gradient-to-r from-purple-primary to-purple-secondary"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500"
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{office.address}</span>
                      </div>
                      <div className="text-gray-400 ml-6">{office.zipCode}</div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() =>
                      window.open(
                        `https://maps.google.com/?q=${encodeURIComponent(
                          office.address + ", " + office.city
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"
                      />
                    </svg>
                    <span>Ver Mapa</span>
                  </button>
                  <button
                    onClick={() => window.open(`tel:${office.phone}`, "_self")}
                    className="bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white text-sm py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Border Glow for Main Office */}
                {office.isMain && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-2xl opacity-20 blur-sm -z-10"></div>
                )}
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Mapa Interactivo
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Encuentra nuestras oficinas fácilmente
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=San+Francisco,+CA",
                        "_blank"
                      )
                    }
                    className="bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Abrir en Google Maps
                  </button>
                </div>
              </div>

              {/* Map Overlay with Office Markers */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Simulated map markers */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Prefieres una reunión virtual?
          </h3>
          <p className="text-gray-300 mb-6">
            Programa una videollamada y hablemos sobre tu proyecto desde la
            comodidad de tu oficina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-primary/40 hover:shadow-purple-primary/60 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center space-x-2">
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Agendar Videollamada</span>
              </span>
            </button>
            <button className="group relative bg-transparent border-2 border-purple-primary/50 hover:border-purple-primary text-purple-light hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/0 to-purple-primary/0 group-hover:from-purple-primary/10 group-hover:to-purple-primary/10 transition-all duration-300"></div>
              <span className="relative z-10 flex items-center space-x-2">
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
                    d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 9a2 2 0 002 2h8a2 2 0 002-2l-2-9"
                  />
                </svg>
                <span>Visitar Oficina</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
