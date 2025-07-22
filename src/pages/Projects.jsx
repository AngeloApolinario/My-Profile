import React from "react";

const projects = [
  {
    title: "Healthy Paws App and Website",
    description:
      "A veterinary scheduling app for pet owners to book, reschedule, and manage medical records.",
    image: "/healthypaws.png",
    link: "https://github.com/AngeloApolinario/Pet-Health-Care-Management-System",
  },
  {
    title: "VNHS Record Management System",
    description:
      "A responsive web app for managing student and faculty records at Vega National High School, built with PHP MySQL",
    image: "/vnhs.png",
    link: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS to showcase my projects and resume.",
    image: "/portfolio.png",
    link: "https://github.com/yourusername/portfolio-site",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-600 transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
