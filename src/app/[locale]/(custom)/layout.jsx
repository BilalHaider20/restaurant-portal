import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Providers from "@/lib/providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PrelineScript from "../../components/PrelineScript";
import StoreProvider from "../../StoreProvider";
import Navbar from "@/app/components/layout/custom/header/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookme Restaurant Portal",
  description: "Bookme Admin Portal",
};

export default async function RootLayout({ children, params }) {
  const direction = params.locale === "ar" ? "rtl" : "ltr";
  const messages = await getMessages();

  return (
    <html lang={params.locale} dir={direction} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            {/* <Providers> */}
            <Navbar />
            {children}
            {/* </Providers> */}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
