import React from "react";
import { Link } from "react-router-dom";

const SideBarButton = ({ icon, acction, link }) => {
  return (
    <div className="text-gray-300 w-full rounded-lg">
      <Link
        to={link}
        className="bg-black w-full rounded-lg flex gap-3 items-center p-3 hover:bg-zinc-900 hover:text-white transition-all cursor-pointer"
      >
        <i className="w-8">{icon}</i>
        <div className="w-full rounded-lg self-start">{acction}</div>
      </Link>
    </div>
  );
};

export default SideBarButton;
