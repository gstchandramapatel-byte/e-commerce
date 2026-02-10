"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { title: "Total Users", value: "1,234", change: "+12%", icon: "👥" },
    { title: "Revenue", value: "₹45,678", change: "+8%", icon: "💰" },
    { title: "Orders", value: "567", change: "+23%", icon: "📦" },
    { title: "Products", value: "89", change: "+5%", icon: "🛍️" },
  ];

  const recentOrders = [
    {
      id: "#1234",
      customer: "Rahul Sharma",
      amount: "₹1,250",
      status: "Completed",
    },
    {
      id: "#1235",
      customer: "Priya Patel",
      amount: "₹2,340",
      status: "Pending",
    },
    {
      id: "#1236",
      customer: "Amit Kumar",
      amount: "₹890",
      status: "Processing",
    },
    {
      id: "#1237",
      customer: "Sneha Singh",
      amount: "₹3,450",
      status: "Completed",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-gray-800 text-white transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className={`text-xl font-bold ${!sidebarOpen && "hidden"}`}>
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-gray-700 p-2 rounded"
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav className="mt-8">
          <a
            href="#"
            className="flex items-center px-4 py-3 bg-gray-900 border-l-4 border-blue-500"
          >
            <span className="text-xl">📊</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>
              Dashboard
            </span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <span className="text-xl">👥</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Users</span>
          </a>
          <a href="/order" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <span className="text-xl">📦</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Orders</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <span className="text-xl">🛍️</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Products</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <span className="text-xl">⚙️</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Settings</span>
          </a>
          <a href="/adminlogin" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <span className="text-xl">🚪</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Logout</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center gap-4">
              <button className="relative">
                <span className="text-2xl">🔔</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <span className="font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{stat.icon}</span>
                  <span className="text-green-500 text-sm font-semibold">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Orders
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
