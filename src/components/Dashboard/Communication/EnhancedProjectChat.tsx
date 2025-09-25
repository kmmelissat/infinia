"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
  EllipsisHorizontalIcon,
  PlusIcon,
  HashtagIcon,
  LockClosedIcon,
  BoltIcon,
  DocumentTextIcon,
  PhotoIcon,
  CodeBracketIcon,
  LinkIcon,
  CalendarIcon,
  ClockIcon,
  CheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  StarIcon,
  ArrowUturnLeftIcon,
  SunIcon,
  MoonIcon,
  MicrophoneIcon,
  ComputerDesktopIcon,
  BookmarkIcon,
  EyeIcon,
  EyeSlashIcon,
  BellIcon,
  BellSlashIcon,
  LanguageIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  HandThumbUpIcon as ThumbUpSolidIcon,
  StarIcon as StarSolidIcon,
  MapPinIcon as PinIcon,
} from "@heroicons/react/24/solid";
import { getAllChatUsers, gameStationUsers } from "../../../data/teamData";

interface User {
  id: string;
  name: string;
  role: "client" | "team" | "pm" | "admin";
  avatar?: string;
  isOnline: boolean;
  status?: "available" | "busy" | "away" | "dnd";
  lastSeen?: Date;
}

interface Reaction {
  emoji: string;
  users: string[];
  count: number;
}

interface Attachment {
  id: string;
  name: string;
  url: string;
  type: "image" | "document" | "code" | "link";
  size?: number;
  preview?: string;
}

interface Message {
  id: string;
  text: string;
  userId: string;
  timestamp: Date;
  type: "text" | "file" | "system" | "task" | "code" | "link";
  status: "sending" | "sent" | "delivered" | "read";
  replyTo?: string;
  reactions: Reaction[];
  attachments?: Attachment[];
  mentions?: string[];
  isEdited?: boolean;
  isPinned?: boolean;
  threadCount?: number;
  metadata?: {
    taskId?: string;
    commitHash?: string;
    prNumber?: string;
    linkPreview?: {
      title: string;
      description: string;
      image?: string;
      url: string;
    };
  };
}

interface Channel {
  id: string;
  name: string;
  type: "general" | "task" | "private" | "temporary";
  participants: string[];
  unreadCount: number;
  lastMessage?: Message;
  isPinned?: boolean;
  isArchived?: boolean;
  createdAt: Date;
  expiresAt?: Date; // For temporary channels
  description?: string;
}

interface ChatSettings {
  theme: "light" | "dark" | "auto";
  notifications: boolean;
  sounds: boolean;
  compactMode: boolean;
  showAvatars: boolean;
  autoTranslate: boolean;
  language: string;
}

const EnhancedProjectChat = () => {
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [showChannelInfo, setShowChannelInfo] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [editingMessage, setEditingMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [settings, setSettings] = useState<ChatSettings>({
    theme: "light",
    notifications: true,
    sounds: true,
    compactMode: false,
    showAvatars: true,
    autoTranslate: false,
    language: "es",
  });
  const [showVoiceRecorder, setShowVoiceRecorder] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showScreenShare, setShowScreenShare] = useState(false);
  const [pinnedMessages, setPinnedMessages] = useState<Message[]>([]);
  const [showPinnedMessages, setShowPinnedMessages] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock data with enhanced features
  // Get all users from shared data
  const allUsers = getAllChatUsers();
  const currentUser = gameStationUsers[0]; // Carlos Mendoza (CEO)
  const users = allUsers;

  const channels: Channel[] = [
    {
      id: "general",
      name: "GameShop - General",
      type: "general",
      participants: users.map((u) => u.id),
      unreadCount: 0,
      isPinned: true,
      createdAt: new Date(Date.now() - 86400000 * 7),
      description:
        "Canal principal para comunicación general del proyecto GameShop",
    },
    {
      id: "task-gs001",
      name: "GS-001: Autenticación",
      type: "task",
      participants: ["user-1", "user-2", "user-3"],
      unreadCount: 2,
      createdAt: new Date(Date.now() - 86400000 * 3),
      description: "Discusión sobre el sistema de autenticación y login social",
    },
    {
      id: "task-gs002",
      name: "GS-002: Catálogo",
      type: "task",
      participants: ["user-1", "user-2", "user-3"],
      unreadCount: 1,
      createdAt: new Date(Date.now() - 86400000 * 2),
      description: "Desarrollo del catálogo de videojuegos con filtros",
    },
    {
      id: "task-gs003",
      name: "GS-003: Carrito & Checkout",
      type: "task",
      participants: ["user-1", "user-2", "user-4"],
      unreadCount: 0,
      createdAt: new Date(Date.now() - 86400000),
      description:
        "Implementación del carrito de compras y proceso de checkout",
    },
    {
      id: "sprint-4-temp",
      name: "Sprint 4 - Daily",
      type: "temporary",
      participants: users.map((u) => u.id),
      unreadCount: 0,
      createdAt: new Date(Date.now() - 86400000 * 14),
      expiresAt: new Date(Date.now() + 86400000 * 7),
      description:
        "Canal temporal para el Sprint 4 - se archiva automáticamente",
    },
    {
      id: "private-pm",
      name: "Privado - Carlos & Ana",
      type: "private",
      participants: ["gamestation-ceo", "infinia-1"],
      unreadCount: 1,
      createdAt: new Date(Date.now() - 86400000 * 5),
      description: "Conversación privada entre CEO y PM",
    },
  ];

  // Enhanced mock messages with all new features
  const mockMessages: { [key: string]: Message[] } = {
    general: [
      {
        id: "msg-1",
        text: "¡Bienvenidos al desarrollo del ecommerce GameShop! 🎮 Estoy emocionado de trabajar con @ana en este proyecto increíble.",
        userId: "gamestation-ceo",
        timestamp: new Date(Date.now() - 3600000),
        type: "text",
        status: "read",
        reactions: [
          { emoji: "🎉", users: ["infinia-1", "infinia-2"], count: 2 },
          { emoji: "🚀", users: ["infinia-1"], count: 1 },
        ],
        mentions: ["infinia-1"],
        isPinned: true,
      },
      {
        id: "msg-2",
        text: "¡Gracias Carlos! El equipo está súper motivado. Aquí tienes el mockup inicial del catálogo:",
        userId: "infinia-1",
        timestamp: new Date(Date.now() - 3000000),
        type: "file",
        status: "read",
        attachments: [
          {
            id: "att-1",
            name: "gameshop-catalog-mockup.png",
            url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300",
            type: "image",
            size: 245760,
            preview:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300",
          },
        ],
        reactions: [{ emoji: "👍", users: ["user-1", "user-3"], count: 2 }],
      },
      {
        id: "msg-3",
        text: "Perfecto! Me encanta el diseño. ¿Cómo van los filtros por género y plataforma? También, ¿ya integramos la API de Steam?",
        userId: "gamestation-ceo",
        timestamp: new Date(Date.now() - 1800000),
        type: "text",
        status: "read",
        threadCount: 3,
      },
      {
        id: "msg-4",
        text: "```javascript\n// Implementación de filtros avanzados\nconst filterGames = (games, filters) => {\n  return games.filter(game => {\n    return filters.genre.includes(game.genre) &&\n           filters.platform.includes(game.platform) &&\n           game.price >= filters.minPrice &&\n           game.price <= filters.maxPrice;\n  });\n};\n```",
        userId: "infinia-2",
        timestamp: new Date(Date.now() - 1200000),
        type: "code",
        status: "read",
        replyTo: "msg-3",
        reactions: [{ emoji: "💻", users: ["user-1", "user-2"], count: 2 }],
      },
      {
        id: "msg-5",
        text: "Increíble trabajo Carlos! 🔥 El código se ve muy limpio. ¿Podemos hacer una demo mañana a las 10 AM?",
        userId: "gamestation-ceo",
        timestamp: new Date(Date.now() - 600000),
        type: "text",
        status: "delivered",
        metadata: {
          linkPreview: {
            title: "GameShop Demo Schedule",
            description: "Reunión para revisar el progreso del catálogo",
            url: "https://meet.google.com/demo-gameshop",
          },
        },
      },
    ],
    "task-gs001": [
      {
        id: "msg-6",
        text: "El sistema de autenticación está listo! ✅ Incluye:\n• Login/registro tradicional\n• Autenticación con Steam\n• Autenticación con Discord\n• Recuperación de contraseña\n• Verificación por email",
        userId: "infinia-2",
        timestamp: new Date(Date.now() - 900000),
        type: "task",
        status: "read",
        metadata: {
          taskId: "GS-001",
        },
        reactions: [
          { emoji: "🎉", users: ["user-1", "user-2"], count: 2 },
          { emoji: "🔥", users: ["user-1"], count: 1 },
        ],
      },
      {
        id: "msg-7",
        text: "¡Increíble Carlos! 🚀 ¿Ya podemos probar el registro de usuarios gamers? Me gustaría ver cómo queda la integración con Steam.",
        userId: "gamestation-ceo",
        timestamp: new Date(Date.now() - 600000),
        type: "text",
        status: "read",
        mentions: ["user-3"],
      },
    ],
  };

  // Emojis disponibles
  const availableEmojis = [
    "👍",
    "👎",
    "❤️",
    "😂",
    "😮",
    "😢",
    "😡",
    "🎉",
    "🚀",
    "🔥",
    "💯",
    "👏",
    "🙌",
    "💪",
    "🤝",
    "👀",
    "🤔",
    "💡",
    "⚡",
    "✨",
    "🎮",
    "💻",
    "📱",
    "🖥️",
    "⌨️",
    "🖱️",
    "📊",
    "📈",
    "📉",
    "💰",
  ];

  // Slash commands
  const slashCommands = [
    {
      command: "/task",
      description: "Crear nueva tarea",
      usage: "/task [título] [descripción]",
    },
    {
      command: "/remind",
      description: "Crear recordatorio",
      usage: "/remind [tiempo] [mensaje]",
    },
    {
      command: "/demo",
      description: "Programar demo",
      usage: "/demo [fecha] [hora]",
    },
    {
      command: "/github",
      description: "Compartir commit/PR",
      usage: "/github [url]",
    },
    {
      command: "/status",
      description: "Actualizar estado",
      usage: "/status [mensaje]",
    },
  ];

  useEffect(() => {
    setMessages(mockMessages[selectedChannel] || []);
    // Update pinned messages when channel changes
    const channelMessages = mockMessages[selectedChannel] || [];
    setPinnedMessages(channelMessages.filter((msg) => msg.isPinned));
  }, [selectedChannel]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedChannel]);

  // Simulate typing users for demo
  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      if (randomUser.id !== currentUser.id && Math.random() > 0.8) {
        setTypingUsers((prev) => {
          if (!prev.includes(randomUser.id)) {
            return [...prev, randomUser.id];
          }
          return prev;
        });

        // Remove typing indicator after 3 seconds
        setTimeout(() => {
          setTypingUsers((prev) => prev.filter((id) => id !== randomUser.id));
        }, 3000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [users, currentUser.id]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setShowSearch(!showSearch);
      }
      // Escape to close modals
      if (e.key === "Escape") {
        setShowEmojiPicker(false);
        setShowChannelInfo(false);
        setReplyingTo(null);
        setEditingMessage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showSearch]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Voice recording functions
  const startVoiceRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      setShowVoiceRecorder(true);
      // Here you would implement actual recording logic
      console.log("Voice recording started");
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopVoiceRecording = () => {
    setIsRecording(false);
    setShowVoiceRecorder(false);
    // Here you would stop recording and process the audio
    console.log("Voice recording stopped");
  };

  // Screen sharing function
  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setShowScreenShare(true);
      console.log("Screen sharing started");
      // Here you would implement screen sharing logic
    } catch (error) {
      console.error("Error starting screen share:", error);
    }
  };

  // Pin/unpin message function
  const togglePinMessage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isPinned: !msg.isPinned } : msg
      )
    );
  };

  // Advanced search function
  const searchMessages = (query: string) => {
    if (!query.trim()) return messages;

    return messages.filter(
      (message) =>
        message.text.toLowerCase().includes(query.toLowerCase()) ||
        message.mentions?.some((mention) =>
          getUserById(mention)?.name.toLowerCase().includes(query.toLowerCase())
        ) ||
        message.attachments?.some((att) =>
          att.name.toLowerCase().includes(query.toLowerCase())
        )
    );
  };

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;

    // Check for slash commands
    if (inputValue.startsWith("/")) {
      handleSlashCommand(inputValue);
      return;
    }

    // Check for mentions
    const mentions =
      inputValue.match(/@(\w+)/g)?.map((m) => m.substring(1)) || [];

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      text: inputValue,
      userId: currentUser.id,
      timestamp: new Date(),
      type: "text",
      status: "sending",
      reactions: [],
      mentions,
      replyTo: replyingTo?.id,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setReplyingTo(null);

    // Simulate message status updates
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "sent" } : msg
        )
      );
    }, 500);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg
        )
      );
    }, 1000);

    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      const responses = [
        "Perfecto Carlos, voy a revisar esa funcionalidad del ecommerce.",
        "Excelente idea para GameShop, lo implementamos así.",
        "Voy a trabajar en esa feature y te actualizo el progreso.",
        "¿Podrías especificar más sobre esa funcionalidad del catálogo?",
        "El ecommerce va tomando forma, excelente progreso! 🚀",
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
          status: "sent",
          reactions: [],
        };
        setMessages((prev) => [...prev, responseMessage]);
      }
      setIsTyping(false);
    }, 2000);
  }, [inputValue, replyingTo, currentUser.id, users]);

  const handleSlashCommand = (command: string) => {
    const [cmd, ...args] = command.split(" ");

    switch (cmd) {
      case "/task":
        // Create task logic
        const taskMessage: Message = {
          id: `msg-${Date.now()}`,
          text: `📋 Nueva tarea creada: ${args.join(" ")}`,
          userId: currentUser.id,
          timestamp: new Date(),
          type: "task",
          status: "sent",
          reactions: [],
          metadata: {
            taskId: `GS-${Math.floor(Math.random() * 1000)}`,
          },
        };
        setMessages((prev) => [...prev, taskMessage]);
        break;

      case "/remind":
        // Create reminder logic
        const reminderMessage: Message = {
          id: `msg-${Date.now()}`,
          text: `⏰ Recordatorio programado: ${args.join(" ")}`,
          userId: currentUser.id,
          timestamp: new Date(),
          type: "system",
          status: "sent",
          reactions: [],
        };
        setMessages((prev) => [...prev, reminderMessage]);
        break;

      default:
        // Unknown command
        const errorMessage: Message = {
          id: `msg-${Date.now()}`,
          text: `❌ Comando desconocido: ${cmd}. Comandos disponibles: /task, /remind, /demo, /github, /status`,
          userId: "system",
          timestamp: new Date(),
          type: "system",
          status: "sent",
          reactions: [],
        };
        setMessages((prev) => [...prev, errorMessage]);
    }

    setInputValue("");
  };

  const handleReaction = (messageId: string, emoji: string) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === messageId) {
          const reactions = message.reactions || [];
          const existingReaction = reactions.find((r) => r.emoji === emoji);

          if (existingReaction) {
            if (existingReaction.users.includes(currentUser.id)) {
              // Remove reaction
              return {
                ...message,
                reactions: reactions
                  .map((r) =>
                    r.emoji === emoji
                      ? {
                          ...r,
                          users: r.users.filter((u) => u !== currentUser.id),
                          count: r.count - 1,
                        }
                      : r
                  )
                  .filter((r) => r.count > 0),
              };
            } else {
              // Add reaction
              return {
                ...message,
                reactions: reactions.map((r) =>
                  r.emoji === emoji
                    ? {
                        ...r,
                        users: [...r.users, currentUser.id],
                        count: r.count + 1,
                      }
                    : r
                ),
              };
            }
          } else {
            // New reaction
            return {
              ...message,
              reactions: [
                ...reactions,
                { emoji, users: [currentUser.id], count: 1 },
              ],
            };
          }
        }
        return message;
      })
    );
  };

  const handleFileUpload = (files: FileList) => {
    Array.from(files).forEach((file) => {
      const attachment: Attachment = {
        id: `att-${Date.now()}-${Math.random()}`,
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type.startsWith("image/") ? "image" : "document",
        size: file.size,
      };

      const fileMessage: Message = {
        id: `msg-${Date.now()}-${Math.random()}`,
        text: `📎 ${file.name}`,
        userId: currentUser.id,
        timestamp: new Date(),
        type: "file",
        status: "sending",
        reactions: [],
        attachments: [attachment],
      };

      setMessages((prev) => [...prev, fileMessage]);
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const togglePin = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isPinned: !msg.isPinned } : msg
      )
    );
  };

  const getUserById = (userId: string) => {
    if (userId === "system") {
      return {
        id: "system",
        name: "Sistema",
        role: "admin" as const,
        isOnline: true,
      };
    }
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

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "away":
        return "bg-yellow-500";
      case "dnd":
        return "bg-gray-500";
      default:
        return "bg-gray-300";
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const currentChannel = channels.find((c) => c.id === selectedChannel);

  return (
    <div
      className={`bg-dashboard-card rounded-2xl shadow-sm border border-dashboard-border overflow-hidden h-[calc(100vh-160px)] flex ${
        dragOver ? "ring-2 ring-purple-primary ring-opacity-50" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Channels Sidebar */}
      <div className="w-72 bg-gray-50 border-r border-dashboard-border flex flex-col">
        {/* Header with Search */}
        <div className="p-3 border-b border-dashboard-border">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">🎮</span>
              </div>
              <span className="font-semibold text-dashboard-text-primary">
                GameShop
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    theme: prev.theme === "light" ? "dark" : "light",
                  }))
                }
                className="p-1 text-dashboard-text-secondary hover:text-dashboard-text-primary rounded"
                title="Cambiar tema"
              >
                {settings.theme === "light" ? (
                  <MoonIcon className="w-4 h-4" />
                ) : (
                  <SunIcon className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-1 text-dashboard-text-secondary hover:text-dashboard-text-primary rounded"
                title="Buscar (Ctrl+K)"
              >
                <MagnifyingGlassIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {showSearch && (
            <div className="bg-gray-50 border-b border-dashboard-border p-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar mensajes, archivos, usuarios... (Ctrl+K)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 text-sm border border-dashboard-border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent bg-white"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                )}
              </div>

              {searchQuery && (
                <div className="mt-3">
                  <div className="text-xs font-medium text-dashboard-text-secondary mb-2">
                    Resultados para "{searchQuery}"
                  </div>
                  <div className="max-h-40 overflow-y-auto space-y-1">
                    {searchMessages(searchQuery)
                      .slice(0, 5)
                      .map((message) => {
                        const user = getUserById(message.userId);
                        return (
                          <div
                            key={message.id}
                            className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                            onClick={() => {
                              // Scroll to message logic would go here
                              setSearchQuery("");
                              setShowSearch(false);
                            }}
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs font-medium text-dashboard-text-primary">
                                {user?.name}
                              </span>
                              <span className="text-xs text-dashboard-text-secondary">
                                {message.timestamp.toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm text-dashboard-text-secondary line-clamp-2">
                              {message.text}
                            </p>
                          </div>
                        );
                      })}
                    {searchMessages(searchQuery).length === 0 && (
                      <div className="text-sm text-dashboard-text-secondary text-center py-4">
                        No se encontraron resultados
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pinned Messages */}
        {pinnedMessages.length > 0 && (
          <div className="p-3 border-b border-dashboard-border bg-yellow-50">
            <div className="text-xs font-semibold text-dashboard-text-secondary uppercase tracking-wider mb-2 flex items-center">
              <PinIcon className="w-3 h-3 mr-1" />
              Mensajes Fijados
            </div>
            <div className="space-y-1">
              {pinnedMessages.slice(0, 2).map((msg) => (
                <div
                  key={msg.id}
                  className="text-xs text-dashboard-text-primary truncate"
                >
                  {msg.text.substring(0, 50)}...
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Channels List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-dashboard-text-secondary uppercase tracking-wider">
                Canales del Proyecto
              </div>
              <button className="text-dashboard-text-secondary hover:text-purple-primary">
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>

            {channels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id)}
                className={`w-full text-left p-2 rounded-lg mb-1 transition-colors group ${
                  selectedChannel === channel.id
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100 text-dashboard-text-secondary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      {channel.type === "general" && (
                        <HashtagIcon className="w-4 h-4" />
                      )}
                      {channel.type === "task" && (
                        <DocumentTextIcon className="w-4 h-4" />
                      )}
                      {channel.type === "private" && (
                        <LockClosedIcon className="w-4 h-4" />
                      )}
                      {channel.type === "temporary" && (
                        <ClockIcon className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-sm font-medium truncate">
                      {channel.name}
                    </span>
                    {channel.isPinned && (
                      <StarSolidIcon className="w-3 h-3 text-yellow-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    {channel.unreadCount > 0 && (
                      <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {channel.unreadCount}
                      </div>
                    )}
                    {channel.type === "temporary" && channel.expiresAt && (
                      <div className="text-xs text-orange-500">
                        {Math.ceil(
                          (channel.expiresAt.getTime() - Date.now()) /
                            (1000 * 60 * 60 * 24)
                        )}
                        d
                      </div>
                    )}
                  </div>
                </div>
                {channel.description && (
                  <div className="text-xs text-dashboard-text-secondary mt-1 truncate">
                    {channel.description}
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
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                      <UserIcon className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-white ${getStatusColor(
                      user.status
                    )}`}
                  ></div>
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
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {currentChannel?.type === "general" && (
                  <HashtagIcon className="w-5 h-5 text-dashboard-text-secondary" />
                )}
                {currentChannel?.type === "task" && (
                  <DocumentTextIcon className="w-5 h-5 text-dashboard-text-secondary" />
                )}
                {currentChannel?.type === "private" && (
                  <LockClosedIcon className="w-5 h-5 text-dashboard-text-secondary" />
                )}
                {currentChannel?.type === "temporary" && (
                  <ClockIcon className="w-5 h-5 text-dashboard-text-secondary" />
                )}
              </div>
              <div>
                <h4 className="font-semibold text-dashboard-text-primary">
                  {currentChannel?.name}
                </h4>
                <p className="text-sm text-dashboard-text-secondary">
                  {currentChannel?.participants.length} participantes
                  {currentChannel?.description &&
                    ` • ${currentChannel.description}`}
                </p>
              </div>
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
                title="Información del canal"
              >
                <InformationCircleIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg"
                title="Buscar mensajes (Ctrl+K)"
              >
                <MagnifyingGlassIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Pinned Messages Bar */}
        {pinnedMessages.length > 0 && (
          <div className="bg-yellow-50 border-b border-yellow-200 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookmarkIcon className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">
                  {pinnedMessages.length} mensaje
                  {pinnedMessages.length !== 1 ? "s" : ""} fijado
                  {pinnedMessages.length !== 1 ? "s" : ""}
                </span>
              </div>
              <button
                onClick={() => setShowPinnedMessages(!showPinnedMessages)}
                className="text-yellow-600 hover:text-yellow-800 transition-colors"
                title={
                  showPinnedMessages
                    ? "Ocultar mensajes fijados"
                    : "Ver mensajes fijados"
                }
              >
                {showPinnedMessages ? (
                  <EyeSlashIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </button>
            </div>

            {showPinnedMessages && (
              <div className="mt-3 space-y-2">
                {pinnedMessages.slice(0, 3).map((message) => {
                  const user = getUserById(message.userId);
                  return (
                    <div
                      key={message.id}
                      className="bg-white rounded-lg p-2 border border-yellow-200"
                    >
                      <div className="flex items-start space-x-2">
                        {user?.avatar && (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium text-dashboard-text-primary">
                              {user?.name}
                            </span>
                            <span className="text-xs text-dashboard-text-secondary">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          <p className="text-sm text-dashboard-text-primary truncate">
                            {message.text}
                          </p>
                        </div>
                        <button
                          onClick={() => togglePinMessage(message.id)}
                          className="text-yellow-600 hover:text-yellow-800 transition-colors"
                          title="Desfijar mensaje"
                        >
                          <PinIcon className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
                {pinnedMessages.length > 3 && (
                  <div className="text-xs text-yellow-700 text-center">
                    y {pinnedMessages.length - 3} más...
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => {
            const user = getUserById(message.userId);
            const isCurrentUser = message.userId === currentUser.id;
            const showAvatar =
              settings.showAvatars &&
              (!settings.compactMode ||
                index === 0 ||
                messages[index - 1].userId !== message.userId);
            const isReply = !!message.replyTo;
            const repliedMessage = isReply
              ? messages.find((m) => m.id === message.replyTo)
              : null;

            return (
              <div
                key={message.id}
                className={`group ${settings.compactMode ? "py-1" : "py-2"}`}
              >
                {/* Reply indicator */}
                {isReply && repliedMessage && (
                  <div className="ml-12 mb-2 p-2 bg-gray-50 rounded-lg border-l-4 border-purple-primary">
                    <div className="flex items-center space-x-2 mb-1">
                      <ArrowUturnLeftIcon className="w-3 h-3 text-purple-primary" />
                      <span className="text-xs font-medium text-purple-primary">
                        Respondiendo a{" "}
                        {getUserById(repliedMessage.userId)?.name}
                      </span>
                    </div>
                    <p className="text-xs text-dashboard-text-secondary truncate">
                      {repliedMessage.text}
                    </p>
                  </div>
                )}

                <div
                  className={`flex ${
                    isCurrentUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] ${
                      isCurrentUser ? "order-2" : "order-1"
                    }`}
                  >
                    {/* Message header */}
                    {showAvatar && !isCurrentUser && (
                      <div className="flex items-center space-x-2 mb-1">
                        {user?.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                            <UserIcon className="w-3 h-3 text-white" />
                          </div>
                        )}
                        <span className="text-sm font-medium text-dashboard-text-primary">
                          {user?.name}
                        </span>
                        <span
                          className={`text-xs ${getRoleColor(
                            user?.role || ""
                          )}`}
                        >
                          {getRoleLabel(user?.role || "")}
                        </span>
                        <span className="text-xs text-dashboard-text-secondary">
                          {formatTime(message.timestamp)}
                        </span>
                        {message.isEdited && (
                          <span className="text-xs text-dashboard-text-secondary italic">
                            (editado)
                          </span>
                        )}
                      </div>
                    )}

                    {/* Message content */}
                    <div
                      className={`rounded-2xl px-4 py-3 relative group/message ${
                        isCurrentUser
                          ? "bg-gradient-to-r from-purple-primary to-purple-secondary text-white"
                          : message.type === "system"
                          ? "bg-yellow-50 border border-yellow-200 text-yellow-800"
                          : message.type === "task"
                          ? "bg-blue-50 border border-blue-200 text-blue-800"
                          : "bg-gray-100 text-dashboard-text-primary"
                      }`}
                    >
                      {/* Message actions */}
                      <div className="absolute -top-2 right-2 opacity-0 group-hover/message:opacity-100 transition-opacity">
                        <div className="flex items-center space-x-1 bg-white shadow-lg rounded-lg p-1">
                          <button
                            onClick={() => handleReaction(message.id, "👍")}
                            className="p-1 hover:bg-gray-100 rounded text-xs"
                          >
                            👍
                          </button>
                          <button
                            onClick={() => handleReaction(message.id, "❤️")}
                            className="p-1 hover:bg-gray-100 rounded text-xs"
                          >
                            ❤️
                          </button>
                          <button
                            onClick={() => setReplyingTo(message)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <ArrowUturnLeftIcon className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => togglePinMessage(message.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                            title={
                              message.isPinned
                                ? "Desfijar mensaje"
                                : "Fijar mensaje"
                            }
                          >
                            <PinIcon
                              className={`w-3 h-3 ${
                                message.isPinned ? "text-yellow-500" : ""
                              }`}
                            />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <EllipsisHorizontalIcon className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Pinned indicator */}
                      {message.isPinned && (
                        <div className="absolute -top-1 -left-1">
                          <PinIcon className="w-4 h-4 text-yellow-500" />
                        </div>
                      )}

                      {/* Message text */}
                      {message.type === "code" ? (
                        <pre className="text-sm leading-relaxed whitespace-pre-wrap bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
                          <code>{message.text}</code>
                        </pre>
                      ) : (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.text}
                        </p>
                      )}

                      {/* Attachments */}
                      {message.attachments &&
                        message.attachments.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {message.attachments.map((attachment) => (
                              <div
                                key={attachment.id}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                              >
                                {attachment.type === "image" ? (
                                  <img
                                    src={attachment.url}
                                    alt={attachment.name}
                                    className="w-full max-w-sm rounded-lg"
                                  />
                                ) : (
                                  <div className="p-3 bg-white flex items-center space-x-3">
                                    <DocumentTextIcon className="w-8 h-8 text-gray-400" />
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium text-gray-900 truncate">
                                        {attachment.name}
                                      </p>
                                      {attachment.size && (
                                        <p className="text-xs text-gray-500">
                                          {formatFileSize(attachment.size)}
                                        </p>
                                      )}
                                    </div>
                                    <button className="text-purple-primary hover:text-purple-secondary">
                                      <LinkIcon className="w-4 h-4" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                      {/* Link preview */}
                      {message.metadata?.linkPreview && (
                        <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden bg-white">
                          <div className="p-3">
                            <h4 className="font-medium text-gray-900 text-sm">
                              {message.metadata.linkPreview.title}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {message.metadata.linkPreview.description}
                            </p>
                            <a
                              href={message.metadata.linkPreview.url}
                              className="text-xs text-purple-primary hover:underline mt-1 inline-block"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {message.metadata.linkPreview.url}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Message status for current user */}
                      {isCurrentUser && (
                        <div className="flex items-center justify-end mt-2 space-x-1">
                          <span className="text-xs text-white/70">
                            {formatTime(message.timestamp)}
                          </span>
                          <div className="flex items-center">
                            {message.status === "sending" && (
                              <ClockIcon className="w-3 h-3 text-white/70" />
                            )}
                            {message.status === "sent" && (
                              <CheckIcon className="w-3 h-3 text-white/70" />
                            )}
                            {message.status === "delivered" && (
                              <div className="flex">
                                <CheckIcon className="w-3 h-3 text-white/70" />
                                <CheckIcon className="w-3 h-3 text-white/70 -ml-1" />
                              </div>
                            )}
                            {message.status === "read" && (
                              <CheckCircleIcon className="w-3 h-3 text-green-300" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Reactions */}
                    {message.reactions && message.reactions.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {message.reactions.map((reaction, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleReaction(message.id, reaction.emoji)
                            }
                            className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs transition-colors ${
                              reaction.users.includes(currentUser.id)
                                ? "bg-purple-100 text-purple-700 border border-purple-200"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            <span>{reaction.emoji}</span>
                            <span>{reaction.count}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Thread indicator */}
                    {message.threadCount && message.threadCount > 0 && (
                      <button className="text-xs text-purple-primary hover:underline mt-1">
                        {message.threadCount} respuesta
                        {message.threadCount > 1 ? "s" : ""}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing indicator */}
          {(isTyping || typingUsers.length > 0) && (
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

        {/* Reply indicator */}
        {replyingTo && (
          <div className="px-4 py-2 bg-purple-50 border-t border-purple-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ArrowUturnLeftIcon className="w-4 h-4 text-purple-primary" />
                <span className="text-sm text-purple-primary">
                  Respondiendo a {getUserById(replyingTo.userId)?.name}
                </span>
                <span className="text-sm text-gray-600 truncate max-w-xs">
                  {replyingTo.text}
                </span>
              </div>
              <button
                onClick={() => setReplyingTo(null)}
                className="text-purple-primary hover:text-purple-secondary"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Typing Indicator */}
        {typingUsers.length > 0 && (
          <div className="px-4 py-2 border-t border-dashboard-border bg-gray-50">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-primary rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-purple-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <span className="text-sm text-dashboard-text-secondary">
                {typingUsers.length === 1
                  ? `${getUserById(typingUsers[0])?.name} está escribiendo...`
                  : typingUsers.length === 2
                  ? `${getUserById(typingUsers[0])?.name} y ${
                      getUserById(typingUsers[1])?.name
                    } están escribiendo...`
                  : `${typingUsers.length} personas están escribiendo...`}
              </span>
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="p-4 border-t border-dashboard-border bg-white">
          {/* Slash commands suggestion */}
          {inputValue.startsWith("/") && (
            <div className="mb-2 p-2 bg-gray-50 rounded-lg">
              <div className="text-xs font-semibold text-gray-600 mb-1">
                Comandos disponibles:
              </div>
              <div className="space-y-1">
                {slashCommands
                  .filter((cmd) =>
                    cmd.command.startsWith(inputValue.split(" ")[0])
                  )
                  .map((cmd) => (
                    <div key={cmd.command} className="text-xs">
                      <span className="font-mono text-purple-primary">
                        {cmd.command}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {cmd.description}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="flex items-end space-x-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) =>
                e.target.files && handleFileUpload(e.target.files)
              }
              multiple
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg"
              title="Adjuntar archivo"
            >
              <PaperClipIcon className="w-5 h-5" />
            </button>

            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder={`Mensaje a ${currentChannel?.name}... (/ para comandos)`}
                className="w-full bg-gray-50 border border-dashboard-border rounded-xl px-4 py-3 text-dashboard-text-primary placeholder-dashboard-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent resize-none min-h-[44px] max-h-32"
                rows={1}
                style={{ height: "auto" }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = target.scrollHeight + "px";
                }}
              />
            </div>

            <div className="flex items-center space-x-2">
              {/* Voice Recording Button */}
              <button
                onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isRecording
                    ? "bg-red-500 text-white animate-pulse"
                    : "text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100"
                }`}
                title={
                  isRecording ? "Detener grabación" : "Grabar mensaje de voz"
                }
              >
                <MicrophoneIcon className="w-5 h-5" />
              </button>

              {/* Screen Share Button */}
              <button
                onClick={startScreenShare}
                className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg"
                title="Compartir pantalla"
              >
                <ComputerDesktopIcon className="w-5 h-5" />
              </button>

              {/* Emoji Button */}
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="p-2 text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-gray-100 rounded-lg"
                title="Emojis"
              >
                <FaceSmileIcon className="w-5 h-5" />
              </button>

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                title="Enviar (Enter)"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute bottom-20 right-4 bg-white border border-dashboard-border rounded-2xl shadow-2xl p-4 z-50">
              <div className="grid grid-cols-8 gap-2 max-w-xs">
                {availableEmojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      setInputValue((prev) => prev + emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg text-lg"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Drag overlay */}
      {dragOver && (
        <div className="absolute inset-0 bg-purple-primary bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-dashed border-purple-primary">
            <div className="text-center">
              <PhotoIcon className="w-16 h-16 text-purple-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-purple-primary">
                Suelta los archivos aquí
              </p>
              <p className="text-sm text-gray-600">
                Imágenes, documentos y más
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedProjectChat;
