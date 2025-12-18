// // src/components/EventRegistration.jsx
// import React, { useState } from "react";
// const EventRegistration=()=> {
//   const [formData, setFormData] = useState({
//     studentId: "",
//     name: "",
//     email: "",
//     password:"",
//     department: "",
//     year: "",
//     eventID: "",
//   });

//   const handleRegistration=(e)=>{
//     let value= e.target.value;
//     let name= e.target.name;

//     setFormData({
//         ...formData,
//         [name]:value
//     })
//   }

//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//   }

 
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           🎉 Event Registration
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Student ID */}
//           <div>
//             <label className="block text-gray-700 font-medium">Student ID *</label>
//             <input
//               type="text"
//               name="studentId"
//               value={formData.studentId}
//               onChange={handleRegistration}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>

//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 font-medium">Full Name *</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleRegistration}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium">College Email *</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleRegistration}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>

//            {/* password */}
//           <div>
//             <label className="block text-gray-700 font-medium">College Password *</label>
//             <input
//               type="text"
//               name="password"
//               value={formData.password}
//               onChange={handleRegistration}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>

//           {/* Department */}
//           <div>
//             <label className="block text-gray-700 font-medium">Department *</label>
//             <select
//               name="department"
//               value={formData.department}
//               onChange={handleRegistration}
//               className="w-full p-2 border rounded-lg"
//               required
//             >
//               <option value="">Select Department</option>
//               <option value="CSE">CSE</option>
//               <option value="ECE">ECE</option>
//               <option value="ME">ME</option>
//               <option value="CE">CE</option>
//             </select>
//           </div>

//           {/* Year */}
//           <div>
//             <label className="block text-gray-700 font-medium">Year *</label>
//             <select
//               name="year"
//               value={formData.year}
//               onChange={handleRegistration}
//               className="w-full p-2 border rounded-lg"
//               required
//             >
//               <option value="">Select Year</option>
//               <option value="1st">1st Year</option>
//               <option value="2nd">2nd Year</option>
//               <option value="3rd">3rd Year</option>
//               <option value="4th">4th Year</option>
//             </select>
//           </div>

//           {/* Event */}
//          <div>
//             <label className="block text-gray-700 font-medium">Event ID *</label>
//             <input
//               type="text"
//               name="eventID"
//               value={formData.eventID}
//               onChange={handleRegistration}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EventRegistration;


// src/components/EventRegistration.jsx
import React, { useState } from "react";

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    password: "",
    department: "",
    year: "",
    eventID: "",
  });

  const handleRegistration = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ✅ COMPLETE FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "https://campus-event-management-yx4y.onrender.com/student/eventRegistration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("🎉 Event Registered Successfully!");
        console.log(data);

        // optional: reset form
        setFormData({
          studentId: "",
          name: "",
          email: "",
          password: "",
          department: "",
          year: "",
          eventID: "",
        });
      } else {
        alert(data.msg || "Registration failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🎉 Event Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Student ID *</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleRegistration}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleRegistration}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">College Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleRegistration}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              College Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleRegistration}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Department *</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleRegistration}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Department</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Year *</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleRegistration}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Event ID *</label>
            <input
              type="text"
              name="eventID"
              value={formData.eventID}
              onChange={handleRegistration}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistration;
