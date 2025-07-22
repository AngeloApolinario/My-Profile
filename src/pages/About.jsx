import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-24">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src="/2X2.png"
            alt="My Profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hello! I’m{" "}
            <span className="text-indigo-400 font-semibold">
              Nikus Angelo Miguel
            </span>
            , a passionate developer from the Philippines. I specialize in
            building clean, modern, and performant web and mobile experiences.
            Whether it’s frontend UI/UX or backend logic, I strive for
            excellence in every line of code.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-indigo-400">
            Skills:
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>React.js, JavaScript, Tailwind CSS</li>
            <li>Laravel, PHP, MySQL</li>
            <li>Android (Java), Firebase</li>
            <li>REST APIs, Git & GitHub</li>
            <li>UI/UX Design, Responsive Web Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
