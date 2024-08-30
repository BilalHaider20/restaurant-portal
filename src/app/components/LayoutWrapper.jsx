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
      
      <div className="flex w-full mt-16">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className={`h-[calc(100vh-4rem)] overflow-y-scroll relative w-full flex-1 transition-all ease-in-out duration-300
         ${sidebarOpen ? 'md:ml-[289px]' : 'md:ml-20'} 
          `}>
          <div className="flex-1">{children}
          <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
