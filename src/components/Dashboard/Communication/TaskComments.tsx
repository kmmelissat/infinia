"use client";

import React, { useState } from "react";
import {
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  UserIcon,
  HeartIcon,
  HandThumbUpIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  HandThumbUpIcon as ThumbUpSolidIcon,
} from "@heroicons/react/24/solid";

interface User {
  id: string;
  name: string;
  role: "client" | "team" | "pm" | "admin";
  avatar?: string;
}

interface Comment {
  id: string;
  text: string;
  userId: string;
  timestamp: Date;
  parentId?: string; // For replies
  reactions: { type: "like" | "love"; userId: string }[];
  isEdited?: boolean;
  attachments?: { name: string; url: string; type: string }[];
}

interface TaskCommentsProps {
  taskId: string;
  taskTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const TaskComments: React.FC<TaskCommentsProps> = ({
  taskId,
  taskTitle,
  isOpen,
  onClose,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  // Mock data
  const currentUser: User = {
    id: "user-1",
    name: "Carlos Mendoza (GameShop)",
    role: "client",
  };

  const users: User[] = [
    currentUser,
    {
      id: "user-2",
      name: "Ana García",
      role: "pm",
    },
    {
      id: "user-3",
      name: "Carlos López",
      role: "team",
    },
    {
      id: "user-4",
      name: "María Rodríguez",
      role: "team",
    },
  ];

  // Mock comments for demonstration
  React.useEffect(() => {
    const mockComments: Comment[] = [
      {
        id: "comment-1",
        text: "Me encanta el progreso del sistema de autenticación! ¿Podríamos agregar login social con Steam y Discord para los gamers?",
        userId: "user-1",
        timestamp: new Date(Date.now() - 7200000),
        reactions: [
          { type: "like", userId: "user-2" },
          { type: "like", userId: "user-3" },
        ],
      },
      {
        id: "comment-2",
        text: "¡Excelente idea Carlos! Steam y Discord son perfectos para GameShop. Voy a investigar sus APIs y te comparto la documentación.",
        userId: "user-2",
        timestamp: new Date(Date.now() - 5400000),
        parentId: "comment-1",
        reactions: [{ type: "love", userId: "user-1" }],
      },
      {
        id: "comment-3",
        text: "El sistema base ya está listo con JWT. También agregué verificación por email. ¿Quieren que haga una demo del flujo completo?",
        userId: "user-3",
        timestamp: new Date(Date.now() - 3600000),
        reactions: [
          { type: "like", userId: "user-1" },
          { type: "like", userId: "user-2" },
          { type: "love", userId: "user-4" },
        ],
      },
      {
        id: "comment-4",
        text: "¡Perfecto! Programemos la demo para mañana. Quiero ver cómo queda la experiencia de registro para los gamers.",
        userId: "user-1",
        timestamp: new Date(Date.now() - 1800000),
        parentId: "comment-3",
        reactions: [{ type: "like", userId: "user-2" }],
      },
    ];
    setComments(mockComments);
  }, [taskId]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      text: newComment,
      userId: currentUser.id,
      timestamp: new Date(),
      parentId: replyingTo || undefined,
      reactions: [],
    };

    setComments((prev) => [...prev, comment]);
    setNewComment("");
    setReplyingTo(null);
  };

  const handleReaction = (commentId: string, type: "like" | "love") => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          const existingReaction = comment.reactions.find(
            (r) => r.userId === currentUser.id && r.type === type
          );

          if (existingReaction) {
            // Remove reaction
            return {
              ...comment,
              reactions: comment.reactions.filter(
                (r) => !(r.userId === currentUser.id && r.type === type)
              ),
            };
          } else {
            // Add reaction (remove other reactions from same user first)
            const filteredReactions = comment.reactions.filter(
              (r) => r.userId !== currentUser.id
            );
            return {
              ...comment,
              reactions: [
                ...filteredReactions,
                { type, userId: currentUser.id },
              ],
            };
          }
        }
        return comment;
      })
    );
  };

  const handleEditComment = (commentId: string) => {
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      setEditingComment(commentId);
      setEditText(comment.text);
    }
  };

  const handleSaveEdit = () => {
    if (!editText.trim()) return;

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === editingComment
          ? { ...comment, text: editText, isEdited: true }
          : comment
      )
    );
    setEditingComment(null);
    setEditText("");
  };

  const handleDeleteComment = (commentId: string) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
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

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) {
      return "Hace unos minutos";
    } else if (diffInHours < 24) {
      return `Hace ${diffInHours} hora${diffInHours > 1 ? "s" : ""}`;
    } else {
      return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const getReactionCount = (
    reactions: Comment["reactions"],
    type: "like" | "love"
  ) => {
    return reactions.filter((r) => r.type === type).length;
  };

  const hasUserReacted = (
    reactions: Comment["reactions"],
    type: "like" | "love"
  ) => {
    return reactions.some(
      (r) => r.userId === currentUser.id && r.type === type
    );
  };

  const topLevelComments = comments.filter((c) => !c.parentId);
  const getReplies = (commentId: string) =>
    comments.filter((c) => c.parentId === commentId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-dashboard-text-primary flex items-center">
                <ChatBubbleLeftIcon className="w-6 h-6 mr-3 text-purple-primary" />
                Comentarios de Tarea
              </h3>
              <p className="text-dashboard-text-secondary mt-1">{taskTitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-dashboard-text-secondary hover:text-dashboard-text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {topLevelComments.length === 0 ? (
            <div className="text-center py-12">
              <ChatBubbleLeftIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-dashboard-text-secondary">
                No hay comentarios aún. ¡Sé el primero en comentar!
              </p>
            </div>
          ) : (
            topLevelComments.map((comment) => {
              const user = getUserById(comment.userId);
              const replies = getReplies(comment.id);

              return (
                <div key={comment.id} className="space-y-4">
                  {/* Main Comment */}
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <UserIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-dashboard-text-primary">
                          {user?.name}
                        </span>
                        <span
                          className={`text-sm ${getRoleColor(
                            user?.role || ""
                          )}`}
                        >
                          {getRoleLabel(user?.role || "")}
                        </span>
                        <span className="text-sm text-dashboard-text-secondary">
                          {formatTime(comment.timestamp)}
                        </span>
                        {comment.isEdited && (
                          <span className="text-xs text-dashboard-text-secondary italic">
                            (editado)
                          </span>
                        )}
                      </div>

                      {editingComment === comment.id ? (
                        <div className="space-y-3">
                          <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full p-3 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary resize-none"
                            rows={3}
                          />
                          <div className="flex space-x-2">
                            <button
                              onClick={handleSaveEdit}
                              className="px-4 py-2 bg-purple-primary text-white text-sm rounded-lg hover:bg-purple-secondary transition-colors"
                            >
                              Guardar
                            </button>
                            <button
                              onClick={() => setEditingComment(null)}
                              className="px-4 py-2 bg-gray-200 text-dashboard-text-secondary text-sm rounded-lg hover:bg-gray-300 transition-colors"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-dashboard-text-primary leading-relaxed mb-3">
                            {comment.text}
                          </p>

                          {/* Actions */}
                          <div className="flex items-center space-x-4">
                            {/* Reactions */}
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() =>
                                  handleReaction(comment.id, "like")
                                }
                                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm transition-colors ${
                                  hasUserReacted(comment.reactions, "like")
                                    ? "bg-blue-100 text-blue-600"
                                    : "hover:bg-gray-100 text-dashboard-text-secondary"
                                }`}
                              >
                                {hasUserReacted(comment.reactions, "like") ? (
                                  <ThumbUpSolidIcon className="w-4 h-4" />
                                ) : (
                                  <HandThumbUpIcon className="w-4 h-4" />
                                )}
                                <span>
                                  {getReactionCount(comment.reactions, "like")}
                                </span>
                              </button>

                              <button
                                onClick={() =>
                                  handleReaction(comment.id, "love")
                                }
                                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm transition-colors ${
                                  hasUserReacted(comment.reactions, "love")
                                    ? "bg-red-100 text-red-600"
                                    : "hover:bg-gray-100 text-dashboard-text-secondary"
                                }`}
                              >
                                {hasUserReacted(comment.reactions, "love") ? (
                                  <HeartSolidIcon className="w-4 h-4" />
                                ) : (
                                  <HeartIcon className="w-4 h-4" />
                                )}
                                <span>
                                  {getReactionCount(comment.reactions, "love")}
                                </span>
                              </button>
                            </div>

                            <button
                              onClick={() => setReplyingTo(comment.id)}
                              className="text-sm text-dashboard-text-secondary hover:text-purple-primary transition-colors"
                            >
                              Responder
                            </button>

                            {comment.userId === currentUser.id && (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleEditComment(comment.id)}
                                  className="text-sm text-dashboard-text-secondary hover:text-purple-primary transition-colors"
                                >
                                  <PencilIcon className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteComment(comment.id)
                                  }
                                  className="text-sm text-dashboard-text-secondary hover:text-red-500 transition-colors"
                                >
                                  <TrashIcon className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Replies */}
                  {replies.length > 0 && (
                    <div className="ml-14 space-y-4 border-l-2 border-gray-100 pl-6">
                      {replies.map((reply) => {
                        const replyUser = getUserById(reply.userId);
                        return (
                          <div key={reply.id} className="flex space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                                <UserIcon className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-medium text-dashboard-text-primary text-sm">
                                  {replyUser?.name}
                                </span>
                                <span
                                  className={`text-xs ${getRoleColor(
                                    replyUser?.role || ""
                                  )}`}
                                >
                                  {getRoleLabel(replyUser?.role || "")}
                                </span>
                                <span className="text-xs text-dashboard-text-secondary">
                                  {formatTime(reply.timestamp)}
                                </span>
                              </div>
                              <p className="text-dashboard-text-primary text-sm leading-relaxed mb-2">
                                {reply.text}
                              </p>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() =>
                                    handleReaction(reply.id, "like")
                                  }
                                  className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs transition-colors ${
                                    hasUserReacted(reply.reactions, "like")
                                      ? "bg-blue-100 text-blue-600"
                                      : "hover:bg-gray-100 text-dashboard-text-secondary"
                                  }`}
                                >
                                  {hasUserReacted(reply.reactions, "like") ? (
                                    <ThumbUpSolidIcon className="w-3 h-3" />
                                  ) : (
                                    <HandThumbUpIcon className="w-3 h-3" />
                                  )}
                                  <span>
                                    {getReactionCount(reply.reactions, "like")}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Reply Input */}
                  {replyingTo === comment.id && (
                    <div className="ml-14 pl-6 border-l-2 border-gray-100">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                            <UserIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Escribe tu respuesta..."
                            className="w-full p-3 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary resize-none"
                            rows={2}
                          />
                          <div className="flex justify-end space-x-2 mt-2">
                            <button
                              onClick={() => setReplyingTo(null)}
                              className="px-3 py-1 text-sm text-dashboard-text-secondary hover:text-dashboard-text-primary transition-colors"
                            >
                              Cancelar
                            </button>
                            <button
                              onClick={handleAddComment}
                              disabled={!newComment.trim()}
                              className="px-4 py-2 bg-purple-primary text-white text-sm rounded-lg hover:bg-purple-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              Responder
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* New Comment Input */}
        {!replyingTo && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Añade un comentario..."
                  className="w-full p-4 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary resize-none"
                  rows={3}
                />
                <div className="flex justify-end mt-3">
                  <button
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    className="flex items-center space-x-2 px-6 py-2 bg-purple-primary text-white rounded-lg hover:bg-purple-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <PaperAirplaneIcon className="w-4 h-4" />
                    <span>Comentar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskComments;
