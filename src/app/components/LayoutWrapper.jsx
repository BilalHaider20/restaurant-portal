"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="w-full">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <main className="flex w-full">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className="relative w-full">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default LayoutWrapper;
