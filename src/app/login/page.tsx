"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [role, setRole] = useState("lender");

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/background.webp')",
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-white text-2xl font-semibold mb-4">
          Login as {role}
        </h2>
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
          Get Started
        </button>
        <p className="text-white text-sm mt-3 cursor-pointer">
          Forgot password?
        </p>
        <p className="text-white text-sm mt-3 cursor-pointer">
          Already have an account? Sign in{" "}
          <Link className="text-blue-600" href="/signup">
            here
          </Link>
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="bg-white p-2 rounded-full">
            <Image
              src="/google_logo.webp"
              alt="Google"
              className="h-6"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

