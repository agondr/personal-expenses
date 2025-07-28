import React from "react";
import { Link } from "react-router-dom";

const DashBoardButton = ({ icon, label, link }) => {
  return (
    <Link
      to={link}
      className="flex items-center gap-2 bg-zinc-800 p-2 rounded-lg hover:cursor-pointer hover:bg-white transition-all hover:text-black"
    >
      <i>{icon}</i>
      {label}
    </Link>
  );
};

export default DashBoardButton;
