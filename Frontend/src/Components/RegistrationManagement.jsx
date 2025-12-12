import React from "react";

const RegistrationManagement=()=> {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📝 Registration Management</h2>
      <form className="space-y-4">
        <label className="block">
          Search Participant:
          <input type="text" placeholder="Enter name or ID" className="w-full p-2 rounded border" />
        </label>
        <button className="bg-orange-600 text-white px-4 py-2 rounded">Search</button>
      </form>
      <div className="mt-6">
        <h3 className="font-semibold">Registered Participants</h3>
        <ul className="list-disc pl-6">
          <li>John Doe - Tech Fest</li>
          <li>Jane Smith - Cultural Night</li>
        </ul>
      </div>
    </div>
  );
}

export default RegistrationManagement;