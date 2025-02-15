import React from "react";

const services = [
  { name: "Business", icon: "💼", active: false },
  { name: "Checking", icon: "✅", active: false },
  { name: "Credit Cards", icon: "💳", active: true },
  { name: "Savings", icon: "📃", active: false },
  { name: "Home Loans", icon: "🏢", active: false },
  { name: "Commercial", icon: "📈", active: false },
];

export default function Services() {
  return (
    <div className="w-full h-screen max-w-full mx-auto p-16 bg-black text-white">
      <h1 className="text-5xl font-bold">CHOOSE</h1>
      <h2 className="text-5xl font-bold text-gray-400">THE RIGHT</h2>
      <h3 className="text-4xl font-bold text-orange-500">SERVICES</h3>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-orange-500 p-6 relative shadow-lg">
          <p className="text-white text-2xl font-semibold">Check our product services</p>
          <button className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition">
            <span className="text-white text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 rounded-xl shadow-md transition-all duration-300 ${service.active
                  ? "bg-orange-500 text-black font-bold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              <span className="text-4xl">{service.icon}</span>
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-gray-400 max-w-xl">
        No matter how your customers want to pay, we can help you find the right solution for your business.
      </p>
    </div>
  );
}
