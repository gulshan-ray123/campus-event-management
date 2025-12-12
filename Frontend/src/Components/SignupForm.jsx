// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
// const SignupForm = () => {
//   const navigate= useNavigate();
//  const [user,setUser]=useState({
//   username:"",
//   email:"",
//   phone: 0,
//   password:"",
//   dob:"",
//   role:""
//  });

//  const handleSignup=(e)=>{
//   let name=e.target.name;
//   let value= e.target.value;
//  console.log(e);
 
//   setUser({
//     ...user,
//     [name]:value,
//   })
//  }

//  const handleSubmit=async(e)=>{
//   e.preventDefault();
//   try {
//       const response= await fetch(`http://localhost:3000/register`,{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify(user),
    
//   });
//   if(response.ok){
//     navigate("/Login");
//   }
//   console.log(response);
    
//   } catch (error) {
//     console.log(error);
    
//   }
  
//   alert("Form submitted");
//  }
//   return (
//    <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mx-auto mt-2 space-y-5"
//     >
//       <h2 className="text-2xl font-bold text-center text-orange-600">Login to Online Bhandara</h2>
//       <h4 className='text-center'>Create Username</h4>
//       <input
//         type="text"
//         placeholder="xyz_123"
//         value={user.username}
//         onChange={handleSignup}
//         name="username"
//         required
//         className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//       />

//       <h4 className='text-center'>Enter Email Address</h4>
//       <input
//         type="email"
//         placeholder="xyz@gmail.com"
//         value={user.email}
//         onChange={handleSignup}
//         required
//         name="email"
//         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//       />

//   <h4 className='text-center'>Enter Phone No.</h4>
//       <input
//         type="number"
//         placeholder="+91 921456987"
//         value={user.phone}
//         onChange={handleSignup}
//         required
//         name="phone"
//         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//       />

//   <h4 className='text-center'>Create Password</h4>
//       <input
//         type="password"
//         placeholder="password@1345"
//         value={user.password}
//         onChange={handleSignup}
//         required
//         name="password"
//         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//       />

//   <h4 className='text-center'>Enter Date OF Birth</h4>
//       <input
//         type="date"
//         placeholder="Date of Birth"
//         value={user.dob}
//         onChange={handleSignup}
//         required
//         name="dob"
//         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//       />

//       <div>
//             <label className="block text-gray-700 font-medium">Department *</label>
//             <select
//               name="role"
//               value={user.role}
//               onChange={handleSignup}
//               className="w-full p-2 border rounded-lg"
//               required
//             >
//               <option value="">Select Role</option>
//               <option value=" Attendee"> Attendee</option>
//               <option value="Organiser">Organiser</option>
//             </select>
//           </div>


//       <button
//         type="submit"
//         className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition duration-200"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default SignupForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
    role: "",
    collegeId: ""   // new field added
  });

  const handleSignup = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        navigate("/Login");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    alert("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mx-auto mt-2 space-y-5"
    >
      <h2 className="text-2xl font-bold text-center text-orange-600">
        Register to Online Bhandara
      </h2>

      <h4 className="text-center">Create Username</h4>
      <input
        type="text"
        placeholder="xyz_123"
        value={user.username}
        onChange={handleSignup}
        name="username"
        required
        className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <h4 className="text-center">Enter Email Address</h4>
      <input
        type="email"
        placeholder="xyz@gmail.com"
        value={user.email}
        onChange={handleSignup}
        required
        name="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <h4 className="text-center">Enter Phone No.</h4>
      <input
        type="number"
        placeholder="+91 921456987"
        value={user.phone}
        onChange={handleSignup}
        required
        name="phone"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <h4 className="text-center">Create Password</h4>
      <input
        type="password"
        placeholder="password@1345"
        value={user.password}
        onChange={handleSignup}
        required
        name="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <h4 className="text-center">Enter Date OF Birth</h4>
      <input
        type="date"
        placeholder="Date of Birth"
        value={user.dob}
        onChange={handleSignup}
        required
        name="dob"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <div>
        <label className="block text-gray-700 font-medium">Department *</label>
        <select
          name="role"
          value={user.role}
          onChange={handleSignup}
          className="w-full p-2 border rounded-lg"
          required
        >
          <option value="">Select Role</option>
          <option value="Attendee">Attendee</option>
          <option value="Organiser">Organiser</option>
        </select>
      </div>

      {/* Conditionally render College ID field */}
      {user.role === "Organiser" && (
        <div>
          <h4 className="text-center">Enter College ID</h4>
          <input
            type="text"
            placeholder="College ID"
            value={user.collegeId}
            onChange={handleSignup}
            name="collegeId"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};

export default SignupForm;