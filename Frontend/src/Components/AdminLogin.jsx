import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminAuth() {
  const navigate= useNavigate();
  const[admin, setAdmin]= useState({
      emp_id:"",
      email:"",
      password:""
  });

  const handleRegistration=(e)=>{

    let name= e.target.name;
    let value= e.target.value;

    setAdmin({
      ...admin,
      [name]:value,
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const response= await fetch(`http://localhost:3000/admin/login`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(admin),
    });
    console.log(response);

    if(response.ok){
      const res_data= await response.json();

      // setting token in local storage

      localStorage.setItem('adminToken', res_data.adminToken);

      console.log(res_data.adminToken);
      

      navigate('/AdminDashboard')
    }
    alert("Login Succesfully")
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        </h2>

        
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                EmployeeID
              </label>
              <input
                type="text"
                name="emp_id"
                value={admin.emp_id}
                onChange={handleRegistration}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter College Pin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee Email
              </label>
              <input
                type="text"
                name="email"
                value={admin.email}
                onChange={handleRegistration}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={admin.password}
                onChange={handleRegistration}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
      </div>
    </div>
  );
}

export default AdminAuth;