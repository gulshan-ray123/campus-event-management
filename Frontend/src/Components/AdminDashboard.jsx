import React, { useState } from 'react';
import { motion } from "framer-motion";
import { CalendarIcon, UserGroupIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

function AdminDashboard() {
  const [student, setStudent] = useState({
    studentId: "",
    name: "",
    branch: "",
    year: "",
    course: "",
    status: "Pending",
  });

  const [submittedStudents, setSubmittedStudents] = useState([]);

  const menuItems = [
    { icon: <CalendarIcon className="h-6 w-6" />, label: "Events" },
    { icon: <UserGroupIcon className="h-6 w-6" />, label: "Participants" },
    { icon: <Cog6ToothIcon className="h-6 w-6" />, label: "Settings" },
  ];

  const cards = [
    { title: "Event Organised", value: "12", color: "bg-blue-500" },
    { title: "Registered Students", value: "340", color: "bg-green-500" },
    { title: "Organizers", value: "15", color: "bg-purple-500" },
  ];

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle approval
  const handleApproval = () => {
    setSubmittedStudents([...submittedStudents, student]);
    alert(`Student ${student.name} (${student.id}) approved with status: ${student.status}`);
    setStudent({ id: "", name: "", branch: "", year: "", course: "", status: "Pending" });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="bg-gray-900 text-white w-64 p-6 hidden md:block"
      >
        <h1 className="text-2xl font-bold mb-8">College Dashboard</h1>
        <ul className="space-y-6">
          {menuItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl shadow-lg ${card.color} text-white`}
            >
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Student Verification Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Student Verification</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="studentId"
              value={student.studentId}
              onChange={handleChange}
              placeholder="Student ID"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="branch"
              value={student.branch}
              onChange={handleChange}
              placeholder="Branch"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="year"
              value={student.year}
              onChange={handleChange}
              placeholder="Year"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              placeholder="Course"
              className="border p-2 rounded"
            />
            <select
              name="status"
              value={student.status}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </form>
          <button
            onClick={handleApproval}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Approval
          </button>
        </div>

        {/* Submitted Students List */}
        <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Submitted Students</h3>
          <ul className="space-y-2">
            {submittedStudents.map((s, i) => (
              <li key={i} className="border p-2 rounded bg-white">
                {s.id} - {s.name} ({s.branch}, {s.year}, {s.course}) → {s.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;