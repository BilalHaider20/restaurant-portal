"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex w-full">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className="h-screen overflow-y-scroll relative w-full">
          <div className="flex-1">{children}
          <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
