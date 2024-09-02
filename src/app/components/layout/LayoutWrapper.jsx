"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

const LayoutWrapper = ({ children }) => {
  
  const [mobile, setMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(!mobile);
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 786);
      setSidebarOpen(!mobile);
    };

    handleResize(); 
  }, [mobile]);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex w-full mt-[68px]">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className={`h-[calc(100vh-4rem)] overflow-y-scroll relative w-full flex-1 transition-all ease-in-out duration-300
         } 
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
