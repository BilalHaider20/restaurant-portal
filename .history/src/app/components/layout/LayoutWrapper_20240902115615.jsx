"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

const LayoutWrapper = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem("sidebarOpen")) ?? !mobile : !mobile
  );

  const toggleSidebar = () => {
    const newSidebarOpen = !sidebarOpen;
    setSidebarOpen(newSidebarOpen);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarOpen", JSON.stringify(newSidebarOpen));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 786;
      setMobile(isMobile);
      if (typeof window !== "undefined") {
        const storedSidebarOpen = JSON.parse(localStorage.getItem("sidebarOpen"));
        setSidebarOpen(storedSidebarOpen ?? !isMobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex w-full mt-[68px]">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className={`h-[calc(100vh-4rem)] overflow-y-scroll relative w-full flex-1 transition-all ease-in-out duration-300`}>
          <div className="flex-1">{children}
          <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
