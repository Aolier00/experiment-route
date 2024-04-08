import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state);
  return (
    <div className="h-screen w-full flex gap-4 items-center justify-center">
      {user.modules.find((item) => item === "module1") && (
        <Link to="/module1">
          <button className="px-2 py-4 uppercase text-gray-500 font-medium border-2 bg-transparent border-gray-400 rounded-md hover:bg-gray-400 hover:delay-200 hover:text-white hover:duration-300 focus:ring focus:ring-neutral-500 focus:text-white focus:bg-gray-400 focus:border-none">
            Ir a modulo 1
          </button>
        </Link>
      )}
      {user.modules.find((item) => item === "module2") && (
        <Link to="/module2">
          <button className="px-2 py-4 uppercase text-gray-500 font-medium border-2 bg-transparent border-gray-400 rounded-md hover:bg-gray-400 hover:delay-200 hover:text-white hover:duration-300 focus:ring focus:ring-neutral-500 focus:text-white focus:bg-gray-400 focus:border-none">
            Ir a modulo 2
          </button>
        </Link>
      )}
    </div>
  );
};

export default Home;
