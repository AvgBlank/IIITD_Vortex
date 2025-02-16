"use client"
import React from "react";
import Sidebar from "./Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Dashboard() {
  const data = [
    { name: "Jan", totalSpend: 500, amount: 700 },
    { name: "Feb", totalSpend: 400, amount: 600 },
    { name: "Mar", totalSpend: 700, amount: 900 },
  ];

  
  return (
    <div className="flex h-screen mt-16 bg-gray-800">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Hi, Hussain Khorakiwala 👋</h1>
        </header>

        <section className="grid grid-cols-3 gap-4">
          <Card title="Total Active Lender" amount="25" />
          <Card title="Total Active Borrower" amount="30" />
          <Card title="Total Active Loan" amount="20" />
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Activity</h2>
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <BarChart width={600} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalSpend" fill="#8884d8" />
              <Bar dataKey="amount" fill="#82ca9d" />
            </BarChart>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ title, amount }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-xl font-bold">{amount}</p>
    </div>
  );
}
