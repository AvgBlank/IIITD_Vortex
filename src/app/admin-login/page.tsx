"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const router = useRouter();

  const handleLogin = () => { 
    router.push("/admin-panel");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1430537932/photo/blue-sky-with-white-clouds.webp?b=1&s=612x612&w=0&k=20&c=gZFaGFFkJ4q568dUxR6XsgJuL87H9ckY4qh0YlDThPM=')",
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-white text-2xl font-semibold mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />
        <button
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-white text-sm mt-3 cursor-pointer">Forgot password?</p>
      </div>
    </div>
  );
};

export default AdminLogin;