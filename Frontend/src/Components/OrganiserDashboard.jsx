// src/components/OrganizerDashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ChartBarIcon,
  CurrencyRupeeIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    id: 1,
    title: "Reports",
    description: "View analytics on attendance, feedback, and event performance.",
    icon: ChartBarIcon,
    color: "from-blue-500 to-indigo-500",
    link:'/Reports'
  },
  {
    id: 2,
    title: "Finance",
    description: "Track expenses, sponsorships, and fee collections.",
    icon: CurrencyRupeeIcon,
    color: "from-green-500 to-emerald-500",
    link:'/finance'
  },
  {
    id: 3,
    title: "Scheduling",
    description: "Manage event dates, venues, and avoid clashes.",
    icon: CalendarDaysIcon,
    color: "from-purple-500 to-pink-500",
    link:'/Scheduling'
  },
  {
    id: 4,
    title: "Event Creation & Management",
    description: "Add new events, edit details, and upload promotional material.",
    icon: PlusCircleIcon,
    color: "from-teal-500 to-cyan-500",
    link:'/RegistrationManagement'
  },
];

export default function OrganizerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          🏢 Organizer Dashboard
        </h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Logout
        </button>
      </header>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl shadow-lg p-6 bg-gradient-to-r ${feature.color} text-white flex flex-col justify-between`}
          >
            <div className="flex items-center gap-3">
              <feature.icon className="h-8 w-8" />
              <h2 className="text-lg font-semibold">{feature.title}</h2>
            </div>
            <p className="mt-3 text-sm">{feature.description}</p>
           <NavLink to={feature.link}> <button className="mt-4 bg-white text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200 transition">
              Open
            </button></NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
}