import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { TicketIcon } from "@heroicons/react/24/outline";

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
    return <p className="p-6 text-center">Loading...</p>;

  return (
    <div className="min-h-screen w-full font-sans bg-gray-50 flex flex-col">

      <div
        className="h-64 md:h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${event.eventBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            {event.eventName}
          </h1>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
        <div className="bg-gray-100 rounded-lg p-4 shadow">
          <h2 className="text-lg font-bold mb-2">About</h2>
          <p className="text-sm text-gray-700">
            {event.description || "No description available"}
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 shadow">
          <h2 className="text-lg font-bold mb-2">Details</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>ID:</strong> {event.eventID}</li>
            <li><strong>Date:</strong> {event.eventDate}</li>
            <li><strong>Time:</strong> {event.openTime} – {event.closeTime}</li>
            <li><strong>Venue:</strong> {event.venue}</li>
            <li><strong>Theme:</strong> {event.theme}</li>
          </ul>
        </div>
      </div>

      <div className="relative bg-gray-200 py-8">

        {/* Guests */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Special Guests</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[event.guest_img1, event.guest_img2, event.guest_img3]
              .filter(Boolean)
              .map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Guest ${i + 1}`}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow"
                />
              ))}
          </div>
        </div>
        
        <div className="mt-6 md:absolute md:bottom-6 md:right-8 flex justify-center">
          <NavLink to="/EventRegistration">
            <button className="flex items-center gap-2 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition">
              <TicketIcon className="h-5 w-5" />
              View Details / Register
            </button>
          </NavLink>
        </div>
      </div>

    </div>
  );
}
