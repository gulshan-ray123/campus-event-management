import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] flex flex-col items-center justify-center px-4">
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 rounded-md font-medium ${
            isLogin ? 'bg-orange-600 text-white' : 'bg-white text-orange-600 border border-orange-600'
          } mt-2`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 rounded-md font-medium ${
            !isLogin ? 'bg-orange-600 text-white' : 'bg-white text-orange-600 border border-orange-600'
          } mt-2`}
        >
          Sign Up
        </button>
      </div>

      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthPage;