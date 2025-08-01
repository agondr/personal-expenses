import LoginForm from "@/components/shared/auth/LoginForm";
import { HandCoins } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-[#121212] p-8 rounded-xl shadow-lg w-[90%] max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">
              <HandCoins />
            </span>
          </div>

          <h2 className="text-2xl font-semibold">Welcome Back</h2>
          <p className="text-sm text-gray-400">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="text-white font-bold hover:underline"
            >
              {" "}
              Sing Up
            </Link>
          </p>
          <p>
            <Link to="/dashboard" className="text-white hover:underline">
              {" "}
              Visit Dashboard
            </Link>
          </p>
          <LoginForm />

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

export default Login;
