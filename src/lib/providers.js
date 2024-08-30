"use client";
import { ThemeProvider } from "next-themes";
import {useState,useEffect} from 'react'
export default function Providers({ children }) {
    const [mounted, setmounted] = useState(false);

    useEffect(() => {
      setmounted(true);
    },[]);

    if(!mounted){
      return <>
      {children}
      </>;
    }
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}