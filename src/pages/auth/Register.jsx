import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-[#121212] p-8 rounded-xl shadow-lg w-[90%] max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">O</span>
          </div>

          <h2 className="text-2xl font-semibold">Create an Account</h2>
          <p className="text-sm text-gray-400">
            Already have an account?
            <Link to="/login" className="text-white hover:underline">
              {" "}
              Login
            </Link>
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 mt-4 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 mt-3 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mt-3 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 mt-3 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button className="w-full mt-5 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold hover:opacity-90 transition">
            Register
          </button>

          <div className="text-gray-500 text-sm my-3">OR</div>

          <div className="flex w-full gap-3">
            <button className="flex-1 py-2 bg-[#1e1e1e] rounded-md border border-gray-600 flex items-center justify-center gap-2 hover:bg-gray-800">
              <img src="https://img.icons8.com/ios-filled/20/ffffff/mac-os.png" />
            </button>
            <button className="flex-1 py-2 bg-[#1e1e1e] rounded-md border border-gray-600 flex items-center justify-center gap-2 hover:bg-gray-800">
              <img src="https://img.icons8.com/color/20/google-logo.png" />
            </button>
            <button className="flex-1 py-2 bg-[#1e1e1e] rounded-md border border-gray-600 flex items-center justify-center gap-2 hover:bg-gray-800">
              <img src="https://img.icons8.com/ios-glyphs/20/ffffff/twitterx.png" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
