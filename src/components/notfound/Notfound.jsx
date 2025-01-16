import React, { useEffect } from "react";
import { NavLink } from "react-router";

const Notfound = () => {
  useEffect(() => {
    // Update the document title on component mount
    document.title = "Not Found";
  }, []);
  return (
    <>
      <div className="isolate px-6 pt-14 lg:px-8 min-h-screen flex flex-col justify-center z-10">
        <div className="container">
          <div className="text-center flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold text-indigo-600 pt-4 pb-8 text-pretty md:text-4xl max-w-2xl text-start cursor-default animate-bounce">
              404
            </p>
            <h2 className="text-balance text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase cursor-default">
              Page not found
            </h2>
            <p className="pt-4 text-pretty text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl text-start cursor-default">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="pt-10 flex items-center justify-center gap-x-6 w-full">
              <NavLink
                to={"/"}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-center max-w-xl"
              >
                Go back home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
