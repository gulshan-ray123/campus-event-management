import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CombinedLogin = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("user"); // toggle between user/organiser

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    collegeId: "",
    secretKey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      mode === "user"
        ? "https://campus-event-management-yx4y.onrender.com/login"
        : "https://campus-event-management-yx4y.onrender.com/organiser-login";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const res_data = await response.json();


     
   mode === 'user'
  ? localStorage.setItem("token", res_data.token)
  : (localStorage.setItem("organiserToken", res_data.organiserToken),
     console.log("Organiser Token Hit"));
      console.log(res_data.organiserToken);
      console.log(mode);
      
      
      navigate(mode === "user" ? "/Dashboard" : "/OrganiserDashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      {/* Toggle */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setMode("user")}
          className={`px-4 py-2 rounded-l-md ${
            mode === "user" ? "bg-orange-600 text-white" : "bg-gray-200"
          }`}
        >
          User Login
        </button>
        <button
          onClick={() => setMode("organiser")}
          className={`px-4 py-2 rounded-r-md ${
            mode === "organiser" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Organiser Login
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 space-y-5">
        <h2 className="text-2xl font-bold text-center">
          {mode === "user" ? "Login to Campus Connect" : "Organiser Login"}
        </h2>

        {/* Common fields */}
        <input
          type="text"
          placeholder="xyz@gmail.com"
          value={formData.identifier}
          name="identifier"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="password"
          placeholder="password@123"
          value={formData.password}
          name="password"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* Extra fields for organiser */}
        {mode === "organiser" && (
          <>
            <input
              type="text"
              placeholder="College ID"
              value={formData.collegeId}
              name="collegeId"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Secret Key"
              value={formData.secretKey}
              name="secretKey"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </>
        )}

        <button
          type="submit"
          className={`w-full py-2 rounded-md ${
            mode === "user" ? "bg-orange-600 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {mode === "user" ? "Login as User" : "Login as Organiser"}
        </button>
      </form>
    </div>
  );
};

export default CombinedLogin;