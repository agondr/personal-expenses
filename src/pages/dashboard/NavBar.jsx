import React from "react";
import { Search, User } from "lucide-react";

const NavBars = () => {
  return (
    <header className="w-full flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Hi, <span>User!</span>
        </h1>
        <p className="text-sm text-zinc-400">
          Welcome back, manage your finances effortiesly
        </p>
      </div>
      <div className="flex justify-between items-center gap-4 w-80">
        <div className="bg-zinc-800 p-2 pr-3 pl-3 rounded-lg flex items-center gap-2 h-10 w-full">
          <i className="text-zinc-400 cursor-pointer hover:text-white">
            <Search />
          </i>
          <input
            className="text-sm bg-transparent outline-none text-zinc-400 placeholder:text-zinc-500 hover:placeholder:text-white w-full"
            placeholder="Search or type a command"
            type="text"
          />
        </div>
        <div className="bg-zinc-600 rounded-full flex items-center justify-center w-[45px] min-w-[45px] h-[45px] min-h-[45px] cursor-pointer">
          <i>
            <User />
          </i>
        </div>
      </div>
    </header>
  );
};

export default NavBars;
