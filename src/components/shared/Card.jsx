import React from "react";

const Card = ({ title, desc, amount, icon }) => {
  return (
    <div className="bg-zinc-900 text-white p-4 rounded-lg shadow-black shadow-sm border-gray-700 border w-52 flex flex-col gap-4">
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-1xl">{amount}</p> <i>{icon}</i>
      </div>
    </div>
  );
};

export default Card;
