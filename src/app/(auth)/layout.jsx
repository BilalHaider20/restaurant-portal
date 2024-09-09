import { Inter } from "next/font/google";
import '../styles/globals.css'

import PrelineScript from "@/app/components/PrelineScript";
import StoreProvider from "@/app/StoreProvider";


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {

    return (
        <html suppressHydrationWarning>
            <body className={inter.className}>

                <StoreProvider>
                    {/* <Providers> */}
                    {children}
                    {/* </Providers> */}
                </StoreProvider>

            </body>
            <PrelineScript />
        </html>
    );
}
