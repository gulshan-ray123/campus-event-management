// import React from "react";
// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import {
//   CalendarDaysIcon,
//   TicketIcon,
//   BellIcon,
// } from "@heroicons/react/24/outline";

// const events = [
//   {
//     id: 1,
//     title: "Tech Fest 2025",
//     date: "Nov 28, 2025",
//     location: "Auditorium Hall",
//     description: "A showcase of coding, robotics, and AI projects.",
//     chiefGuest: "Dr. A.P. Sharma",
//     theme: "Innovation in Technology",
//     startTime: "10:00 AM",
//     endTime: "05:00 PM",
//   },
//   {
//     id: 2,
//     title: "Cultural Night",
//     date: "Dec 5, 2025",
//     location: "Open Air Theatre",
//     description: "Dance, music, and drama performances by students.",
//     chiefGuest: "Dr. A.P. Sharma",
//     theme: "Innovation in Technology",
//     startTime: "06:00 PM",
//     endTime: "10:00 PM",
//   },
//   {
//     id: 3,
//     title: "Sports Meet",
//     date: "Dec 10, 2025",
//     location: "College Ground",
//     description: "Inter-departmental sports competitions.",
//     chiefGuest: "Mr. Rajeev Kumar",
//     theme: "Strength & Spirit",
//     startTime: "09:00 AM",
//     endTime: "04:00 PM",
//   },
// ];

// export default function StudentEventDashboard() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       {/* Header */}
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl md:text-3xl font-bold text-white">
//           🎓 Student Event Dashboard
//         </h1>
//         <button className="relative">
//           <BellIcon className="h-7 w-7 text-white" />
//           <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
//             3
//           </span>
//         </button>
//       </header>

//       {/* Event Cards */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {events.map((event) => (
//   <motion.div
//     key={event.id}
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.4 }}
//     whileHover={{ scale: 1.05 }}
//     className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between"
//   >
//     {/* Title + Description */}
//     <div>
//       <h2 className="text-lg font-semibold text-gray-800">
//         {event.title}
//       </h2>
//       <p className="text-sm text-gray-500 mt-1">{event.description}</p>
//     </div>

//     {/* Date + Location */}
//     <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
//       <span className="flex items-center gap-1">
//         <CalendarDaysIcon className="h-5 w-5 text-indigo-500" />
//         {event.date}
//       </span>
//       <span>{event.location}</span>
//     </div>

//     {/* ✅ Extra Fields */}
//     <div className="mt-3 text-sm text-gray-700 space-y-1">
//       <p><span className="font-semibold">Start Time:</span> {event.startTime}</p>
//       <p><span className="font-semibold">End Time:</span> {event.endTime}</p>
//       <p><span className="font-semibold">Chief Guest:</span> {event.chiefGuest}</p>
//       <p><span className="font-semibold">Theme:</span> {event.theme}</p>
//     </div>

//     {/* Register Button */}
//    <NavLink to={`/event/${event.id}`}>
//   <button className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
//     <TicketIcon className="h-5 w-5" />
//     View Details / Register
//   </button>
// </NavLink>
//   </motion.div>
// ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  CalendarDaysIcon,
  TicketIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function StudentEventDashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from backend
  useEffect(() => {
    fetch("https://campus-event-management-yx4y.onrender.com/event/all")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-white p-6">Loading Events...</h2>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">

      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          🎓 Student Event Dashboard
        </h1>

        <button className="relative">
          <BellIcon className="h-7 w-7 text-white" />
          <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
            3
          </span>
        </button>
      </header>

      {/* Event Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
  <motion.div
    key={event.eventID}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between"
  >
    {/* Title */}
    <div>
      <h2 className="text-lg font-semibold text-gray-800">
        {event.eventName}
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        {event.description}
      </p>
    </div>

    {/* Date + Location */}
    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
      <span className="flex items-center gap-1">
        <CalendarDaysIcon className="h-5 w-5 text-indigo-500" />
        {event.eventDate}
      </span>
      <span>{event.venue}</span>
    </div>

    {/* Extra Fields */}
    <div className="mt-3 text-sm text-gray-700 space-y-1">
      <p><span className="font-semibold">Start Time:</span> {event.openTime}</p>
      <p><span className="font-semibold">End Time:</span> {event.closeTime}</p>
      <p><span className="font-semibold">Chief Guest:</span> {event.chiefGuest}</p>
      <p><span className="font-semibold">Theme:</span> {event.theme}</p>
    </div>

    {/* View Details */}
    <NavLink to={`/event/${event.eventID}`}>
      <button className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
        <TicketIcon className="h-5 w-5" />
        View Details / Register
      </button>
    </NavLink>
  </motion.div>
))}
      </div>
    </div>
  );
}
