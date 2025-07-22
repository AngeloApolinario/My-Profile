import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Nikus Angelo Miguel
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          A passionate developer crafting clean and creative web experiences.
          Let’s build something amazing together!
        </p>
        <Link
          to="/projects"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          View My Work
        </Link>
      </div>
    </div>
  );
};

export default Home;
