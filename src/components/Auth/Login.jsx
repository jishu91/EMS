import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-emerald-100">
      <div className="bg-white w-[360px] rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Login to your dashboard
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-5">
          Employee Management System
        </p>
      </div>
    </div>
  );
};

export default Login;
