 "use client";

import React, { useState } from "react";

const Signup = () => {
  const [role, setRole] = useState("lender");

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1430537932/photo/blue-sky-with-white-clouds.webp?b=1&s=612x612&w=0&k=20&c=gZFaGFFkJ4q568dUxR6XsgJuL87H9ckY4qh0YlDThPM=')",
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-white text-2xl font-semibold mb-4">Sign up as {role}</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 rounded-lg text-white transition ${
              role === "lender" ? "bg-blue-500" : "bg-gray-600"
            }`}
            onClick={() => setRole("lender")}
          >
            Lender
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg text-white transition ${
              role === "borrower" ? "bg-blue-500" : "bg-gray-600"
            }`}
            onClick={() => setRole("borrower")}
          >
            Borrower
          </button>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />
        <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition">
          Sign Up
        </button>
        <p className="text-white text-sm mt-3 cursor-pointer">Already have an account? Sign in</p>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="bg-white p-2 rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="Google" className="h-6" />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
