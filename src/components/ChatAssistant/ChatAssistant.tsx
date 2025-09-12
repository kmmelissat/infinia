"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  UserIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "¡Hola! Soy tu asistente virtual de Infinia. ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre nuestros servicios, tecnologías o ayudarte a comenzar tu proyecto.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "¡Excelente pregunta! En Infinia nos especializamos en desarrollo web moderno con React, Next.js y tecnologías de vanguardia. ¿Te interesa algún servicio en particular?",
        "Nuestro equipo puede ayudarte con desarrollo web, aplicaciones móviles, e-commerce y consultoría tecnológica. ¿Qué tipo de proyecto tienes en mente?",
        "Me encanta tu interés en nuestros servicios. Podemos crear soluciones personalizadas que se adapten perfectamente a tus necesidades. ¿Quieres que programemos una consulta gratuita?",
        "¡Perfecto! Trabajamos con las últimas tecnologías como React, TypeScript, Tailwind CSS y más. ¿Te gustaría conocer más detalles sobre nuestro proceso de desarrollo?",
        "Gracias por contactarnos. Nuestro enfoque se centra en crear experiencias digitales excepcionales. ¿Hay algún aspecto específico de tu proyecto que te gustaría discutir?",
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 h-[500px] bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-purple-primary/20 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-purple-primary/20 to-purple-secondary/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Asistente Infinia</h3>
                <p className="text-gray-400 text-xs">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? "bg-gradient-to-r from-purple-primary to-purple-secondary text-white"
                      : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-100"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <CpuChipIcon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    )}
                    {message.isUser && (
                      <UserIcon className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isUser ? "text-white/70" : "text-gray-400"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <CpuChipIcon className="w-4 h-4 text-purple-400" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/50">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent resize-none"
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-primary/30"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-14 h-14 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full shadow-lg shadow-purple-primary/25 hover:shadow-purple-primary/40 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
          ) : (
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
          )}
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Notification dot */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default ChatAssistant;
