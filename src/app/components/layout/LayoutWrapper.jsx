"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import '../../../i18n'
import { withTranslation, useTranslation } from 'react-i18next';

const LayoutWrapper = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { lang } = useAppSelector((state) => state.lang);
  const { i18n } = useTranslation();
  const {user} = useAppSelector((state) => state.auth);
  const router = useRouter();


  const toggleSidebar = () => {
    const newSidebarOpen = !sidebarOpen;
    setSidebarOpen(newSidebarOpen);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarOpen", JSON.stringify(newSidebarOpen));
    }
  };

  useEffect(() => {
    if (lang !== 'en') {
      i18n.changeLanguage(lang);
    }

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
  }, [lang, i18n]);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  // Avoid rendering the content until authentication is checked
  if (!isMounted || !user) {
    return null;
  }

  return (
    <div lang={lang} dir={lang === 'en' ? "ltr" : "rtl"}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="relative flex w-full mt-[68px]">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className={`flex flex-col overflow-y-auto relative w-full flex-1 transition-all ease-in-out duration-300`}>
          <div className="h-[calc(100vh-8rem)] overflow-y-auto flex-grow">{children}</div>
          <Footer  />
        </main>
      </div>
    </div>
  );
};

export default withTranslation()(LayoutWrapper);