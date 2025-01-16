import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Update the document title on component mount
    document.title = "Contact";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12  flex justify-center items-center z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between xl:px-24">
          {/* Left Section - Contact Info */}
          <div className="w-full md:w-1/2 md:sticky md:top-10">
            <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase cursor-default pb-4">
              Get in touch
            </h2>
            <p className="pb-8 text-pretty text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-start cursor-default">
              Ready to start your next project? I'm here to help bring your
              ideas to life. Whether you have a specific plan in mind or need
              guidance, feel free to reach out and let's discuss how we can work
              together
            </p>
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3">
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 cursor-default">
                    Cairo, Egypt
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 cursor-default">
                    Shubra, St 11689
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 cursor-default">
                  +20 (111) 881-5757
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 cursor-default">
                  mohamedkhaled20031@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">
                    First name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">
                    Last name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">
                  Phone number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full resize-none px-4 py-2 border border-gray-300 rounded-md focus:ring-2 outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
