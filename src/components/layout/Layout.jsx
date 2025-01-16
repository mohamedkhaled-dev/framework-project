import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import GradientEffect from "../gradientEffect/GradientEffect.jsx";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-col flex overflow-hidden dark:bg-gray-900">
        <GradientEffect />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
