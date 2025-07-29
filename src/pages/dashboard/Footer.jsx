import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 flex items-center justify-center bg-zinc-800 border-t border-zinc-700 select-none">
      <h1 className="text-white text-sm capitalize">
        Copyright © 2025 dragobuzhda.com | Personal finance menagment
      </h1>
      <div className="flex min-w-auto p-4 gap-3">
        <button className="flex-1 p-2 bg-[#1e1e1e] rounded-md border border-gray-600 flex items-center justify-center gap-2 hover:bg-gray-800 hover:cursor-pointer">
          <img src="https://img.icons8.com/ios-filled/20/ffffff/mac-os.png" />
        </button>
        <button className="flex-1 p-2 bg-[#1e1e1e] rounded-md border border-gray-600 flex items-center justify-center gap-2 hover:bg-gray-800 hover:cursor-pointer">
          <img src="https://img.icons8.com/color/20/google-logo.png" />
        </button>
        <button className="flex-1 p-2 py-2 bg-[#1e1e1e] rounded-md border border-gray-600 flex items-center justify-center gap-2 hover:bg-gray-800 hover:cursor-pointer">
          <img src="https://img.icons8.com/ios-glyphs/20/ffffff/twitterx.png" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
