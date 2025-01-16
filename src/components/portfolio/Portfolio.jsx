import React, { useEffect, useState } from "react";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Portfolio = () => {
  const projects = [
    {
      src: project1,
      alt: "Portfolio Project One - Game Discovery Website",
      name: "GameZone",
      demo: "https://mohamedkhaled-dev.github.io/gamezone/",
      github: "https://github.com/mohamedkhaled-dev/gamezone",
    },
    {
      src: project2,
      alt: "Portfolio Project Two - Login & Signup Page",
      name: "Login & Signup UI",
      demo: "https://mohamedkhaled-dev.github.io/login-page/",
      github: "https://github.com/mohamedkhaled-dev/login-page",
    },
    {
      src: project3,
      alt: "Portfolio Project Three - Restaurant Website",
      name: "Mealify",
      demo: "https://mohamedkhaled-dev.github.io/mealify-website/",
      github: "https://github.com/mohamedkhaled-dev/mealify-website",
    },
    {
      src: project4,
      alt: "Portfolio Project Four - Weather App",
      name: "SkyWizard",
      demo: "https://mohamedkhaled-dev.github.io/skywizard/",
      github: "https://github.com/mohamedkhaled-dev/skywizard",
    },
    {
      src: project5,
      alt: "Portfolio Project Five - Bookmark Manager",
      name: "Bookmarkly",
      demo: "https://mohamedkhaled-dev.github.io/bookmarkly/",
      github: "https://github.com/mohamedkhaled-dev/bookmarkly",
    },
    {
      src: project6,
      alt: "Portfolio Project Six - Random Quote Generator",
      name: "Quote Generator",
      demo: "https://mohamedkhaled-dev.github.io/quote-generator/",
      github: "https://github.com/mohamedkhaled-dev/quote-generator",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = (index) => {
    setSelectedProject(projects[index]);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="min-h-screen px-6 py-24 lg:px-8 z-20">
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col justify-center text-start pb-4 ps-4">
          <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase cursor-default">
            Portfolio
          </h2>
          <p className="pt-2 text-pretty text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl cursor-default ">
            Check out some of my favorite projects that I'm proud to have built
          </p>
        </div>

        {/* Projects Flex Container */}
        <div className="flex flex-wrap cursor-pointer">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3">
              <div
                className="group transition-transform duration-300 h-full p-4"
                onClick={() => toggleModal(index)} 
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <figure className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full"
                    />
                  </figure>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-900/80 dark:bg-gray-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    {/* Divider with Project Name */}
                    <div className="relative flex items-center justify-center mb-6 w-4/5">
                      <span className="relative px-4 py-2 text-gray-100 dark:text-gray-100 text-lg font-bold before:content-[''] before:absolute before:w-[80px] before:h-[1px] before:left-[100%] before:top-1/2 before:-translate-y-1/2 before:bg-gray-400 dark:before:bg-gray-300 after:content-[''] after:absolute after:w-[80px] after:h-[1px] after:right-[100%] after:top-1/2 after:-translate-y-1/2 after:bg-gray-400 dark:after:bg-gray-300">
                        {project.name}
                      </span>
                    </div>
                    {/* Buttons Container */}
                    <div className="flex space-x-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-colors duration-300 group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BiLinkExternal className="w-5 h-5" />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-3 border border-white text-white  rounded-2xl hover:bg-gray-600/50 dark:hover:bg-gray-500/50 transition-colors duration-300 group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-900/5 backdrop-blur-md dark:bg-gray-800/5 z-40 px-8"
            onClick={() => setIsModalOpen(false)}
          >
            {selectedProject && (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <figure className="pt-4">
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.alt}
                    className="w-full rounded-lg"
                  />
                </figure>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
