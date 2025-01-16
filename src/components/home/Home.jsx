import React, { useEffect } from "react";
import Avatar from "../../assets/JavaScript frameworks-amico.svg";

const Home = () => {
  useEffect(() => {
    // Update the document title on component mount
    document.title = "Home";
  }, []);
  return (
    <>
      <div className=" isolate px-6 pt-14 lg:px-8 min-h-screen flex flex-col justify-center z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-x-4">
            <figure className="flex items-center min-w-[350px] sm:min-w-[550px]">
              <img className="w-full" src={Avatar} alt="" />
            </figure>
            <div className=" pt-4 flex flex-col justify-center items-center ">
              <h1 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase cursor-default">
                Framework Project
              </h1>
              <p className="pt-2 text-pretty text-sm md:text-base text-gray-500 dark:text-gray-400 cursor-default ">
                Graphic Artist - Web Designer - Illustrator
              </p>
              <div className="pt-8 flex items-center justify-center gap-x-6 w-full">
                <a
                  href="mailto:mohamedkhaled-dev@outlook.com"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
