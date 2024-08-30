"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  
  const [mobile, setMobile] = useState(window.innerWidth <= 786);
  const [sidebarOpen, setSidebarOpen] = useState(!mobile);
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 786);
      setSidebarOpen(!mobile);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <main className="flex w-full">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className="h-screen overflow-y-scroll relative w-full">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default LayoutWrapper;
