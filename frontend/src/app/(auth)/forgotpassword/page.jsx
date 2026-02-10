"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset email sent");
    setEmailSent(true);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
            Forgot Password?
          </h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            Don&apos;t worry! Enter your email and we&apos;ll send you a reset
            link.
          </p>

          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="apka@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mb-4 text-green-600">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Email Sent!
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Password reset link aapke email par bhej diya gaya hai. Please
                check your inbox.
              </p>
              <button
                onClick={() => setEmailSent(false)}
                className="text-blue-600 hover:underline text-sm"
              >
                Resend Email
              </button>
            </div>
          )}

          <div className="text-center mt-6">
            <a href="/login" className="text-sm text-blue-600 hover:underline">
              ← Back to Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
