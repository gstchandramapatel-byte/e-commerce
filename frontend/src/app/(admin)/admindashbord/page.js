// src/app/(admin)/admindashboard/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { getAllUsers, deleteUser } from "../../lib/api";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, logoutUser, loading: authLoading } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (authLoading) return;

    if (!user) {
      console.log("No user found, redirecting to login...");
      router.push("/login");
      return;
    }

    console.log("User authenticated:", user);
    fetchUsers();
  }, [mounted, authLoading, user]);

  const fetchUsers = async () => {
    try {
      console.log("Fetching users...");
      const response = await getAllUsers();
      if (response.success) {
        console.log("Users fetched:", response.data.length);
        setAllUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId, userEmail) => {
    if (
      confirm(
        `Are you sure you want to delete this user?\n\nEmail: ${userEmail}`,
      )
    ) {
      try {
        const response = await deleteUser(userId);
        if (response.success) {
          alert("✅ User deleted successfully!");
          fetchUsers(); // Refresh the list
        }
      } catch (error) {
        alert("❌ Error: " + error.message);
      }
    }
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      logoutUser();
      router.push("/login");
    }
  };

  if (!mounted || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Filter: Only show regular users (not admins)
  const regularUsers = allUsers.filter((u) => u.role !== "admin");
  const totalUsers = allUsers.length;
  const adminUsers = allUsers.filter((u) => u.role === "admin").length;
  const activeUsers = regularUsers.length;

  const stats = [
    { title: "Total Users", value: totalUsers, icon: "👥" },
    { title: "Active Users", value: activeUsers, icon: "✅" },
    { title: "Admin Users", value: adminUsers, icon: "👑" },
    { title: "New Today", value: "0", icon: "🆕" },
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
          <a href="/" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <span className="text-xl">🏠</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Home</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <span className="text-xl">⚙️</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Settings</span>
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 hover:bg-gray-700 w-full text-left"
          >
            <span className="text-xl">🚪</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Dashboard
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back, {user?.name}!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{user?.name}</div>
                  <div className="text-xs text-purple-600 font-semibold">
                    👑 Admin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Users Table - Only Regular Users */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  All Users
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Manage all registered users
                </p>
              </div>
              <div className="text-sm text-gray-500">
                Total:{" "}
                <span className="font-semibold text-gray-800">
                  {regularUsers.length}
                </span>{" "}
                users
              </div>
            </div>
            <div className="overflow-x-auto">
              {loading ? (
                <div className="text-center py-8">
                  <div className="text-gray-600">Loading users...</div>
                </div>
              ) : regularUsers.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-600">No users found</div>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Created At
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {regularUsers.map((u) => (
                      <tr key={u._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {u.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {u.email}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                            👤 User
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {new Date(u.createdAt).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            onClick={() => handleDeleteUser(u._id, u.email)}
                            className="text-red-600 hover:text-red-800 font-medium hover:underline"
                          >
                            🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
