"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, FormEvent } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import checkAuthLender from "@/components/lib/lender/is-authenticated";
import checkAuthBorrower from "@/components/lib/borrower/is-authenticated";

interface RegisterFormData {
  name: string;
  email: string;
  pass: string;
}

const Signup = () => {
  const [role, setRole] = useState("lender");
  const [details, setDetails] = useState<RegisterFormData>({
    name: "",
    email: "",
    pass: "",
  });
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [notyf, setNotyf] = useState<Notyf | null>(null);

  useEffect(() => {
    setNotyf(new Notyf());
  }, []);

  useEffect(() => {
    checkAuthLender().then((isAuthenticated) => {
      if (isAuthenticated[0 as keyof typeof isAuthenticated]) {
        window.location.href = "/admin-panel";
      }
    });
    checkAuthBorrower().then((isAuthenticated) => {
      if (isAuthenticated[0 as keyof typeof isAuthenticated]) {
        window.location.href = "/admin-panel";
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin fill-black dark:fill-white"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"></path>
        </svg>
      </div>
    );
  }

  const validations = (key: keyof RegisterFormData) => {
    const errors = {
      name: () => {
        if (!details.name) return "Please enter a valid name";
        if (/[0-9\p{P}]/u.test(details.name))
          return "Please enter a valid name";
        return "";
      },
      email: () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
          return "Please enter a valid email";
        return "";
      },
      pass: () => {
        if (details.pass.includes(" ")) return "Password cannot contain spaces";
        if (details.pass.length < 7)
          return "Password must be at least 8 characters long";
        return "";
      },
    };
    return errors[key];
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const key of Object.keys(details)) {
      const errorMsg = validations(key as keyof RegisterFormData)();

      if (errorMsg && notyf) {
        notyf.error(errorMsg);
        return;
      }
    }

    try {
      const response = await fetch(`/api/auth/${role}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: details.name,
          email: details.email,
          password: details.pass,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        if (notyf) {
          notyf.error(data.error || "Registration failed");
        }
        return;
      }

      window.location.href = "/admin-panel";
    } catch {
      if (notyf) {
        notyf.error("Network error. Please try again.");
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.webp')",
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-white text-2xl font-semibold mb-4">
          Sign up as {role}
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            onBlur={() => {
              const errorMsg = validations("name")();
              if (errorMsg && notyf) {
                notyf.error(errorMsg);
              }
            }}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            onBlur={() => {
              const errorMsg = validations("email")();
              if (errorMsg && notyf) {
                notyf.error(errorMsg);
              }
            }}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 mb-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            onChange={(e) => setDetails({ ...details, pass: e.target.value })}
            onBlur={() => {
              setShowPassword(false);
              const errorMsg = validations("pass")();
              if (errorMsg && notyf) {
                notyf.error(errorMsg);
              }
            }}
          />
          <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition">
            Sign Up
          </button>
        </form>
        <p className="text-white text-sm mt-3 cursor-pointer">
          Already have an account? Sign in{" "}
          <Link className="text-blue-600" href="/login">
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

export default Signup;
