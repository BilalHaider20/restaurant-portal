"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

const LayoutWrapper = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { lang } = useAppSelector((state) => state.lang);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = searchParams.get('locale');
  useEffect(() => {
    if (lang !== locale) {
      // Remove the old locale from pathname
      const localePattern = /^\/[a-z]{2}/; // Assuming locale is a two-letter language code
      const updatedPathname = pathname.replace(localePattern, '');

      // Construct the new path with the updated locale
      const newPath = `/${lang}${updatedPathname}`;
      const queryParams = new URLSearchParams(searchParams.toString()).toString();
      const fullPath = queryParams ? `${newPath}?${queryParams}` : newPath;

      router.push(fullPath);
    }
  }, [lang, locale, pathname, searchParams, router]);

  const toggleSidebar = () => {
    const newSidebarOpen = !sidebarOpen;
    setSidebarOpen(newSidebarOpen);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarOpen", JSON.stringify(newSidebarOpen));
    }
  };

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted before checking window properties

    const handleResize = () => {
      const isMobile = window.innerWidth <= 786;
      setMobile(isMobile);
      const storedSidebarOpen = JSON.parse(localStorage.getItem("sidebarOpen"));
      setSidebarOpen(storedSidebarOpen ?? !isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) {
    // Avoid rendering anything that depends on window or localStorage until the component is mounted
    return null;
  }

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="relative flex w-full mt-[68px]">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className={`h-[calc(100vh-4rem)] flex flex-col overflow-y-scroll relative w-full flex-1 transition-all ease-in-out duration-300`}>
          <div className="flex-grow">{children}</div>
          <Footer  />
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
