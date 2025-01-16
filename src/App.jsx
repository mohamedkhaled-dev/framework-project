import React from "react";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Notfound from "./components/notfound/Notfound.jsx";
import Layout from "./components/layout/Layout.jsx";
import { createHashRouter, RouterProvider } from "react-router";
const App = () => {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
