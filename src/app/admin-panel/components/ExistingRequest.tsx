import React from "react";

export default function ExistingRequest() { 
  const loanRequests = [
    { id: 1, name: "John Doe", amount: "₹5,00,000", status: "Approved" },
    { id: 2, name: "Jane Smith", amount: "₹3,50,000", status: "Pending" },
    { id: 3, name: "Michael Lee", amount: "₹7,20,000", status: "Rejected" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Existing Loan Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loanRequests.map((loan) => (
          <div
            key={loan.id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2">{loan.name}</h2>
            <p className="text-gray-600 mb-2">Loan Amount: {loan.amount}</p>
            <span
              className={`px-3 py-1 rounded-full text-white ${
                loan.status === "Approved"
                  ? "bg-green-500"
                  : loan.status === "Pending"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {loan.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
