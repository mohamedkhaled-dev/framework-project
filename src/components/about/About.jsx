import React, { useEffect, useState } from "react";
import Avatar from "../../assets/Developer activity-bro.svg";
import { SiJavascript, SiTailwindcss, SiVite } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaSass,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
const About = () => {
  const [skills, setSkills] = useState([
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
    { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
    { icon: <SiVite className="text-[#646CFF]" />, name: "Vite" },
    { icon: <FaBootstrap className="text-[#7952B3]" />, name: "Bootstrap" },
    { icon: <FaSass className="text-[#CC6699]" />, name: "Sass" },
    {
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaGithub className="text-gray-900 dark:text-white" />,
      name: "GitHub",
    },
  ]);

  useEffect(() => {
    // Update the document title on component mount
    document.title = "About";
  }, []);

  return (
    <>
      <div className=" isolate px-6 pt-24 pb-12 lg:px-8 min-h-screen flex flex-col justify-center z-10">
        <div className="container">
          {/* Content */}
          <div className="pt-10 flex items-center justify-center">
            <figure className="min-w-[450px] lg:min-w-[550px]">
              <img className="w-full" src={Avatar} alt="" />
            </figure>
          </div>
          <p className="pt-4 text-pretty text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-start cursor-default">
            I'm a passionate web developer specializing in creating beautiful
            and functional web applications. With expertise in React, Tailwind
            CSS, and modern web technologies, I bring ideas to life through
            clean and efficient code
          </p>
          {/* Skills Section */}
          <div className="max-w-3xl mx-auto pt-12">
            <div className="p-8 overflow-hidden backdrop-blur-sm">
              <div className="inline-flex flex-nowrap ">
                <div className="flex items-center animate-scroll-right">
                  {[...skills, ...skills].map((skill, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex flex-col items-center me-12 group"
                    >
                      <div className="text-6xl transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2 z-20">
                        {skill.icon}
                      </div>
                      <span className="text-center pt-2 w-full text-sm font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-6">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
