"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  UserIcon,
  PaperClipIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  VideoCameraIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface User {
  id: string;
  name: string;
  role: "client" | "team" | "pm" | "admin";
  avatar?: string;
  isOnline: boolean;
}

interface Message {
  id: string;
  text: string;
  userId: string;
  timestamp: Date;
  type: "text" | "file" | "system";
  fileUrl?: string;
  fileName?: string;
  replyTo?: string;
  reactions?: { emoji: string; users: string[] }[];
}

interface Channel {
  id: string;
  name: string;
  type: "general" | "task" | "private";
  participants: string[];
  unreadCount: number;
  lastMessage?: Message;
}

const ProjectChat = () => {
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showChannelInfo, setShowChannelInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock data
  const currentUser: User = {
    id: "user-1",
    name: "Carlos Mendoza (GameShop)",
    role: "client",
    isOnline: true,
  };

  const users: User[] = [
    currentUser,
    {
      id: "user-2",
      name: "Ana García",
      role: "pm",
      isOnline: true,
    },
    {
      id: "user-3",
      name: "Carlos López",
      role: "team",
      isOnline: true,
    },
    {
      id: "user-4",
      name: "María Rodríguez",
      role: "team",
      isOnline: false,
    },
  ];

  const channels: Channel[] = [
    {
      id: "general",
      name: "GameShop - General",
      type: "general",
      participants: users.map((u) => u.id),
      unreadCount: 0,
    },
    {
      id: "task-gs001",
      name: "GS-001: Autenticación",
      type: "task",
      participants: ["user-1", "user-2", "user-3"],
      unreadCount: 2,
    },
    {
      id: "task-gs002",
      name: "GS-002: Catálogo",
      type: "task",
      participants: ["user-1", "user-2", "user-3"],
      unreadCount: 1,
    },
    {
      id: "task-gs003",
      name: "GS-003: Carrito & Checkout",
      type: "task",
      participants: ["user-1", "user-2", "user-4"],
      unreadCount: 0,
    },
    {
      id: "private-pm",
      name: "Privado - Carlos & Ana",
      type: "private",
      participants: ["user-1", "user-2"],
      unreadCount: 1,
    },
  ];

  const mockMessages: { [key: string]: Message[] } = {
    general: [
      {
        id: "msg-1",
        text: "¡Bienvenidos al desarrollo del ecommerce GameShop! Estoy emocionado de trabajar con Infinia en este proyecto.",
        userId: "user-1",
        timestamp: new Date(Date.now() - 3600000),
        type: "text",
      },
      {
        id: "msg-2",
        text: "¡Gracias Carlos! Estamos súper motivados. El equipo ya está trabajando en las funcionalidades core del ecommerce.",
        userId: "user-2",
        timestamp: new Date(Date.now() - 3000000),
        type: "text",
      },
      {
        id: "msg-3",
        text: "Perfecto. Me gustaría revisar el progreso del catálogo de videojuegos. ¿Cómo van los filtros por género y plataforma?",
        userId: "user-1",
        timestamp: new Date(Date.now() - 1800000),
        type: "text",
      },
    ],
    "task-gs001": [
      {
        id: "msg-4",
        text: "El sistema de autenticación está listo! Incluye registro, login, recuperación de contraseña y autenticación social.",
        userId: "user-3",
        timestamp: new Date(Date.now() - 900000),
        type: "text",
      },
      {
        id: "msg-5",
        text: "Increíble Carlos! ¿Ya podemos probar el registro de usuarios gamers?",
        userId: "user-1",
        timestamp: new Date(Date.now() - 600000),
        type: "text",
      },
    ],
    "task-gs002": [
      {
        id: "msg-6",
        text: "El catálogo ya muestra videojuegos con imágenes, precios y descripciones. Los filtros están al 80%.",
        userId: "user-3",
        timestamp: new Date(Date.now() - 1200000),
        type: "text",
      },
    ],
  };

  useEffect(() => {
    setMessages(mockMessages[selectedChannel] || []);
  }, [selectedChannel]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      text: inputValue,
      userId: currentUser.id,
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate response
    setTimeout(() => {
      const responses = [
        "Perfecto Carlos, voy a revisar esa funcionalidad del ecommerce.",
        "Excelente idea para GameShop, lo implementamos así.",
        "Voy a trabajar en esa feature y te actualizo el progreso.",
        "¿Podrías especificar más sobre esa funcionalidad del catálogo?",
        "El ecommerce va tomando forma, excelente progreso!",
      ];

      const randomUser = users.find(
        (u) => u.id !== currentUser.id && u.isOnline
      );
      if (randomUser) {
        const responseMessage: Message = {
          id: `msg-${Date.now() + 1}`,
          text: responses[Math.floor(Math.random() * responses.length)],
          userId: randomUser.id,
          timestamp: new Date(),
          type: "text",
        };
        setMessages((prev) => [...prev, responseMessage]);
      }
      setIsTyping(false);
    }, 2000);
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

  const getUserById = (userId: string) => {
    return users.find((u) => u.id === userId);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "client":
        return "text-blue-600";
      case "pm":
        return "text-purple-600";
      case "team":
        return "text-green-600";
      case "admin":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "client":
        return "Cliente";
      case "pm":
        return "PM";
      case "team":
        return "Equipo";
      case "admin":
        return "Admin";
      default:
        return "Usuario";
    }
  };

  const currentChannel = channels.find((c) => c.id === selectedChannel);

  return (
    <div className="bg-dashboard-card rounded-2xl shadow-sm border border-dashboard-border overflow-hidden h-[calc(100vh-140px)] flex">
      {/* Channels Sidebar */}
      <div className="w-72 bg-gray-50 border-r border-dashboard-border flex flex-col">
        {/* Header */}
        <div className="p-3 border-b border-dashboard-border">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar conversaciones..."
              className="w-full pl-8 pr-3 py-2 text-sm border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
            />
            <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Channels List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3">
            <div className="text-xs font-semibold text-dashboard-text-secondary uppercase tracking-wider mb-2">
              Canales del Proyecto
            </div>
            {channels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id)}
                className={`w-full text-left p-3 rounded-lg mb-1 transition-colors ${
                  selectedChannel === channel.id
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100 text-dashboard-text-secondary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium truncate">
                      {channel.type === "general" && "#"} {channel.name}
                    </div>
                  </div>
                  {channel.unreadCount > 0 && (
                    <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {channel.unreadCount}
                    </div>
                  )}
                </div>
                {channel.lastMessage && (
                  <div className="text-xs text-dashboard-text-secondary mt-1 truncate">
                    {channel.lastMessage.text}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Online Users */}
        <div className="p-3 border-t border-dashboard-border">
          <div className="text-xs font-semibold text-dashboard-text-secondary uppercase tracking-wider mb-2">
            {users.filter((u) => u.isOnline).length} en línea
          </div>
          <div className="space-y-1.5">
            {users.map((user) => (
              <div key={user.id} className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <UserIcon className="w-2.5 h-2.5 text-white" />
                  </div>
                  {user.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-dashboard-text-primary truncate">
                    {user.name}
                  </div>
                  <div className={`text-xs ${getRoleColor(user.role)}`}>
                    {getRoleLabel(user.role)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-dashboard-border bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-dashboard-text-primary">
                {currentChannel?.name}
              </h4>
              <p className="text-sm text-dashboard-text-secondary">
                {currentChannel?.participants.length} participantes
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg">
                <PhoneIcon className="w-4 h-4" />
              </button>
              <button className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg">
                <VideoCameraIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowChannelInfo(!showChannelInfo)}
                className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg"
              >
                <InformationCircleIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => {
            const user = getUserById(message.userId);
            const isCurrentUser = message.userId === currentUser.id;

            return (
              <div
                key={message.id}
                className={`flex ${
                  isCurrentUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] ${
                    isCurrentUser ? "order-2" : "order-1"
                  }`}
                >
                  {!isCurrentUser && (
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <UserIcon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-dashboard-text-primary">
                        {user?.name}
                      </span>
                      <span
                        className={`text-xs ${getRoleColor(user?.role || "")}`}
                      >
                        {getRoleLabel(user?.role || "")}
                      </span>
                      <span className="text-xs text-dashboard-text-secondary">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      isCurrentUser
                        ? "bg-gradient-to-r from-purple-primary to-purple-secondary text-white"
                        : "bg-gray-100 text-dashboard-text-primary"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    {isCurrentUser && (
                      <p className="text-xs text-white/70 mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[70%]">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-xs text-dashboard-text-secondary">
                    Escribiendo...
                  </span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-dashboard-border bg-white">
          <div className="flex items-end space-x-3">
            <button className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg">
              <PaperClipIcon className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Mensaje a ${currentChannel?.name}...`}
                className="w-full bg-gray-50 border border-dashboard-border rounded-xl px-4 py-3 text-dashboard-text-primary placeholder-dashboard-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                disabled={isTyping}
              />
            </div>
            <button className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg">
              <FaceSmileIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectChat;
