import { Inter } from "next/font/google";
import '../styles/globals.css'

import { useAppSelector } from "@/lib/hooks";
import { redirect } from "next/navigation";
import PrelineScript from "@/app/components/PrelineScript";
import LayoutWrapper from "@/app/components/layout/LayoutWrapper";
import StoreProvider from "../StoreProvider";

const inter = Inter({ subsets: ["latin"] });



export default async function RootLayout({ children, params }) {

  return (
    <html  suppressHydrationWarning>
      <body className={inter.className}>

          <StoreProvider>
          {/* <Providers> */}
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          {/* </Providers> */}
          </StoreProvider>

      </body>
      <PrelineScript />


    </html>
  );
}
