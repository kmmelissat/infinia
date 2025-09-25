"use client";

import React, { useState } from "react";
import {
  XMarkIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  VideoCameraIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { type TeamMember } from "../../../data/teamData";

interface MeetingSchedulerProps {
  member?: TeamMember | null;
  onClose: () => void;
}

const MeetingScheduler: React.FC<MeetingSchedulerProps> = ({
  member,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    duration: "30",
    type: "video",
    location: "",
    description: "",
    attendees: member ? [member.email] : [],
    priority: "medium",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1000);
  };

  const generateCalendarLink = () => {
    const startDate = new Date(`${formData.date}T${formData.time}`);
    const endDate = new Date(
      startDate.getTime() + parseInt(formData.duration) * 60000
    );

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      formData.title
    )}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${
      endDate.toISOString().replace(/[-:]/g, "").split(".")[0]
    }Z&details=${encodeURIComponent(
      formData.description
    )}&location=${encodeURIComponent(formData.location)}`;

    return googleCalendarUrl;
  };

  const suggestedTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const today = new Date().toISOString().split("T")[0];

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-dashboard-card rounded-lg p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-dashboard-text-primary mb-2">
            ¡Reunión Agendada!
          </h3>
          <p className="text-dashboard-text-secondary mb-4">
            La invitación ha sido enviada a todos los participantes.
          </p>
          <button
            onClick={() => window.open(generateCalendarLink(), "_blank")}
            className="px-4 py-2 bg-purple-primary text-white rounded-lg hover:bg-purple-dark transition-colors"
          >
            Agregar al Calendario
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dashboard-card rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dashboard-border">
          <div>
            <h2 className="text-xl font-semibold text-dashboard-text-primary">
              {member
                ? `Agendar Reunión con ${member.name}`
                : "Agendar Reunión Grupal"}
            </h2>
            {member && (
              <p className="text-sm text-dashboard-text-secondary">
                {member.role} • {member.department}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-dashboard-text-secondary" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Meeting Title */}
          <div>
            <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
              Título de la Reunión *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ej: Revisión de proyecto, Planning sprint..."
              className="w-full px-3 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
              required
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
                Fecha *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={today}
                className="w-full px-3 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
                Hora *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
                required
              >
                <option value="">Seleccionar hora</option>
                {suggestedTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Duration and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
                Duración (minutos)
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
              >
                <option value="15">15 minutos</option>
                <option value="30">30 minutos</option>
                <option value="45">45 minutos</option>
                <option value="60">1 hora</option>
                <option value="90">1.5 horas</option>
                <option value="120">2 horas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
                Prioridad
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
              >
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>
          </div>

          {/* Meeting Type */}
          <div>
            <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
              Tipo de Reunión
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="video"
                  checked={formData.type === "video"}
                  onChange={handleInputChange}
                  className="text-purple-primary focus:ring-purple-primary"
                />
                <VideoCameraIcon className="w-5 h-5 text-dashboard-text-secondary" />
                <span className="text-sm">Videollamada</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="phone"
                  checked={formData.type === "phone"}
                  onChange={handleInputChange}
                  className="text-purple-primary focus:ring-purple-primary"
                />
                <svg
                  className="w-5 h-5 text-dashboard-text-secondary"
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
                <span className="text-sm">Llamada</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="in-person"
                  checked={formData.type === "in-person"}
                  onChange={handleInputChange}
                  className="text-purple-primary focus:ring-purple-primary"
                />
                <MapPinIcon className="w-5 h-5 text-dashboard-text-secondary" />
                <span className="text-sm">Presencial</span>
              </label>
            </div>
          </div>

          {/* Location */}
          {formData.type === "in-person" && (
            <div>
              <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
                Ubicación
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Ej: Sala de juntas A, Oficina principal..."
                className="w-full px-3 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-dashboard-text-primary mb-2">
              Descripción / Agenda
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe el propósito de la reunión, agenda, temas a tratar..."
              className="w-full px-3 py-2 border border-dashboard-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary resize-none"
            />
          </div>

          {/* Member Info (if scheduling with specific member) */}
          {member && (
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-dashboard-text-primary">
                    {member.name}
                  </p>
                  <p className="text-sm text-dashboard-text-secondary">
                    {member.workingHours} ({member.timezone})
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-dashboard-border">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-dashboard-text-secondary hover:text-dashboard-text-primary transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-2 bg-purple-primary hover:bg-purple-dark text-white rounded-lg transition-colors font-medium"
            >
              <PaperAirplaneIcon className="w-4 h-4" />
              <span>Enviar Invitación</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingScheduler;
