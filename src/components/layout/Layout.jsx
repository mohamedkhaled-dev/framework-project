import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import GradientEffect from "../gradientEffect/GradientEffect";
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
