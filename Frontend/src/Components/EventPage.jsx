import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  CalendarDaysIcon,
  TicketIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function EventDetails() {
  const { eventID } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`https://campus-event-management-yx4y.onrender.com/event/${eventID}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((err) => console.error("Error fetching event:", err));
  }, [eventID]);

  if (!event)
    return <p className="text-white p-6 text-center">Loading...</p>;

  return (
    <div className="h-screen w-screen font-sans bg-gray-50 flex flex-col">

      <div
        className="flex-1 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${event.eventBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            {event.eventName}
          </h1>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">

        {/* ABOUT SECTION */}
        <div className="bg-gray-100 rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-sm text-gray-700">
            {event.description || "No description available"}
          </p>
        </div>

        {/* EVENT DETAILS */}
        <div className="bg-gray-100 rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Details</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>EventID:</strong> {event.eventID}</li>
            <li><strong>Date:</strong> {event.eventDate}</li>
            <li><strong>Time:</strong> {event.openTime} – {event.closeTime}</li>
            <li><strong>Venue:</strong> {event.venue}</li>
            <li><strong>Theme:</strong> {event.theme}</li>
          </ul>
        </div>

      </div>

      {/* ---------------- BOTTOM GUESTS + REGISTER BUTTON ---------------- */}
      <div className="flex-1 relative bg-gray-200">

        {/* CENTER GUEST IMAGES */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Special Guests</h2>

          <div className="flex space-x-6">
            {event.guest_img1 && (
              <img
                src={event.guest_img1}
                alt="Guest 1"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              />
            )}
            {event.guest_img2 && (
              <img
                src={event.guest_img2}
                alt="Guest 2"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              />
            )}
            {event.guest_img3 && (
              <img
                src={event.guest_img3}
                alt="Guest 3"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              />
            )}
          </div>
        </div>

        {/* REGISTER BUTTON BOTTOM RIGHT */}
        <div className="absolute bottom-6 right-10">
            <NavLink to="/EventRegistration">
      <button className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
        <TicketIcon className="h-5 w-5" />
        View Details / Register
      </button>
    </NavLink>
        </div>
      </div>
    </div>
  );
}
