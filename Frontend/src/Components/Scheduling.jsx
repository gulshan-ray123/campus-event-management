import React, { useState } from "react";


const Scheduling = () => {
  const [formData, setFormData] = useState({
    eventID: "",
    eventName: "",
    eventDate: "",
    openTime: "",
    closeTime: "",
    venue: "",
    theme: "",
    description: "",
    passType: "general",
    orgDepartment: "",
    totalTicket: "",
    chiefGuest: "",
  });

  const [files, setFiles] = useState({
    eventBanner: null,
    guest_img1: null,
    guest_img2: null,
    guest_img3: null,
  });

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file inputs
  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  // Submit form
const handleSubmit = async (e) => {
  e.preventDefault();

  const fd = new FormData();

  // append text inputs
  Object.keys(formData).forEach((key) => {
    fd.append(key, formData[key]);
  });

  // append files
  Object.keys(files).forEach((key) => {
    if (files[key]) fd.append(key, files[key]);
  });

  const res = await fetch("http://localhost:3000/event/create", {
    method: "POST",
    body: fd,
  });

  const data = await res.json();
  console.log("Response:", data);
  alert("Event Registered sucessfully")
};




  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📅 Scheduling</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Event ID */}
        <label className="block">
          Event ID:
          <input
            type="text"
            className="w-full p-2 rounded border"
            name="eventID"
            value={formData.eventID}
            onChange={handleChange}
          />
        </label>

        {/* Event Name */}
        <label className="block">
          Event Name:
          <input
            type="text"
            className="w-full p-2 rounded border"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
          />
        </label>

        {/* Date */}
        <label className="block">
          Date (IST):
          <input
            type="date"
            className="w-full p-2 rounded border"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
          />
        </label>

        {/* Open Time */}
        <label className="block">
          Open Time (IST):
          <input
            type="time"
            className="w-full p-2 rounded border"
            name="openTime"
            value={formData.openTime}
            onChange={handleChange}
          />
        </label>

        {/* Closing Time */}
        <label className="block">
          Closing Time (IST):
          <input
            type="time"
            className="w-full p-2 rounded border"
            name="closeTime"
            value={formData.closeTime}
            onChange={handleChange}
          />
        </label>

        {/* Venue */}
        <label className="block">
          Venue:
          <input
            type="text"
            className="w-full p-2 rounded border"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
          />
        </label>

        {/* Theme */}
        <label className="block">
          Theme:
          <input
            type="text"
            className="w-full p-2 rounded border"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          />
        </label>

        {/* Description */}
        <label className="block">
          Description:
          <textarea
            className="w-full p-2 rounded border"
            rows="3"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>

        {/* Event Banner Upload */}
        <label className="block">
          Event Banner:
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 rounded border"
            name="eventBanner"
            onChange={handleFileChange}
          />
        </label>

        {/* Guest Images Upload */}
        <label className="block">
          Guest Image 1:
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 rounded border"
            name="guest_img1"
            onChange={handleFileChange}
          />
        </label>
        <label className="block">
          Guest Image 2:
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 rounded border"
            name="guest_img2"
            onChange={handleFileChange}
          />
        </label>
        <label className="block">
          Guest Image 3:
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 rounded border"
            name="guest_img3"
            onChange={handleFileChange}
          />
        </label>

        {/* Pass Type */}
        <label className="block">
          Pass Type:
          <select
            className="w-full p-2 rounded border"
            name="passType"
            value={formData.passType}
            onChange={handleChange}
          >
            <option value="general">General</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </select>
        </label>

        {/* Organising Department */}
        <label className="block">
          Organising Department:
          <input
            type="text"
            className="w-full p-2 rounded border"
            name="orgDepartment"
            value={formData.orgDepartment}
            onChange={handleChange}
          />
        </label>

        {/* Total Tickets */}
        <label className="block">
          Total Tickets Available:
          <input
            type="number"
            className="w-full p-2 rounded border"
            name="totalTicket"
            value={formData.totalTicket}
            onChange={handleChange}
          />
        </label>

        {/* Chief Guest */}
        <label className="block">
          Chief Guest:
          <input
            type="text"
            className="w-full p-2 rounded border"
            name="chiefGuest"
            value={formData.chiefGuest}
            onChange={handleChange}
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Schedule Event
        </button>
      </form>
    </div>
  );
};

export default Scheduling;