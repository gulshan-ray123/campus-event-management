import React from "react";

const Reports =()=> {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📊 Reports</h2>
      <form className="space-y-4">
        <label className="block">
          Select Event:
          <select className="w-full p-2 rounded border">
            <option>Tech Fest</option>
            <option>Cultural Night</option>
          </select>
        </label>
        <label className="block">
          Report Type:
          <select className="w-full p-2 rounded border">
            <option>Attendance</option>
            <option>Feedback</option>
            <option>Finance</option>
          </select>
        </label>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Generate Report</button>
      </form>
    </div>
  );
}
export default Reports;